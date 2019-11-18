"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Converter_1 = require("../server/stm/Converter");
var ProcessStatus;
(function (ProcessStatus) {
    ProcessStatus["wip"] = "wip";
    ProcessStatus["done"] = "done";
    ProcessStatus["error"] = "error";
    ProcessStatus["stopped"] = "stopped";
})(ProcessStatus = exports.ProcessStatus || (exports.ProcessStatus = {}));
function getBackLink() {
    return location.pathname
        .split("/")
        .slice(0, -1)
        .join("/");
}
exports.getBackLink = getBackLink;
//# sourceMappingURL=types.js.map