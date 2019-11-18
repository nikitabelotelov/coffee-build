"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __importDefault(require("./Constants"));
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.getMessageFromString = function (message) {
        var length = message.length;
        var messageBits = [];
        var code = 0xFF;
        for (var i = 1; i < length; i++) {
            var char = message.charCodeAt(i);
            messageBits.push(char);
            code = code ^ char;
        }
        return [Constants_1.default.startBit.charCodeAt(0), message.charCodeAt(0), length - 1].concat(messageBits).concat([code, Constants_1.default.endBit.charCodeAt(0)]);
    };
    Message.prototype.getMessageFromCode = function (code) {
        var length = code[2];
        var message = "" + String.fromCharCode(code[1]);
        var lastByte = 0xFF;
        if (code.length !== length + 5) {
            //console.log('exit1', code.length, length)
            return '';
        }
        for (var i = 0; i < length; i++) {
            var char = code[i + 3];
            message = "" + message + String.fromCharCode(char);
            lastByte = lastByte ^ char;
        }
        if (code[length + 3] !== lastByte) {
            //console.log('exit2', code[length+3], lastByte)
            return '';
        }
        return message;
    };
    return Message;
}());
exports.default = Message;
//# sourceMappingURL=Message.js.map