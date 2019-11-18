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
function Update(props) {
    return (React.createElement("div", { className: "asdasd" },
        React.createElement("div", { className: 'manager-panel__update panel_root' },
            React.createElement("div", { className: "manager-panel__block manager-panel__left btn-outline-dark manager-panel__info" },
                React.createElement("b", null, "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u043A\u043E\u0444\u0435\u043C\u0430\u0448\u0438\u043D\u044B \u0431\u0443\u0434\u0435\u0442 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u043E\u0436\u0435\u0442 \u0437\u0430\u043D\u044F\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442. \u0412\u043E \u0432\u0440\u0435\u043C\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u043A\u043E\u0444\u0435\u043C\u0430\u0448\u0438\u043D\u0443 \u043E\u0442 \u0441\u0435\u0442\u0438.")),
            React.createElement("div", { className: 'manager-panel__block manager-panel__topright btn-outline-dark' },
                React.createElement("a", { href: "/update" }, "\u041D\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F")),
            React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: 'manager-panel__block btn-outline-dark manager-panel__bottomright' }, "\u041D\u0430\u0437\u0430\u0434"))));
}
exports.default = Update;
//# sourceMappingURL=Update.js.map