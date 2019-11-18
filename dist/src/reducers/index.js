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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = __importDefault(require("../actions/actionTypes"));
var Converter_1 = __importStar(require("../../server/stm/Converter"));
var SettingsStore_1 = require("../SettingsStore");
var initialState = {
    update: 0,
    life: {
        tTrendG1: [],
        tTrendG2: [],
        middleTTrendG1: [],
        middleTTrendG2: [],
        speedG1: 0,
        speedG2: 0,
        godMod: 0,
    },
    machine: (_a = {},
        _a[Converter_1.StmMessages.SteamPressure] = "",
        _a[Converter_1.StmMessages.Group1Pressure] = "",
        _a[Converter_1.StmMessages.Group1Temperature] = "",
        _a[Converter_1.StmMessages.Group2Pressure] = "",
        _a[Converter_1.StmMessages.Group2Temperature] = "",
        _a[Converter_1.StmMessages.PredictGroupTemperature] = "",
        _a[Converter_1.StmMessages.Error] = "",
        _a[Converter_1.StmMessages.Valve1] = "",
        _a[Converter_1.StmMessages.Valve2] = "",
        _a[Converter_1.StmMessages.Valve3] = "",
        _a[Converter_1.StmMessages.Valve4] = "",
        _a[Converter_1.StmMessages.Valve5] = "",
        _a[Converter_1.StmMessages.Valve6] = "",
        _a[Converter_1.StmMessages.Relay1] = "",
        _a[Converter_1.StmMessages.Relay2] = "",
        _a[Converter_1.StmMessages.Relay3] = "",
        _a[Converter_1.StmMessages.Relay4] = "",
        _a[Converter_1.StmMessages.Relay5] = "",
        _a[Converter_1.StmMessages.Relay6] = "",
        _a[Converter_1.StmMessages.Relay7] = "",
        _a[Converter_1.StmMessages.Relay8] = "",
        _a[Converter_1.StmMessages.Echo] = "",
        _a[Converter_1.StmMessages.WaterLevel] = "",
        _a[Converter_1.StmMessages.Button1] = "",
        _a[Converter_1.StmMessages.Button2] = "",
        _a[Converter_1.StmMessages.Button3] = "",
        _a[Converter_1.StmMessages.Button4] = "",
        _a[Converter_1.StmMessages.Button5] = "",
        _a[Converter_1.StmMessages.Button6] = "",
        _a[Converter_1.StmMessages.Button7] = "",
        _a[Converter_1.StmMessages.Button8] = "",
        _a[Converter_1.StmMessages.Button9] = "",
        _a[Converter_1.StmMessages.VolumetricGroup1] = "0",
        _a[Converter_1.StmMessages.VolumetricGroup2] = "0",
        _a),
    settings: {
        Group1Temperature: '0',
        Group1AutoMode1: '0',
        Group1AutoMode2: '0',
        Group2Temperature: '0',
        Group2AutoMode1: '0',
        Group2AutoMode2: '0',
        SteamPressure: '0',
        RedCold: '0',
        GreenCold: '0',
        BlueCold: '16',
        RedHot: '16',
        GreenHot: '0',
        BlueHot: '0',
        EnergyMode: '0',
    },
    settingsProfiles: null
};
function getChanges(source) {
    var changes = [];
    for (var i = 1; i < source.length; i++) {
        var current = source[i].value;
        var prev = source[i - 1].value;
        changes.push(current > prev ? current / prev : prev / current);
    }
    return changes;
}
function CreateMiddleTrend(source) {
    var result = [];
    var changes = getChanges(source);
    var middleOfChanges = 0;
    for (var i = 0; i < changes.length; i++) {
        middleOfChanges += changes[i];
    }
    middleOfChanges /= changes.length;
    var smooth = __spreadArrays(source);
    // find impuls
    for (var i = 1; i < smooth.length - 1; i++) {
        var current = smooth[i].value;
        var prev = smooth[i - 1].value;
        var next = smooth[i + 1].value;
        if (current < prev && current < next || current > next && current > prev) {
            if (changes[i] > middleOfChanges) {
                smooth[i] = { time: smooth[i].time, value: (prev + next) / 2 };
                changes = getChanges(smooth);
            }
        }
    }
    for (var i = 1; i < smooth.length - 1; i++) {
        var current = smooth[i];
        var prev = smooth[i - 1].value;
        var next = smooth[i + 1].value;
        result.push({ value: (current.value + prev + next) / 3, time: current.time });
    }
    return result;
}
var getSpeed = function (source) {
    var last = source[source.length - 1];
    var min = source[0];
    var max = source[0];
    source.forEach(function (el) {
        if (el.value < min.value) {
            min = el;
        }
        if (el.value > max.value) {
            max = el;
        }
    });
    var speed = 0;
    if (min.time > max.time) {
        speed = (last.value - min.value) / (last.time - min.time);
    }
    else {
        speed = (last.value - max.value) / (last.time - max.time);
    }
    return speed;
};
function rootReducer(state, action) {
    if (state === void 0) { state = initialState; }
    try {
        switch (action.type) {
            case actionTypes_1.default.setSetting:
                SettingsStore_1.emitSettingsChange({ id: action.payload.id, content: action.payload.content, profile: 'default' });
                state.settings[action.payload.id] = action.payload.content;
                return __assign(__assign({}, state), { settings: __assign({}, state.settings) });
            case actionTypes_1.default.currentInfoUpdate:
                state.machine[action.payload.id] = action.payload.content;
                if (action.payload.id === Converter_1.StmMessages.PredictGroupTemperature) {
                    state.machine[action.payload.id] = "" + Math.round(Converter_1.default.voltToCelsium(action.payload.content) * 10) / 10;
                }
                if (action.payload.id === Converter_1.StmMessages.Group1Temperature) {
                    var temp = Converter_1.default.voltToCelsium(action.payload.content);
                    state.life.tTrendG1.push({
                        time: Date.now(),
                        value: temp
                    });
                    state.life.tTrendG1 = __spreadArrays(state.life.tTrendG1);
                    if (state.life.tTrendG1.length > 100) {
                        state.life.tTrendG1.splice(0, 1);
                        state.life.middleTTrendG1 = CreateMiddleTrend(state.life.tTrendG1);
                        state.life.speedG1 = getSpeed(state.life.middleTTrendG1);
                    }
                }
                if (action.payload.id === Converter_1.StmMessages.Group2Temperature) {
                    var temp = Converter_1.default.voltToCelsium(action.payload.content);
                    state.life.tTrendG2.push({
                        time: Date.now(),
                        value: temp
                    });
                    state.life.tTrendG2 = __spreadArrays(state.life.tTrendG2);
                    if (state.life.tTrendG2.length > 100) {
                        state.life.tTrendG2.splice(0, 1);
                        state.life.middleTTrendG2 = CreateMiddleTrend(state.life.tTrendG2);
                        state.life.speedG2 = getSpeed(state.life.middleTTrendG2);
                    }
                }
                return __assign(__assign({}, state), { machine: __assign({}, state.machine), life: __assign({}, state.life) });
            case actionTypes_1.default.settingsProfilesInitialize:
                return __assign(__assign({}, state), { settingsProfiles: __assign({}, action.payload.settingsProfiles) });
        }
    }
    catch (e) {
        console.log(e);
    }
    return state;
}
exports.default = rootReducer;
//# sourceMappingURL=index.js.map