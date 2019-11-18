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
var checkToStop = function (button, state) {
    var machine = SettingsStore_1.default.getState().machine;
    if (machine[button] !== state.buttonState) {
        state.step = '0';
        return false;
    }
    return true;
};
exports.BoilProcessGroup = function (button, valveIn, valveOut, volumeSensor, resetVolumetric, autoMode) { return function (state, commands, changeStatus) {
    var machine = SettingsStore_1.default.getState().machine;
    var settings = SettingsStore_1.default.getState().settings;
    if (state.stop) {
        return state;
    }
    switch (state.step) {
        case '1':
            if (checkToStop(button, state)) {
                changeStatus(types_1.ProcessStatus.wip);
                if (machine[volumeSensor] === '0') {
                    state.step = '2';
                }
                else {
                    commands[resetVolumetric]++;
                }
            }
            break;
        case '2':
            // START BEFORE BOIL
            if (checkToStop(button, state)) {
                commands[valveOut]++;
                commands[Converter_1.StmCommands.SetRelay8]++;
                state.step = '3';
                state.beforePressure = Date.now();
            }
            break;
        case '3':
            if (checkToStop(button, state)) {
                // time before boil. TODO: change 0 to setting
                if (Date.now() - state.beforePressure > 1000) {
                    state.step = '4';
                    state.silentBeforePressure = Date.now();
                }
                else {
                    commands[valveOut]++;
                    commands[Converter_1.StmCommands.SetRelay8]++;
                }
            }
            break;
        case '4':
            if (checkToStop(button, state)) {
                // time before boil. TODO: change 0 to setting
                if (Date.now() - state.silentBeforePressure > 1000) {
                    state.step = '5';
                    state.silentBeforePressure = Date.now();
                }
            }
            break;
        case '5':
            if (checkToStop(button, state)) {
                var volumne = parseInt(machine[volumeSensor], 10) || 0;
                var needVolume = parseInt(settings[autoMode]) || 150;
                if (volumne < needVolume) {
                    commands[valveIn]++;
                    commands[valveOut]++;
                    commands[Converter_1.StmCommands.SetRelay8]++;
                }
                else {
                    state.step = '0';
                }
            }
            break;
        default:
            changeStatus(types_1.ProcessStatus.done);
            if (machine[button] !== '') {
                if (state.buttonState === '1' || state.buttonState === '0') {
                    if (machine[button] !== state.buttonState) {
                        state.step = '1';
                        state.buttonState = machine[button];
                    }
                }
                else {
                    state.buttonState = machine[button];
                }
            }
            break;
    }
    return __assign({}, state);
}; };
//# sourceMappingURL=BoilProcessGroup.js.map