"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebSocketController = /** @class */ (function () {
    function WebSocketController() {
        this.socket = null;
        this.receivedMsgCallbacks = [];
        this.socketConnected = false;
        this.queue = [];
        this.init();
    }
    WebSocketController.prototype.handleMessage = function (data) {
        this.receivedMsgCallbacks.forEach(function (el) {
            el(data);
        });
    };
    WebSocketController.prototype.init = function () {
        var _this = this;
        this.socket = new WebSocket(location.origin.replace(/^http/, 'ws'));
        this.socket.onopen = function () {
            console.log("Соединение установлено.");
            _this.socketConnected = true;
            _this.queue.forEach(function (msg) {
                _this.send(msg);
            });
            _this.queue = [];
        };
        this.socket.onclose = function (event) {
            _this.socketConnected = false;
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            }
            else {
                console.log('Обрыв соединения'); // например, "убит" процесс сервера
            }
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
            setTimeout(function () {
                _this.init();
            }, 1000);
        };
        this.socket.onmessage = function (event) {
            _this.handleMessage(event.data);
        };
        this.socket.onerror = function (error) {
            //@ts-ignore
            console.log("Ошибка " + error.message);
        };
    };
    WebSocketController.prototype.registerCallback = function (callback) {
        this.receivedMsgCallbacks.push(callback);
    };
    WebSocketController.prototype.unRegisterCallback = function (callback) {
        this.receivedMsgCallbacks.splice(this.receivedMsgCallbacks.indexOf(callback));
    };
    WebSocketController.prototype.send = function (msg) {
        if (this.socketConnected) {
            this.socket.send(msg);
        }
        else {
            this.queue.push(msg);
        }
    };
    return WebSocketController;
}());
exports.WebSocketController = WebSocketController;
//# sourceMappingURL=WebSocketController.js.map