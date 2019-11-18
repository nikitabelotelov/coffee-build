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
var Profiles = [
    {
        key: 0,
        title: 'Автоматическая'
    },
    {
        key: 1,
        title: 'Ручная'
    },
    {
        key: 2,
        title: 'Арабика'
    },
    {
        key: 3,
        title: 'Бразилия'
    }
];
function ProfileView() {
    return (React.createElement("div", { className: 'setting__profile panel_root' },
        React.createElement("ul", { className: 'setting__profile-list list-group list-group-flush' }, Profiles.map(function (el) {
            return (React.createElement("li", { className: 'list-group-item', key: el.key }, el.title));
        })),
        React.createElement(react_router_dom_1.NavLink, { to: 'profile/hand', className: 'manager-panel__block btn-outline-dark' }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C"),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: 'manager-panel__block btn-outline-success' }, "\u041D\u0430\u0437\u0430\u0434")));
}
exports.default = ProfileView;
//# sourceMappingURL=ProfileView.js.map