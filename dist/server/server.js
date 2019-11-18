"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
//import template from '../src/template'; use for SSR
var ws_1 = __importDefault(require("ws"));
var Usart_1 = __importDefault(require("./usart/Usart"));
var RSerial_1 = require("./mocha/RSerial");
var Converter_1 = __importDefault(require("./stm/Converter"));
var fsLib_1 = require("./fs/fsLib");
var fs_1 = __importDefault(require("fs"));
var Serial;
try {
    Serial = require('raspi-serial').Serial;
}
catch (e) {
    console.warn('Couldn\'t load raspi-serial. Will use mock-object instead.');
    Serial = RSerial_1.RSerial;
}
var app = express_1.default(), resourcesPath = path_1.default.join("", ".");
var settingsProfiles;
var root = process.cwd();
app.use(express_1.default.static(resourcesPath));
var indexFile = fs_1.default.readFileSync(path_1.default.join(root, 'index.html'), 'utf8');
app.use('/*', function (req, res) {
    res.send(indexFile);
});
var port = process.env.PORT || 777;
var expressServer = app.listen({ port: port }, function () {
    return console.log("\uD83D\uDE80 Server ready");
});
var wss = new ws_1.default.Server({ server: expressServer });
var clients = {};
var serial;
if (process.arch === 'arm') {
    // serial = new Serial({baudRate: 57600});
}
else {
    serial = new RSerial_1.RSerial();
}
var messagesFromStm = [];
var settingsMsg = [];
var usart = new Usart_1.default(serial);
var sendMessages = function () {
    while (messagesFromStm.length) {
        var msg = messagesFromStm.pop();
        for (var client in clients) {
            try {
                clients[client].ws.send(JSON.stringify({ stm: Converter_1.default.toString(msg) }));
            }
            catch (e) {
                console.error('Couldn\'t send message to websocket. Connection is probably closed. ' + e.message);
            }
        }
    }
    while (settingsMsg.length) {
        var msg = settingsMsg.pop();
        for (var client in clients) {
            try {
                clients[client].ws.send(JSON.stringify({ settingsProfiles: msg }));
            }
            catch (e) {
                console.error('Couldn\'t send message to websocket. Connection is probably closed. ' + e.message);
            }
        }
    }
};
usart.msgHandlers.push(function (message) {
    var stm = Converter_1.default.fromString(message);
    messagesFromStm.push(stm);
    sendMessages();
});
wss.on("connection", function connectionListener(ws) {
    var id = Math.random();
    clients[id] = {
        ws: ws
    };
    console.log("новое соединение " + id);
    fsLib_1.loadSettings().then(function (result) {
        settingsProfiles = result;
        settingsMsg.push(settingsProfiles);
        sendMessages();
    });
    ws.on("close", function () {
        delete clients[id];
    });
    ws.on("message", function (data) {
        // console.log(data);
        // @ts-ignore
        var message = JSON.parse(data);
        if (message.stm) {
            //console.log("Got message from client. Trying to send to usart.");
            usart.sendMessage(message.stm);
        }
        else if (message.settings) {
            settingsProfiles.profiles[message.settings.profile][message.settings] = message.settings.content;
            fsLib_1.serializeSettingsProfiles(settingsProfiles);
            // todo: save settings to file
            // read - change - save
        }
    });
});
//# sourceMappingURL=server.js.map