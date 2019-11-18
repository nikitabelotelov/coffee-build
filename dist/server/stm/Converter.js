"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StmMessages;
(function (StmMessages) {
    StmMessages["SteamPressure"] = "a";
    StmMessages["Group1Pressure"] = "b";
    StmMessages["Group1Temperature"] = "c";
    StmMessages["Group2Pressure"] = "d";
    StmMessages["Group2Temperature"] = "e";
    StmMessages["PredictGroupTemperature"] = "f";
    StmMessages["Error"] = "g";
    StmMessages["Valve1"] = "h";
    StmMessages["Valve2"] = "k";
    StmMessages["Valve3"] = "l";
    StmMessages["Valve4"] = "m";
    StmMessages["Valve5"] = "n";
    StmMessages["Valve6"] = "o";
    StmMessages["Relay1"] = "p";
    StmMessages["Relay2"] = "q";
    StmMessages["Relay3"] = "r";
    StmMessages["Relay4"] = "s";
    StmMessages["Relay5"] = "t";
    StmMessages["Relay6"] = "u";
    StmMessages["Relay7"] = "v";
    StmMessages["Relay8"] = "w";
    StmMessages["Echo"] = "x";
    StmMessages["WaterLevel"] = "y";
    StmMessages["Button1"] = "z";
    StmMessages["Button2"] = "A";
    StmMessages["Button3"] = "B";
    StmMessages["Button4"] = "C";
    StmMessages["Button5"] = "D";
    StmMessages["Button6"] = "E";
    StmMessages["Button7"] = "F";
    StmMessages["Button8"] = "G";
    StmMessages["Button9"] = "H";
    StmMessages["VolumetricGroup1"] = "K";
    StmMessages["VolumetricGroup2"] = "L";
})(StmMessages = exports.StmMessages || (exports.StmMessages = {}));
var StmCommands;
(function (StmCommands) {
    StmCommands["SetValve1"] = "A";
    StmCommands["SetValve2"] = "B";
    StmCommands["SetValve3"] = "C";
    StmCommands["SetValve4"] = "D";
    StmCommands["SetValve5"] = "E";
    StmCommands["SetValve6"] = "F";
    StmCommands["SetRelay1"] = "G";
    StmCommands["SetRelay2"] = "H";
    StmCommands["SetRelay3"] = "J";
    StmCommands["SetRelay4"] = "K";
    StmCommands["SetRelay5"] = "L";
    StmCommands["SetRelay6"] = "M";
    StmCommands["SetRelay7"] = "N";
    StmCommands["SetRelay8"] = "O";
    StmCommands["SetRedGroup1"] = "P";
    StmCommands["SetGreenGroup1"] = "Q";
    StmCommands["SetBlueGroup1"] = "R";
    StmCommands["SetRedGroup2"] = "S";
    StmCommands["SetGreenGroup2"] = "T";
    StmCommands["SetBlueGroup2"] = "U";
    StmCommands["ResetVolumetricG1"] = "V";
    StmCommands["ResetVolumetricG2"] = "W";
    StmCommands["SetSecGroup1"] = "X";
    StmCommands["SetSecGroup2"] = "Y";
    StmCommands["SetRedMachine"] = "Z";
    StmCommands["SetGreenMachine"] = "a";
    StmCommands["SetBlueMachine"] = "b";
})(StmCommands = exports.StmCommands || (exports.StmCommands = {}));
/*
#define DIFFUSOR07 365
#define DIFFUSOR06 375
#define ACTIVEDIFFUSOR DIFFUSOR06
uint16_t koefVarG1 = ACTIVEDIFFUSOR;
uint16_t koefVarG2 = ACTIVEDIFFUSOR;
if (needG1Mla1 > 0) {
                    if ( (variomsCount[0]*100) / koefVarG1 >= needG1Mla1){
                        DoButton3();
                    }
                }
                if (needG1Mla2 > 0) {
                    if ( (variomsCount[0]*100) / koefVarG1 >= needG1Mla2){
                        DoButton4();
                    }
                }
            }*/
var TempratureData = [4331, 4281, 4232, 4225, 4218, 4211, 4204, 4197, 4190, 4183, 4176,
    4467, 4348, 4229, 4107, 4085, 4063, 4040, 4018, 3996, 3971, 3946,
    3863, 3780, 3698, 3710, 3673, 3640, 3606, 3573, 3539, 3506, 3472,
    3437, 3416, 3395, 3375, 3400, 3359, 3317, 3276, 3235, 3193, 3152,
    3127, 3090, 3048, 3006, 2964, 2922, 2880, 2839, 2797, 2755, 2721,
    2688, 2656, 2618, 2594, 2531, 2494, 2469, 2436, 2402, 2353, 2317,
    2282, 2245, 2211, 2164, 2122, 2082, 2057, 2008, 1973, 1936, 1899,
    1874, 1812, 1775, 1737, 1712, 1675, 1638, 1626, 1570, 1514, 1458,
    1402, 1346, 1291, 1241, 1220, 1199, 1178, 1157, 1135, 1114, 1093,
    1072, 1051, 1030, 1009, 988, 967, 946, 924, 903, 882, 861,
    840, 819, 798, 777, 756, 735, 714, 692, 671, 650, 629,
    608, 587, 566, 545, 524, 503, 481, 460, 439, 418, 397,
    376, 355, 334, 313, 292, 271, 249, 228, 207, 186, 165,
    144, 123, 102, 81, 60, 38, 17, 2];
var HAND_COLIBR_VOLTAGE = 2290;
var VoltCalibrBase = 1950;
TempratureData.forEach(function (value, index) {
    TempratureData[index] = value * HAND_COLIBR_VOLTAGE / VoltCalibrBase;
});
var Converter = {
    fromString: function (msg) {
        return { id: msg[0], content: msg.substring(1) };
    },
    toString: function (msg) {
        return "" + msg.id + msg.content;
    },
    voltToCelsium: function (voltage) {
        var volt = parseInt(voltage, 10) || 0;
        for (var i = 0; i < TempratureData.length - 1; i++) {
            if (TempratureData[i + 1] < volt) {
                var desatki = (10 * (volt - TempratureData[i + 1])) /
                    (TempratureData[i] - TempratureData[i + 1]);
                return ((i + 1) * 10 - desatki) / 10;
            }
        }
        return 150;
    }
};
exports.default = Converter;
//# sourceMappingURL=Converter.js.map