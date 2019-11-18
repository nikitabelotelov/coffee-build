"use strict";
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
var Converter_1 = require("../../server/stm/Converter");
function RootView(props) {
    var tg1 = Math.round((props.life.tTrendG1.length ? props.life.tTrendG1[props.life.tTrendG1.length - 1].value : 0) * 10) / 10;
    var tg2 = Math.round((props.life.tTrendG2.length ? props.life.tTrendG2[props.life.tTrendG2.length - 1].value : 0) * 10) / 10;
    return (React.createElement("div", { className: "manager-panel__root panel_root" },
        React.createElement("div", { className: "manager-panel__block btn-outline-dark manager-panel__topleft " },
            React.createElement("b", null, "\u0413\u0440\u0443\u043F\u043F\u0430 1"),
            React.createElement("br", null),
            "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",
            tg1,
            " C /",
            " ",
            props.settings.Group1Temperature,
            " C"),
        React.createElement("div", { className: "manager-panel__block btn-outline-dark manager-panel__topright" },
            React.createElement("b", null, "\u0413\u0440\u0443\u043F\u043F\u0430 2"),
            "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",
            props.machine[Converter_1.StmMessages.Group2Temperature],
            " ",
            tg2,
            " C /",
            " ",
            props.settings.Group2Temperature,
            " C P = ",
            props.machine[Converter_1.StmMessages.Group2Pressure]),
        React.createElement(react_router_dom_1.NavLink, { to: "/admin", className: "manager-panel__block btn-outline-dark manager-panel__middleleft" },
            React.createElement("b", null, "\u041F\u0440\u0435\u0434\u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439"),
            React.createElement("br", null),
            "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",
            props.machine[Converter_1.StmMessages.PredictGroupTemperature],
            " C"),
        React.createElement("div", { className: "manager-panel__block btn-outline-dark manager-panel__bottomleft" },
            React.createElement("b", null, "\u041F\u0430\u0440\u043E\u0432\u043E\u0439"),
            "\u0423\u0440\u043E\u0432\u0435\u043D\u044C: ",
            props.machine[Converter_1.StmMessages.WaterLevel],
            " ",
            React.createElement("br", null),
            "\u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435: ",
            props.machine[Converter_1.StmMessages.SteamPressure],
            " /",
            " ",
            props.settings.SteamPressure),
        React.createElement(react_router_dom_1.NavLink, { to: "/settings", className: "manager-panel__block btn-outline-dark manager-panel__bottomright" }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")));
}
exports.RootView = RootView;
//# sourceMappingURL=RootView.js.map