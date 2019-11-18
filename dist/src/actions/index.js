"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = __importDefault(require("./actionTypes"));
var SettingsStore_1 = require("../SettingsStore");
function setSetting(payload) {
    SettingsStore_1.emitSettingsChange(payload);
    return { type: actionTypes_1.default.setSetting, payload: payload };
}
exports.setSetting = setSetting;
;
//# sourceMappingURL=index.js.map