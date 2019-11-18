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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = __importStar(require("react"));
var types_1 = require("../types");
var react_redux_1 = require("react-redux");
var Converter_1 = require("../../server/stm/Converter");
require("./Admin.less");
var Admin = function (props) {
    var tg1 = Math.round((props.life.tTrendG1.length ? props.life.tTrendG1[props.life.tTrendG1.length - 1].value : 0) * 10) / 10;
    var tg2 = Math.round((props.life.tTrendG2.length ? props.life.tTrendG2[props.life.tTrendG2.length - 1].value : 0) * 10) / 10;
    return (React.createElement("div", { className: 'setting__root panel_root' },
        React.createElement(react_router_dom_1.NavLink, { to: 'admin/trend', className: 'manager-panel__block btn-outline-dark admin__text' },
            "\u0413\u0440\u0443\u043F\u043F\u0430 1: P = ",
            props.machine[Converter_1.StmMessages.Group1Pressure],
            ", T = ",
            tg1,
            " (",
            props.settings.Group1Temperature,
            ")",
            React.createElement("br", null),
            "\u041A\u043B\u0430\u043F\u0430\u043D: Valve2 = ",
            props.machine[Converter_1.StmMessages.Valve2],
            " / valve4 = ",
            props.machine[Converter_1.StmMessages.Valve4],
            React.createElement("br", null),
            "\u0422\u0435\u043D: ",
            props.machine[Converter_1.StmMessages.Relay4],
            React.createElement("br", null),
            "\u0413\u0440\u0443\u043F\u043F\u0430 2: P = ",
            props.machine[Converter_1.StmMessages.Group2Pressure],
            ", T = ",
            tg2,
            " (",
            props.settings.Group2Temperature,
            ")",
            React.createElement("br", null),
            "\u041A\u043B\u0430\u043F\u0430\u043D: Valve3 = ",
            props.machine[Converter_1.StmMessages.Valve3],
            " / valve5 = ",
            props.machine[Converter_1.StmMessages.Valve5],
            React.createElement("br", null),
            "\u0422\u0435\u043D: ",
            props.machine[Converter_1.StmMessages.Relay6]),
        React.createElement("div", { className: 'manager-panel__block btn-outline-dark admin__text' },
            "\u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430: ",
            props.machine[Converter_1.StmMessages.SteamPressure],
            " ",
            React.createElement("br", null),
            "\u041A\u043B\u0430\u043F\u0430\u043D: Valve1 = ",
            props.machine[Converter_1.StmMessages.Valve1],
            " ",
            React.createElement("br", null),
            "\u0422\u0435\u043D \u043F\u0430\u0440\u0430: ",
            props.machine[Converter_1.StmMessages.Relay1],
            " ",
            React.createElement("br", null),
            "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432 \u043F\u0440\u0435\u0434\u043D\u0430\u0433\u0440\u0435\u0432\u0435: ",
            props.machine[Converter_1.StmMessages.PredictGroupTemperature],
            " ",
            React.createElement("br", null),
            "\u0422\u0435\u043D \u043F\u0440\u0435\u0434\u043D\u0430\u0433\u0440\u0435\u0432\u0430: ",
            props.machine[Converter_1.StmMessages.Relay2]),
        React.createElement("div", { className: 'manager-panel__block btn-outline-dark admin__text' },
            React.createElement("div", { className: 'admin__buttons' },
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button1] === '1' ? " admin__button_active" : "") }, "B1"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button2] === '1' ? " admin__button_active" : "") }, "B2"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button3] === '1' ? " admin__button_active" : "") }, "B3"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button4] === '1' ? " admin__button_active" : "") }, "B4"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button5] === '1' ? " admin__button_active" : "") }, "B5"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button6] === '1' ? " admin__button_active" : "") }, "B6"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button7] === '1' ? " admin__button_active" : "") }, "B7"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button8] === '1' ? " admin__button_active" : "") }, "B8"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button9] === '1' ? " admin__button_active" : "") }, "B9")),
            "\u041D\u0430\u0441\u043E\u0441: ",
            props.machine[Converter_1.StmMessages.Relay8],
            " ",
            React.createElement("br", null),
            "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u043E\u0434\u044B: ",
            props.machine[Converter_1.StmMessages.WaterLevel]),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: 'manager-panel__block btn-outline-success' }, "\u041D\u0430\u0437\u0430\u0434")));
};
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var AdminConnected = react_redux_1.connect(mapStateToProps)(Admin);
exports.default = AdminConnected;
//# sourceMappingURL=Admin.js.map