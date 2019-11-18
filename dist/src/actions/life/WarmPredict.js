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
var types_1 = require("../../types");
var SettingsStore_1 = __importDefault(require("../../SettingsStore"));
var Converter_1 = require("../../../server/stm/Converter");
exports.WarmPredict = function (state, commands, changeStatus) {
    var machine = SettingsStore_1.default.getState().machine;
    var settings = SettingsStore_1.default.getState().settings;
    if (state.stop) {
        return state;
    }
    var needTempG1 = parseInt(settings.Group1Temperature, 10) || 0;
    var needTempG2 = parseInt(settings.Group2Temperature, 10) || 0;
    var pressureG1 = parseInt(machine[Converter_1.StmMessages.Group1Pressure], 10) || 0;
    var pressureG2 = parseInt(machine[Converter_1.StmMessages.Group2Pressure], 10) || 0;
    if (needTempG1 < 70 && needTempG2 < 70 || pressureG1 < 500 || pressureG2 < 500) {
        return state;
    }
    var temperature = parseInt(machine[Converter_1.StmMessages.PredictGroupTemperature], 10);
    if (temperature < 75) {
        state.started = 1;
        changeStatus(types_1.ProcessStatus.wip);
        commands[Converter_1.StmCommands.SetRelay1]++;
    }
    else if (state.started) {
        commands[Converter_1.StmCommands.SetRelay1]++;
    }
    else if (temperature > 85) {
        state.started = 0;
        changeStatus(types_1.ProcessStatus.done);
    }
    return __assign({}, state);
};
//# sourceMappingURL=WarmPredict.js.map