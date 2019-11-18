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
exports.SteamTemperature = function (state, commands, changeStatus) {
    var machine = SettingsStore_1.default.getState().machine;
    var settings = SettingsStore_1.default.getState().settings;
    if (state.stop) {
        return state;
    }
    var pressure = parseInt(machine[Converter_1.StmMessages.SteamPressure], 10) || 0;
    var needPressure = parseInt(settings.SteamPressure) || 0;
    /* TODO: energy mode
    const isEnergyMode = settings.EnergyMode === '1';
    if (isEnergyMode) {
          NeedWork = (LEVEL_STEAM_VALUE > LevelSteamMin) && (TEMP_STEAM_MIDDLE < 75) && (COMPR_STEAM2_HUMAN_VALUE < ComprSteamWorkMax);
          NeedWorkEnd = (TEMP_STEAM_MIDDLE >= 90);
          NeedStartFastHot = 0;
          NeedStartTen = (LEVEL_STEAM_VALUE > LevelSteamMin) && (TEMP_STEAM_MIDDLE < 75);
          NeedFinishTen = (TEMP_STEAM_MIDDLE >= 90);
      }
    */
    if (pressure < needPressure) {
        changeStatus(types_1.ProcessStatus.wip);
        commands[Converter_1.StmCommands.SetRelay1]++;
        commands[Converter_1.StmCommands.SetRelay2]++;
    }
    else {
        changeStatus(types_1.ProcessStatus.done);
    }
    return __assign({}, state);
};
//# sourceMappingURL=SteamPressure.js.map