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
exports.WaterLevel = function (state, commands, changeStatus) {
    var machine = SettingsStore_1.default.getState().machine;
    if (state.stop) {
        return state;
    }
    switch (machine[Converter_1.StmMessages.WaterLevel]) {
        case "1":
            if (state.wasWIP && state.doneTime < 5000) {
                changeStatus(types_1.ProcessStatus.done);
                commands[Converter_1.StmCommands.SetValve1] = 1;
                commands[Converter_1.StmCommands.SetRelay8]++;
            }
            else {
                state.wasWIP = 0;
            }
            break;
        case "0":
            if (state.wipTime > 1000) {
                changeStatus(types_1.ProcessStatus.wip);
                commands[Converter_1.StmCommands.SetValve1] = 1;
                commands[Converter_1.StmCommands.SetRelay8]++;
                state.wasWIP = 1;
            }
            break;
    }
    return __assign({}, state);
};
//# sourceMappingURL=WaterLevel.js.map