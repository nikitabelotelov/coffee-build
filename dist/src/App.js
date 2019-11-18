"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.less");
var react_router_dom_1 = require("react-router-dom");
var Panel_1 = require("./ManagerPanel/Panel");
var App = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Panel_1.Panel, null)));
};
exports.default = App;
//# sourceMappingURL=App.js.map