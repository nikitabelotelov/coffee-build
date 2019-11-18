"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var index_1 = __importDefault(require("../reducers/index"));
var WebSocketController_1 = require("../actions/WebSocketController");
var Converter_1 = __importStar(require("../../server/stm/Converter"));
var actionTypes_1 = __importDefault(require("../actions/actionTypes"));
var machineLife_1 = require("../actions/machineLife");
var store = redux_1.createStore(index_1.default);
var WebSocketInst = new WebSocketController_1.WebSocketController();
WebSocketInst.registerCallback(function (data) {
    var parsed = JSON.parse(data);
    if (parsed.stm) {
        var msg = Converter_1.default.fromString(parsed.stm);
        store.dispatch({
            type: actionTypes_1.default.currentInfoUpdate,
            payload: msg
        });
    }
    if (parsed.settingsProfiles) {
        store.dispatch({
            type: actionTypes_1.default.settingsProfilesInitialize,
            payload: parsed.settingsProfiles
        });
    }
});
exports.emitSettingsChange = function (payload) {
    WebSocketInst.send(JSON.stringify(__assign(__assign({}, payload), { profile: "default" })));
};
exports.emitStm = function (payload, waitEcho) {
    //console.log("Message emitted " + JSON.stringify(payload));
    WebSocketInst.send(JSON.stringify({ stm: Converter_1.default.toString(payload) }));
    if (waitEcho) {
        var echoWaiter_1 = function (data) {
            var parsed = JSON.parse(data);
            var msg = Converter_1.default.fromString(parsed.stm);
            if (msg.id === Converter_1.StmMessages.Echo) {
                var converted = Converter_1.default.fromString(msg.content);
                // console.log('ECHO:', converted)
                if (payload.id === converted.id && payload.content === converted.content) {
                    clearTimeout(echoTimeout_1);
                }
                else {
                    exports.emitStm(payload, true);
                }
                WebSocketInst.unRegisterCallback(echoWaiter_1);
            }
        };
        var echoTimeout_1 = setTimeout(function () {
            exports.emitStm(payload, true);
            WebSocketInst.unRegisterCallback(echoWaiter_1);
        }, 1000);
        WebSocketInst.registerCallback(echoWaiter_1);
    }
};
setTimeout(function () {
    setInterval(function () {
        machineLife_1.Life.step();
    }, 50);
}, 5000);
exports.default = store;
//# sourceMappingURL=index.js.map