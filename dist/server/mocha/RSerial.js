"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var Converter_1 = __importStar(require("../stm/Converter"));
var Message_1 = __importDefault(require("../usart/Message"));
var machine = (_a = {},
    _a[Converter_1.StmMessages.Relay1] = '0',
    _a[Converter_1.StmMessages.Relay2] = '0',
    _a[Converter_1.StmMessages.Relay3] = '0',
    _a[Converter_1.StmMessages.Relay4] = '0',
    _a[Converter_1.StmMessages.Relay5] = '0',
    _a[Converter_1.StmMessages.Relay6] = '0',
    _a[Converter_1.StmMessages.Relay7] = '0',
    _a[Converter_1.StmMessages.Relay8] = '0',
    _a[Converter_1.StmMessages.Valve1] = '0',
    _a[Converter_1.StmMessages.Valve2] = '0',
    _a[Converter_1.StmMessages.Valve3] = '0',
    _a[Converter_1.StmMessages.Valve4] = '0',
    _a[Converter_1.StmMessages.Valve5] = '0',
    _a[Converter_1.StmMessages.Valve6] = '0',
    _a[Converter_1.StmMessages.SteamPressure] = '1010',
    _a[Converter_1.StmMessages.Group1Pressure] = '90',
    _a[Converter_1.StmMessages.Group1Temperature] = '90',
    _a[Converter_1.StmMessages.Group2Pressure] = '90',
    _a[Converter_1.StmMessages.Group2Temperature] = '90',
    _a[Converter_1.StmMessages.WaterLevel] = '0',
    _a);
var MochaMashine = (_b = {},
    _b[Converter_1.StmCommands.SetRelay1] = '0',
    _b[Converter_1.StmCommands.SetRelay2] = '0',
    _b[Converter_1.StmCommands.SetRelay3] = '0',
    _b[Converter_1.StmCommands.SetRelay4] = '0',
    _b[Converter_1.StmCommands.SetRelay5] = '0',
    _b[Converter_1.StmCommands.SetRelay6] = '0',
    _b[Converter_1.StmCommands.SetRelay7] = '0',
    _b[Converter_1.StmCommands.SetRelay8] = '0',
    _b[Converter_1.StmCommands.SetValve1] = '0',
    _b[Converter_1.StmCommands.SetValve2] = '0',
    _b[Converter_1.StmCommands.SetValve3] = '0',
    _b[Converter_1.StmCommands.SetValve4] = '0',
    _b[Converter_1.StmCommands.SetValve5] = '0',
    _b[Converter_1.StmCommands.SetValve6] = '0',
    _b);
var waterProcess = function () {
    setTimeout(function () {
        machine[Converter_1.StmMessages.WaterLevel] = '1';
    }, 8000);
};
function set(cmd, msg) {
    // @ts-ignore
    if (MochaMashine[cmd] === '1' && machine[msg] === '0') {
        // @ts-ignore
        machine[msg] = '1';
    }
    // @ts-ignore
    if (MochaMashine[cmd] === '0') {
        // @ts-ignore
        machine[msg] = '0';
    }
}
setInterval(function () {
    if (MochaMashine[Converter_1.StmCommands.SetRelay8] === '1' && machine[Converter_1.StmMessages.Relay8] === '0') {
        machine[Converter_1.StmMessages.Relay8] = '1';
        if (machine[Converter_1.StmMessages.Relay8] === '1') { // todo check valve
            waterProcess();
        }
    }
    if (MochaMashine[Converter_1.StmCommands.SetRelay8] === '0') {
        machine[Converter_1.StmMessages.Relay8] = '0';
    }
    set(Converter_1.StmCommands.SetValve1, Converter_1.StmMessages.Valve1);
    set(Converter_1.StmCommands.SetValve2, Converter_1.StmMessages.Valve2);
    set(Converter_1.StmCommands.SetValve3, Converter_1.StmMessages.Valve3);
    set(Converter_1.StmCommands.SetValve4, Converter_1.StmMessages.Valve4);
    set(Converter_1.StmCommands.SetValve5, Converter_1.StmMessages.Valve5);
    set(Converter_1.StmCommands.SetValve6, Converter_1.StmMessages.Valve6);
}, 100);
var RSerial = /** @class */ (function () {
    function RSerial() {
        this._portId = '123';
        this.msg = 0;
    }
    RSerial.prototype.startMessages = function (func) {
        var _this = this;
        setTimeout(function () {
            var messages = Object.keys(machine);
            if (!messages[_this.msg]) {
                _this.msg = 0;
            }
            var msgObject = new Message_1.default();
            // @ts-ignore
            var msg = msgObject.getMessageFromString(Converter_1.default.toString({ id: messages[_this.msg], content: machine[messages[_this.msg]] }));
            func(msg);
            if (_this.echoAns) {
                var msg_1 = msgObject.getMessageFromString(Converter_1.default.toString({ id: Converter_1.StmMessages.Echo, content: _this.echoAns }));
                _this.echoAns = '';
                func(msg_1);
            }
            _this.msg++;
            _this.startMessages(func);
        }, 100);
    };
    RSerial.prototype.on = function (a, f) {
        this.startMessages(f);
        return this;
    };
    RSerial.prototype.open = function (cb) {
        setTimeout(function () {
            cb && cb();
        }, 1000);
    };
    RSerial.prototype.close = function (cb) {
    };
    RSerial.prototype.write = function (data, cb) {
        var msg = new Message_1.default();
        // @ts-ignore
        var message = msg.getMessageFromCode(data);
        var stmM = Converter_1.default.fromString(message);
        this.echoAns = message;
        // console.log('STM:', stmM)
        // @ts-ignore
        MochaMashine[stmM.id] = stmM.content;
        setTimeout(function () {
            cb();
        }, 100);
    };
    RSerial.prototype.flush = function (cb) {
    };
    return RSerial;
}());
exports.RSerial = RSerial;
//# sourceMappingURL=RSerial.js.map