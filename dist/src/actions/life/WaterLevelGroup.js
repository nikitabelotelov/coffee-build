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
exports.WaterLevelGroup = function (groupPressureFlag, commandValve, settingsKey) { return function (state, commands, changeStatus) {
    var machine = SettingsStore_1.default.getState().machine;
    var settings = SettingsStore_1.default.getState().settings;
    if (state.stop) {
        return state;
    }
    var pressure = parseInt(machine[groupPressureFlag], 10) || 0;
    var needTemperature = parseInt(settings[settingsKey]) || 0;
    if (pressure < 100 && needTemperature > 70) {
        changeStatus(types_1.ProcessStatus.wip);
        commands[Converter_1.StmCommands.SetRelay8]++;
        commands[commandValve]++;
    }
    else {
        changeStatus(types_1.ProcessStatus.done);
    }
    return __assign({}, state);
}; };
//# sourceMappingURL=WaterLevelGroup.js.map