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
Object.defineProperty(exports, "__esModule", { value: true });
var SettingsStore_1 = __importDefault(require("../../SettingsStore"));
exports.WarmGroup = function (pressure, rele1, rele2, // ????
setTemp, trend) { return function (state, commands, changeStatus) {
    var machine = SettingsStore_1.default.getState().machine;
    var settings = SettingsStore_1.default.getState().settings;
    var life = SettingsStore_1.default.getState().life;
    if (state.stop) {
        return state;
    }
    var pressureG = parseInt(machine[pressure], 10) || 0;
    var needTemp = parseInt(settings[setTemp], 10) || 0;
    if (needTemp < 70 || pressureG < 500) {
        return state;
    }
    var trendG = life[trend];
    var temperature = trendG[trendG.length - 1].value;
    //const speed = life['speedG1']
    switch (state.step) {
        case '1':
            if (state.power > 0) {
                commands[rele1]++;
            }
            var current = Date.now();
            if (current - state.stepStart > state.waitWarmTimeout) {
                state.step = '0';
            }
            break;
        default:
            if (!state.I) {
                state.I = 0;
            }
            if (!state.prevError) {
                state.prevError = 0;
            }
            var e = needTemp - temperature;
            var kProp = 0.5;
            var kInt = 0.002;
            var kDiff = 50;
            var P = kProp * e;
            var I = state.I + kInt * e;
            var D = (e - state.prevError) * kDiff;
            state.power = P + I + D;
            state.power *= 1000;
            if (state.power < 0) {
                state.waitWarmTimeout = 300;
            }
            else {
                state.waitWarmTimeout = state.power > 5000 ? 5000 : state.power;
            }
            state.prevError = e;
            state.step = 1;
            state.stepStart = Date.now();
            break;
    }
    return __assign({}, state);
}; };
//# sourceMappingURL=WarmGroup.js.map