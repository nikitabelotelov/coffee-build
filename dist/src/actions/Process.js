"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var Process = /** @class */ (function () {
    function Process(name, stateMachine, wipTimeout) {
        this.name = '';
        this.state = {};
        this.isActive = false;
        this.isReady = false;
        this.status = types_1.ProcessStatus.wip;
        this.errorTimeout = 0;
        this.wipTimeout = 0;
        this.timeDone = 0;
        this.name = name;
        this.stateMachine = stateMachine;
        this.onStatusChangeHdl = this.onStatusChangeHdl.bind(this);
        this.wipTimeout = wipTimeout;
    }
    Process.prototype.onStatusChangeHdl = function (newStatus) {
        if (this.status !== newStatus) {
            this.onStatusChange(newStatus, this.status);
            if (newStatus === types_1.ProcessStatus.done) {
                this.timeDone = Date.now();
            }
            else {
                this.timeDone = 0;
            }
        }
        this.status = newStatus;
    };
    Process.prototype.start = function () {
        this.isActive = true;
        this.state.stop = false;
        this.errorTimeout = 0;
    };
    Process.prototype.stop = function () {
        this.isActive = false;
        this.onStatusChangeHdl(types_1.ProcessStatus.stopped);
    };
    Process.prototype.step = function (commands) {
        if (!this.errorTimeout && this.wipTimeout) {
            this.errorTimeout = Date.now();
        }
        var wipTime = Date.now() - this.errorTimeout;
        if (this.wipTimeout && wipTime > this.wipTimeout) {
            this.state.stop = 0;
            // TODO:: NOTFIFICATION ERROR
        }
        if (this.timeDone && this.status === types_1.ProcessStatus.done) {
            this.state.doneTime = Date.now() - this.timeDone;
            this.state.wipTime = 0;
        }
        else {
            this.state.doneTime = 0;
            this.state.wipTime = wipTime;
        }
        this.state = this.stateMachine(this.state, commands, this.onStatusChangeHdl);
    };
    return Process;
}());
exports.Process = Process;
//# sourceMappingURL=Process.js.map