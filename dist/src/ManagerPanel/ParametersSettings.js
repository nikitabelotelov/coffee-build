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
var types_1 = require("../types");
var Parameters = [
    {
        key: 0,
        title: 'Паровой бойлер',
        route: 'steam'
    },
    {
        key: 1,
        title: 'Температуры группы',
        route: 'steam'
    },
    {
        key: 2,
        title: 'Предсмачивания',
        route: 'steam'
    },
    {
        key: 3,
        title: 'Время варки',
        route: 'steam'
    },
    {
        key: 4,
        title: 'Преднагревательный бойлер',
        route: 'steam'
    }
];
function ParametersSettings() {
    return (React.createElement("div", { className: 'setting__profile panel_root' },
        React.createElement("ul", { className: 'setting__profile-list list-group list-group-flush' }, Parameters.map(function (el) {
            return (React.createElement("li", { className: 'list-group-item', key: el.key },
                React.createElement(react_router_dom_1.NavLink, { to: 'hand/steam', className: 'setting__hand-listItem' }, el.title)));
        })),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: 'manager-panel__block btn-outline-success' }, "\u041D\u0430\u0437\u0430\u0434")));
}
exports.default = ParametersSettings;
//# sourceMappingURL=ParametersSettings.js.map