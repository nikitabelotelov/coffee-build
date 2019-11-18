"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = __importStar(require("react"));
var types_1 = require("../../types");
var NumberInput_1 = __importDefault(require("../NumberInput"));
var index_1 = __importDefault(require("../../SettingsStore/index"));
var index_2 = require("../../actions/index");
var ColorHotView = function (props) {
    return (React.createElement("div", { className: "setting__profile-parameters panel_root" },
        React.createElement("div", { className: "manager-panel__block manager-panel__top" },
            React.createElement("p", null, "\u041A\u0440\u0430\u0441\u043D\u044B\u0439(\u043D\u0430\u0433\u0440\u0435\u0442\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430)"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'RedHot',
                        content: "" + (value + 1)
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'RedHot',
                        content: "" + (value - 1)
                    }));
                }, value: Number(props.settings.RedHot) || 0 }),
            React.createElement("p", null, "\u0417\u0435\u043B\u0435\u043D\u044B\u0439(\u043D\u0430\u0433\u0440\u0435\u0442\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430)"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'GreenHot',
                        content: "" + (value + 1)
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'GreenHot',
                        content: "" + (value - 1)
                    }));
                }, value: Number(props.settings.GreenHot) || 0 }),
            React.createElement("p", null, "\u0421\u0438\u043D\u0438\u0439(\u043D\u0430\u0433\u0440\u0435\u0442\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430)"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'BlueHot',
                        content: "" + (value + 1)
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'BlueHot',
                        content: "" + (value - 1)
                    }));
                }, value: Number(props.settings.BlueHot) || 0 })),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: "manager-panel__block manager-panel__bottom" }, "\u041D\u0430\u0437\u0430\u0434")));
};
exports.default = ColorHotView;
//# sourceMappingURL=ColorHotView.js.map