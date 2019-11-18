"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SettingsStore_1 = __importStar(require("../SettingsStore"));
var Converter_1 = require("../../server/stm/Converter");
var Process_1 = require("./Process");
var types_1 = require("../types");
var WaterLevel_1 = require("./life/WaterLevel");
var WaterLevelGroup_1 = require("./life/WaterLevelGroup");
var BoilProcessGroup_1 = require("./life/BoilProcessGroup");
var WarmPredict_1 = require("./life/WarmPredict");
var WarmGroup_1 = require("./life/WarmGroup");
var MachineLife = /** @class */ (function () {
    function MachineLife() {
        this.processes = [];
        this.count = 0;
        var boilGroup1 = new Process_1.Process('boilGroup1', BoilProcessGroup_1.BoilProcessGroup(Converter_1.StmMessages.Button3, Converter_1.StmCommands.SetValve2, Converter_1.StmCommands.SetValve4, Converter_1.StmMessages.VolumetricGroup1, Converter_1.StmCommands.ResetVolumetricG1, 'Group1AutoMode1'), 0);
        var boilGroup2 = new Process_1.Process('boilGroup1', BoilProcessGroup_1.BoilProcessGroup(Converter_1.StmMessages.Button6, Converter_1.StmCommands.SetValve3, Converter_1.StmCommands.SetValve5, Converter_1.StmMessages.VolumetricGroup2, Converter_1.StmCommands.ResetVolumetricG2, 'Group1AutoMode2'), 0);
        var waterLevel = new Process_1.Process('waterLevel', WaterLevel_1.WaterLevel, 20000);
        var predictWarm = new Process_1.Process('predictWarm', WarmPredict_1.WarmPredict, 0);
        var waterLevelG1 = new Process_1.Process('waterLevelG1', WaterLevelGroup_1.WaterLevelGroup(Converter_1.StmMessages.Group1Pressure, Converter_1.StmCommands.SetValve2, 'Group1Temperature'), 20000);
        var waterLevelG2 = new Process_1.Process('waterLevelG2', WaterLevelGroup_1.WaterLevelGroup(Converter_1.StmMessages.Group2Pressure, Converter_1.StmCommands.SetValve3, 'Group2Temperature'), 20000);
        var warmG1 = new Process_1.Process('warmG1', WarmGroup_1.WarmGroup(Converter_1.StmMessages.Group1Pressure, Converter_1.StmCommands.SetRelay4, Converter_1.StmCommands.SetRelay5, "Group1Temperature", "middleTTrendG1"), 0);
        var warmG2 = new Process_1.Process('warmG2', WarmGroup_1.WarmGroup(Converter_1.StmMessages.Group2Pressure, Converter_1.StmCommands.SetRelay6, Converter_1.StmCommands.SetRelay7, "Group2Temperature", "middleTTrendG2"), 0);
        this.addProcess({
            process: boilGroup1,
            children: [waterLevelG1]
        });
        this.addProcess({
            process: boilGroup2,
            children: [waterLevelG2]
        });
        boilGroup1.start();
        boilGroup2.start();
        waterLevel.start();
        predictWarm.start();
        waterLevelG1.start();
        waterLevelG2.start();
        warmG1.start();
        warmG2.start();
        this.addProcess({
            process: waterLevel,
            children: []
        });
        this.addProcess({
            process: waterLevelG1,
            children: []
        });
        this.addProcess({
            process: waterLevelG2,
            children: []
        });
        this.addProcess({
            process: predictWarm,
            children: []
        });
        this.addProcess({
            process: warmG1,
            children: []
        });
        this.addProcess({
            process: warmG2,
            children: []
        });
    }
    MachineLife.prototype.addProcess = function (p) {
        p.process.onStatusChange = function (newStatus, oldStatus) {
            p.children.forEach(function (process) {
                if (newStatus === types_1.ProcessStatus.done) {
                    process.start();
                }
                else {
                    process.stop();
                }
            });
        };
        this.processes.push(p);
    };
    MachineLife.prototype.checkAndSend = function (commands, command, status) {
        var machine = SettingsStore_1.default.getState().machine;
        if (commands[command] > 0) {
            if (machine[status] === '0') {
                SettingsStore_1.emitStm({ id: command, content: '1' });
            }
        }
        else {
            if (machine[status] === '1') {
                SettingsStore_1.emitStm({ id: command, content: '0' });
            }
        }
    };
    MachineLife.prototype.step = function () {
        var _a;
        var machine = SettingsStore_1.default.getState().machine;
        var commands = (_a = {},
            _a[Converter_1.StmCommands.SetValve1] = 0,
            _a[Converter_1.StmCommands.SetValve2] = 0,
            _a[Converter_1.StmCommands.SetValve3] = 0,
            _a[Converter_1.StmCommands.SetValve4] = 0,
            _a[Converter_1.StmCommands.SetValve5] = 0,
            _a[Converter_1.StmCommands.SetValve6] = 0,
            _a[Converter_1.StmCommands.SetRelay1] = 0,
            _a[Converter_1.StmCommands.SetRelay2] = 0,
            _a[Converter_1.StmCommands.SetRelay3] = 0,
            _a[Converter_1.StmCommands.SetRelay4] = 0,
            _a[Converter_1.StmCommands.SetRelay5] = 0,
            _a[Converter_1.StmCommands.SetRelay6] = 0,
            _a[Converter_1.StmCommands.SetRelay7] = 0,
            _a[Converter_1.StmCommands.SetRelay8] = 0,
            _a[Converter_1.StmCommands.SetRedGroup1] = 0,
            _a[Converter_1.StmCommands.SetGreenGroup1] = 0,
            _a[Converter_1.StmCommands.SetBlueGroup1] = 0,
            _a[Converter_1.StmCommands.SetRedGroup2] = 0,
            _a[Converter_1.StmCommands.SetGreenGroup2] = 0,
            _a[Converter_1.StmCommands.SetBlueGroup2] = 0,
            _a[Converter_1.StmCommands.SetRedMachine] = 0,
            _a[Converter_1.StmCommands.SetGreenMachine] = 0,
            _a[Converter_1.StmCommands.SetBlueMachine] = 0,
            _a[Converter_1.StmCommands.ResetVolumetricG1] = 0,
            _a[Converter_1.StmCommands.ResetVolumetricG2] = 0,
            _a[Converter_1.StmCommands.SetSecGroup1] = 100,
            _a[Converter_1.StmCommands.SetSecGroup2] = 100,
            _a);
        this.processes.forEach(function (one) {
            if (one.process.isActive) {
                one.process.step(commands);
            }
        });
        /* if (this.count === 0) {
          this.count = 1
          emitStm({id: StmCommands.SetBlueGroup1, content: '50000'})
          emitStm({id: StmCommands.SetBlueGroup2, content: '50000'})
        } else {
          this.count = 0
          emitStm({id: StmCommands.SetBlueGroup1, content: '0'})
          emitStm({id: StmCommands.SetBlueGroup2, content: '0'})
        } */
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay1, Converter_1.StmMessages.Relay1);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay2, Converter_1.StmMessages.Relay2);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay3, Converter_1.StmMessages.Relay3);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay4, Converter_1.StmMessages.Relay4);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay5, Converter_1.StmMessages.Relay5);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay6, Converter_1.StmMessages.Relay6);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay7, Converter_1.StmMessages.Relay7);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay8, Converter_1.StmMessages.Relay8);
        this.checkAndSend(commands, Converter_1.StmCommands.SetValve1, Converter_1.StmMessages.Valve1);
        this.checkAndSend(commands, Converter_1.StmCommands.SetValve2, Converter_1.StmMessages.Valve2);
        this.checkAndSend(commands, Converter_1.StmCommands.SetValve3, Converter_1.StmMessages.Valve3);
        this.checkAndSend(commands, Converter_1.StmCommands.SetValve4, Converter_1.StmMessages.Valve4);
        this.checkAndSend(commands, Converter_1.StmCommands.SetValve5, Converter_1.StmMessages.Valve5);
        this.checkAndSend(commands, Converter_1.StmCommands.SetValve6, Converter_1.StmMessages.Valve6);
        var vol1 = parseInt(machine[Converter_1.StmMessages.VolumetricGroup1]) || 0;
        if (vol1 > 0 && commands[Converter_1.StmCommands.ResetVolumetricG1] > 0) {
            SettingsStore_1.emitStm({ id: Converter_1.StmCommands.ResetVolumetricG1, content: '1' });
        }
        var vol2 = parseInt(machine[Converter_1.StmMessages.VolumetricGroup2]) || 0;
        if (vol2 > 0 && commands[Converter_1.StmCommands.ResetVolumetricG2] > 0) {
            SettingsStore_1.emitStm({ id: Converter_1.StmCommands.ResetVolumetricG2, content: '1' });
        }
    };
    return MachineLife;
}());
exports.Life = new MachineLife();
//# sourceMappingURL=machineLife.js.map