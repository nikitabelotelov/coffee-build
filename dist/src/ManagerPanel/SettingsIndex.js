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
function Setting() {
    return (React.createElement("div", { className: 'setting__root panel_root' },
        React.createElement(react_router_dom_1.NavLink, { to: 'settings/profile', className: 'manager-panel__block btn-outline-dark' }, "\u0412\u044B\u0431\u043E\u0440 \u043F\u0440\u043E\u0444\u0438\u043B\u044F"),
        React.createElement(react_router_dom_1.NavLink, { to: 'settings/color', className: 'manager-panel__block btn-outline-dark' }, "\u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u0441\u0445\u0435\u043C\u0430"),
        React.createElement(react_router_dom_1.NavLink, { to: 'settings/update', className: 'manager-panel__block btn-outline-dark' }, "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435"),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: 'manager-panel__block btn-outline-success' }, "\u041D\u0430\u0437\u0430\u0434")));
}
exports.default = Setting;
//# sourceMappingURL=SettingsIndex.js.map