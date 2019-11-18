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
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var RootView_1 = require("./RootView");
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var Root = react_redux_1.connect(mapStateToProps)(RootView_1.RootView);
exports.default = Root;
//# sourceMappingURL=Root.js.map