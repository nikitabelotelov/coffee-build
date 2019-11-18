"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __importDefault(require("./Constants"));
var Message_1 = __importDefault(require("./Message"));
var buffer_1 = __importDefault(require("buffer"));
var Usart = /** @class */ (function () {
    function Usart(serial) {
        var _this = this;
        this.buffer = [];
        this.msgHandlers = [];
        this.queue = [];
        this.inProgress = false;
        serial.open(function () {
            _this.serial = serial;
            console.log("Serial opened");
            serial.on('data', function (data) {
                // @ts-ignore
                _this.buffer = __spreadArrays(_this.buffer, data);
                _this.extractMessage();
            });
            _this.queueProcess();
        });
    }
    Usart.prototype.extractMessage = function () {
        var start = this.buffer.indexOf(Constants_1.default.startBit.charCodeAt(0));
        if (start > -1) {
            this.buffer = this.buffer.slice(start);
            var end = this.buffer.indexOf(Constants_1.default.endBit.charCodeAt(0));
            if (end > -1) {
                var message = this.buffer.splice(0, end + 1);
                this.buffer = this.buffer.slice(end + 1);
                //console.log('ms=', message)
                var msgObject = new Message_1.default();
                var stringMsg_1 = msgObject.getMessageFromCode(message);
                //console.log("Received data from usart. " + stringMsg);
                this.msgHandlers.forEach(function (el) { return el(stringMsg_1); });
                this.extractMessage();
            }
        }
    };
    Usart.prototype.sendMessage = function (message) {
        var msgObject = new Message_1.default();
        this.queue.push(msgObject.getMessageFromString(message));
        //console.log("Pushed to queue");
        this.queueProcess();
    };
    Usart.prototype.queueProcess = function () {
        var _this = this;
        if (this.serial && !this.inProgress) {
            if (this.queue.length > 0) {
                var msg = buffer_1.default.Buffer.from(this.queue[0]);
                this.queue = this.queue.slice(1);
                this.inProgress = true;
                //console.log("Write to serial " + JSON.stringify(msg));
                this.serial.write(msg, function () {
                    _this.inProgress = false;
                    _this.queueProcess();
                });
            }
        }
    };
    return Usart;
}());
exports.default = Usart;
//# sourceMappingURL=Usart.js.map