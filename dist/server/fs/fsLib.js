"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var settingsProfilesFileName = "settingsProfiles.json";
function getDefaultSettingsProfiles() {
    var profiles = {
        "default": {
            Group1Temperature: '0',
            Group1AutoMode1: '0',
            Group1AutoMode2: '0',
            Group2Temperature: '0',
            Group2AutoMode1: '0',
            Group2AutoMode2: '0',
            SteamPressure: '0',
            RedCold: '0',
            GreenCold: '0',
            BlueCold: '16',
            RedHot: '16',
            GreenHot: '0',
            BlueHot: '0',
            EnergyMode: '0',
        },
        "user": {
            Group1Temperature: '1',
            Group1AutoMode1: '0',
            Group1AutoMode2: '0',
            Group2Temperature: '0',
            Group2AutoMode1: '0',
            Group2AutoMode2: '0',
            SteamPressure: '0',
            RedCold: '0',
            GreenCold: '0',
            BlueCold: '16',
            RedHot: '16',
            GreenHot: '0',
            BlueHot: '0',
            EnergyMode: '0',
        }
    };
    return {
        choosenProfile: "default",
        profiles: profiles
    };
}
function loadSettings() {
    return new Promise(function (resolve) {
        fs_1.default.readFile(settingsProfilesFileName, function (error, data) {
            if (error) {
                console.error('Could not load profiles. Default profile loaded. ' + error);
                resolve(getDefaultSettingsProfiles());
            }
            else {
                resolve(JSON.parse(data.toString()));
            }
        });
    });
}
exports.loadSettings = loadSettings;
function serializeSettingsProfiles(profiles) {
    fs_1.default.writeFile(settingsProfilesFileName, JSON.stringify(profiles), function (err) {
        if (err) {
            console.error('Error while saving settings profiles: ' + err);
        }
    });
}
exports.serializeSettingsProfiles = serializeSettingsProfiles;
//# sourceMappingURL=fsLib.js.map