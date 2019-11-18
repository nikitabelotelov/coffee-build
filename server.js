module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/fs/fsLib.ts":
/*!****************************!*\
  !*** ./server/fs/fsLib.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nvar settingsProfilesFileName = \"settingsProfiles.json\";\nfunction getDefaultSettingsProfiles() {\n    var profiles = [\n        {\n            title: \"Стандарт\",\n            settings: {\n                Group1Temperature: '0',\n                Group1AutoMode1: '0',\n                Group1AutoMode2: '0',\n                Group1Presoaking: '0',\n                Group1PostPresoaking: '0',\n                Group2Temperature: '0',\n                Group2AutoMode1: '0',\n                Group2AutoMode2: '0',\n                Group2Presoaking: '0',\n                Group2PostPresoaking: '0',\n                PredictTemperature: '0',\n                SteamPressure: '0',\n                RedCold: '0',\n                GreenCold: '0',\n                BlueCold: '16',\n                AlphaCold: '16',\n                RedHot: '16',\n                GreenHot: '0',\n                BlueHot: '0',\n                AlphaHot: '16',\n                EnergyMode: '0',\n            }\n        },\n        {\n            title: \"Пользовательские\",\n            settings: {\n                Group1Temperature: '1',\n                Group1AutoMode1: '0',\n                Group1AutoMode2: '0',\n                Group1Presoaking: '0',\n                Group1PostPresoaking: '0',\n                Group2Temperature: '0',\n                Group2AutoMode1: '0',\n                Group2AutoMode2: '0',\n                Group2Presoaking: '0',\n                Group2PostPresoaking: '0',\n                PredictTemperature: '0',\n                SteamPressure: '0',\n                RedCold: '0',\n                GreenCold: '0',\n                BlueCold: '16',\n                AlphaCold: '16',\n                RedHot: '16',\n                GreenHot: '0',\n                BlueHot: '0',\n                AlphaHot: '16',\n                EnergyMode: '0',\n            }\n        }\n    ];\n    return {\n        choosenProfile: \"Стандарт\",\n        profiles: profiles\n    };\n}\nfunction loadSettings() {\n    return new Promise(function (resolve) {\n        fs_1.default.readFile(settingsProfilesFileName, function (error, data) {\n            if (error) {\n                console.error('Could not load profiles. Default profile loaded. ' + error);\n                resolve(getDefaultSettingsProfiles());\n            }\n            else {\n                resolve(JSON.parse(data.toString()));\n            }\n        });\n    });\n}\nexports.loadSettings = loadSettings;\nfunction serializeSettingsProfiles(profiles) {\n    fs_1.default.writeFile(settingsProfilesFileName, JSON.stringify(profiles), function (err) {\n        if (err) {\n            console.error('Error while saving settings profiles: ' + err);\n        }\n    });\n}\nexports.serializeSettingsProfiles = serializeSettingsProfiles;\n\n\n//# sourceURL=webpack:///./server/fs/fsLib.ts?");

/***/ }),

/***/ "./server/mocha/RSerial.ts":
/*!*********************************!*\
  !*** ./server/mocha/RSerial.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _a, _b;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Converter_1 = __importStar(__webpack_require__(/*! ../stm/Converter */ \"./server/stm/Converter.ts\"));\nvar Message_1 = __importDefault(__webpack_require__(/*! ../usart/Message */ \"./server/usart/Message.ts\"));\nvar machine = (_a = {},\n    _a[Converter_1.StmMessages.Relay1] = '0',\n    _a[Converter_1.StmMessages.Relay2] = '0',\n    _a[Converter_1.StmMessages.Relay3] = '0',\n    _a[Converter_1.StmMessages.Relay4] = '0',\n    _a[Converter_1.StmMessages.Relay5] = '0',\n    _a[Converter_1.StmMessages.Relay6] = '0',\n    _a[Converter_1.StmMessages.Relay7] = '0',\n    _a[Converter_1.StmMessages.Relay8] = '0',\n    _a[Converter_1.StmMessages.Valve1] = '0',\n    _a[Converter_1.StmMessages.Valve2] = '0',\n    _a[Converter_1.StmMessages.Valve3] = '0',\n    _a[Converter_1.StmMessages.Valve4] = '0',\n    _a[Converter_1.StmMessages.Valve5] = '0',\n    _a[Converter_1.StmMessages.Valve6] = '0',\n    _a[Converter_1.StmMessages.SteamPressure] = '1010',\n    _a[Converter_1.StmMessages.Group1Pressure] = '90',\n    _a[Converter_1.StmMessages.Group1Temperature] = '90',\n    _a[Converter_1.StmMessages.Group2Pressure] = '90',\n    _a[Converter_1.StmMessages.Group2Temperature] = '90',\n    _a[Converter_1.StmMessages.WaterLevel] = '0',\n    _a);\nvar MochaMashine = (_b = {},\n    _b[Converter_1.StmCommands.SetRelay1] = '0',\n    _b[Converter_1.StmCommands.SetRelay2] = '0',\n    _b[Converter_1.StmCommands.SetRelay3] = '0',\n    _b[Converter_1.StmCommands.SetRelay4] = '0',\n    _b[Converter_1.StmCommands.SetRelay5] = '0',\n    _b[Converter_1.StmCommands.SetRelay6] = '0',\n    _b[Converter_1.StmCommands.SetRelay7] = '0',\n    _b[Converter_1.StmCommands.SetRelay8] = '0',\n    _b[Converter_1.StmCommands.SetValve1] = '0',\n    _b[Converter_1.StmCommands.SetValve2] = '0',\n    _b[Converter_1.StmCommands.SetValve3] = '0',\n    _b[Converter_1.StmCommands.SetValve4] = '0',\n    _b[Converter_1.StmCommands.SetValve5] = '0',\n    _b[Converter_1.StmCommands.SetValve6] = '0',\n    _b);\nvar waterProcess = function () {\n    setTimeout(function () {\n        machine[Converter_1.StmMessages.WaterLevel] = '1';\n    }, 8000);\n};\nfunction set(cmd, msg) {\n    // @ts-ignore\n    if (MochaMashine[cmd] === '1' && machine[msg] === '0') {\n        // @ts-ignore\n        machine[msg] = '1';\n    }\n    // @ts-ignore\n    if (MochaMashine[cmd] === '0') {\n        // @ts-ignore\n        machine[msg] = '0';\n    }\n}\nsetInterval(function () {\n    if (MochaMashine[Converter_1.StmCommands.SetRelay8] === '1' && machine[Converter_1.StmMessages.Relay8] === '0') {\n        machine[Converter_1.StmMessages.Relay8] = '1';\n        if (machine[Converter_1.StmMessages.Relay8] === '1') { // todo check valve\n            waterProcess();\n        }\n    }\n    if (MochaMashine[Converter_1.StmCommands.SetRelay8] === '0') {\n        machine[Converter_1.StmMessages.Relay8] = '0';\n    }\n    set(Converter_1.StmCommands.SetValve1, Converter_1.StmMessages.Valve1);\n    set(Converter_1.StmCommands.SetValve2, Converter_1.StmMessages.Valve2);\n    set(Converter_1.StmCommands.SetValve3, Converter_1.StmMessages.Valve3);\n    set(Converter_1.StmCommands.SetValve4, Converter_1.StmMessages.Valve4);\n    set(Converter_1.StmCommands.SetValve5, Converter_1.StmMessages.Valve5);\n    set(Converter_1.StmCommands.SetValve6, Converter_1.StmMessages.Valve6);\n}, 100);\nvar RSerial = /** @class */ (function () {\n    function RSerial() {\n        this._portId = '123';\n        this.msg = 0;\n    }\n    RSerial.prototype.startMessages = function (func) {\n        var _this = this;\n        setTimeout(function () {\n            var messages = Object.keys(machine);\n            if (!messages[_this.msg]) {\n                _this.msg = 0;\n            }\n            var msgObject = new Message_1.default();\n            // @ts-ignore\n            var msg = msgObject.getMessageFromString(Converter_1.default.toString({ id: messages[_this.msg], content: machine[messages[_this.msg]] }));\n            func(msg);\n            if (_this.echoAns) {\n                var msg_1 = msgObject.getMessageFromString(Converter_1.default.toString({ id: Converter_1.StmMessages.Echo, content: _this.echoAns }));\n                _this.echoAns = '';\n                func(msg_1);\n            }\n            _this.msg++;\n            _this.startMessages(func);\n        }, 100);\n    };\n    RSerial.prototype.on = function (a, f) {\n        this.startMessages(f);\n        return this;\n    };\n    RSerial.prototype.open = function (cb) {\n        setTimeout(function () {\n            cb && cb();\n        }, 1000);\n    };\n    RSerial.prototype.close = function (cb) {\n    };\n    RSerial.prototype.write = function (data, cb) {\n        var msg = new Message_1.default();\n        // @ts-ignore\n        var message = msg.getMessageFromCode(data);\n        var stmM = Converter_1.default.fromString(message);\n        this.echoAns = message;\n        // console.log('STM:', stmM)\n        // @ts-ignore\n        MochaMashine[stmM.id] = stmM.content;\n        setTimeout(function () {\n            cb();\n        }, 100);\n    };\n    RSerial.prototype.flush = function (cb) {\n    };\n    return RSerial;\n}());\nexports.RSerial = RSerial;\n\n\n//# sourceURL=webpack:///./server/mocha/RSerial.ts?");

/***/ }),

/***/ "./server/server.tsx":
/*!***************************!*\
  !*** ./server/server.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\n//import template from '../src/template'; use for SSR\nvar ws_1 = __importDefault(__webpack_require__(/*! ws */ \"ws\"));\nvar Usart_1 = __importDefault(__webpack_require__(/*! ./usart/Usart */ \"./server/usart/Usart.ts\"));\nvar RSerial_1 = __webpack_require__(/*! ./mocha/RSerial */ \"./server/mocha/RSerial.ts\");\nvar Converter_1 = __importDefault(__webpack_require__(/*! ./stm/Converter */ \"./server/stm/Converter.ts\"));\nvar fsLib_1 = __webpack_require__(/*! ./fs/fsLib */ \"./server/fs/fsLib.ts\");\nvar fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nvar Serial;\ntry {\n    Serial = __webpack_require__(/*! raspi-serial */ \"raspi-serial\").Serial;\n}\ncatch (e) {\n    console.warn('Couldn\\'t load raspi-serial. Will use mock-object instead. Error: ' + e.message);\n    Serial = RSerial_1.RSerial;\n}\nvar app = express_1.default(), resourcesPath = path_1.default.join(\"\", \".\");\nvar settingsProfiles;\nvar root = process.cwd();\napp.use(express_1.default.static(resourcesPath));\nvar indexFile = fs_1.default.readFileSync(path_1.default.join(root, 'index.html'), 'utf8');\napp.use('/*', function (req, res) {\n    res.send(indexFile);\n});\nvar port = process.env.PORT || 777;\nvar expressServer = app.listen({ port: port }, function () {\n    return console.log(\"\\uD83D\\uDE80 Server ready\");\n});\nvar wss = new ws_1.default.Server({ server: expressServer });\nvar clients = {};\nvar serial;\nif (process.arch === 'arm') {\n    serial = new Serial({ baudRate: 57600 });\n}\nelse {\n    serial = new RSerial_1.RSerial();\n}\nvar messagesFromStm = [];\nvar settingsMsg = [];\nvar usart = new Usart_1.default(serial);\nvar sendMessages = function () {\n    while (messagesFromStm.length) {\n        var msg = messagesFromStm.pop();\n        for (var client in clients) {\n            try {\n                clients[client].ws.send(JSON.stringify({ stm: Converter_1.default.toString(msg) }));\n            }\n            catch (e) {\n                console.error('Couldn\\'t send message to websocket. Connection is probably closed. ' + e.message);\n            }\n        }\n    }\n    while (settingsMsg.length) {\n        var msg = settingsMsg.pop();\n        for (var client in clients) {\n            try {\n                clients[client].ws.send(JSON.stringify({ settingsProfiles: msg }));\n            }\n            catch (e) {\n                console.error('Couldn\\'t send message to websocket. Connection is probably closed. ' + e.message);\n            }\n        }\n    }\n};\nusart.msgHandlers.push(function (message) {\n    var stm = Converter_1.default.fromString(message);\n    messagesFromStm.push(stm);\n    sendMessages();\n});\nwss.on(\"connection\", function connectionListener(ws) {\n    var id = Math.random();\n    clients[id] = {\n        ws: ws\n    };\n    console.log(\"новое соединение \" + id);\n    fsLib_1.loadSettings().then(function (result) {\n        settingsProfiles = result;\n        settingsMsg.push(settingsProfiles);\n        sendMessages();\n    });\n    ws.on(\"close\", function () {\n        delete clients[id];\n    });\n    ws.on(\"message\", function (data) {\n        // @ts-ignore\n        var message = JSON.parse(data);\n        if (message.stm) {\n            //console.log(\"Got message from client. Trying to send to usart.\");\n            usart.sendMessage(message.stm);\n        }\n        else if (message.settings) {\n            settingsProfiles.profiles[message.settings.profile].settings[message.settings.id] = message.settings.content;\n            fsLib_1.serializeSettingsProfiles(settingsProfiles);\n            console.log(data);\n            // todo: save settings to file\n            // read - change - save\n        }\n        else if (message.profile) {\n            settingsProfiles.choosenProfile = message.profile;\n            fsLib_1.serializeSettingsProfiles(settingsProfiles);\n            console.log(data);\n        }\n        else {\n            console.log(data);\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///./server/server.tsx?");

/***/ }),

/***/ "./server/stm/Converter.ts":
/*!*********************************!*\
  !*** ./server/stm/Converter.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar StmMessages;\n(function (StmMessages) {\n    StmMessages[\"SteamPressure\"] = \"a\";\n    StmMessages[\"Group1Pressure\"] = \"b\";\n    StmMessages[\"Group1Temperature\"] = \"c\";\n    StmMessages[\"Group2Pressure\"] = \"d\";\n    StmMessages[\"Group2Temperature\"] = \"e\";\n    StmMessages[\"PredictGroupTemperature\"] = \"f\";\n    StmMessages[\"Error\"] = \"g\";\n    StmMessages[\"Valve1\"] = \"h\";\n    StmMessages[\"Valve2\"] = \"k\";\n    StmMessages[\"Valve3\"] = \"l\";\n    StmMessages[\"Valve4\"] = \"m\";\n    StmMessages[\"Valve5\"] = \"n\";\n    StmMessages[\"Valve6\"] = \"o\";\n    StmMessages[\"Relay1\"] = \"p\";\n    StmMessages[\"Relay2\"] = \"q\";\n    StmMessages[\"Relay3\"] = \"r\";\n    StmMessages[\"Relay4\"] = \"s\";\n    StmMessages[\"Relay5\"] = \"t\";\n    StmMessages[\"Relay6\"] = \"u\";\n    StmMessages[\"Relay7\"] = \"v\";\n    StmMessages[\"Relay8\"] = \"w\";\n    StmMessages[\"Echo\"] = \"x\";\n    StmMessages[\"WaterLevel\"] = \"y\";\n    StmMessages[\"Button1\"] = \"z\";\n    StmMessages[\"Button2\"] = \"A\";\n    StmMessages[\"Button3\"] = \"B\";\n    StmMessages[\"Button4\"] = \"C\";\n    StmMessages[\"Button5\"] = \"D\";\n    StmMessages[\"Button6\"] = \"E\";\n    StmMessages[\"Button7\"] = \"F\";\n    StmMessages[\"Button8\"] = \"G\";\n    StmMessages[\"Button9\"] = \"H\";\n    StmMessages[\"VolumetricGroup1\"] = \"K\";\n    StmMessages[\"VolumetricGroup2\"] = \"L\";\n})(StmMessages = exports.StmMessages || (exports.StmMessages = {}));\nvar StmCommands;\n(function (StmCommands) {\n    StmCommands[\"SetValve1\"] = \"A\";\n    StmCommands[\"SetValve2\"] = \"B\";\n    StmCommands[\"SetValve3\"] = \"C\";\n    StmCommands[\"SetValve4\"] = \"D\";\n    StmCommands[\"SetValve5\"] = \"E\";\n    StmCommands[\"SetValve6\"] = \"F\";\n    StmCommands[\"SetRelay1\"] = \"G\";\n    StmCommands[\"SetRelay2\"] = \"H\";\n    StmCommands[\"SetRelay3\"] = \"J\";\n    StmCommands[\"SetRelay4\"] = \"K\";\n    StmCommands[\"SetRelay5\"] = \"L\";\n    StmCommands[\"SetRelay6\"] = \"M\";\n    StmCommands[\"SetRelay7\"] = \"N\";\n    StmCommands[\"SetRelay8\"] = \"O\";\n    StmCommands[\"SetRedGroup1\"] = \"P\";\n    StmCommands[\"SetGreenGroup1\"] = \"Q\";\n    StmCommands[\"SetBlueGroup1\"] = \"R\";\n    StmCommands[\"SetRedGroup2\"] = \"S\";\n    StmCommands[\"SetGreenGroup2\"] = \"T\";\n    StmCommands[\"SetBlueGroup2\"] = \"U\";\n    StmCommands[\"ResetVolumetricG1\"] = \"V\";\n    StmCommands[\"ResetVolumetricG2\"] = \"W\";\n    StmCommands[\"SetSecGroup1\"] = \"X\";\n    StmCommands[\"SetSecGroup2\"] = \"Y\";\n    StmCommands[\"SetRedMachine\"] = \"Z\";\n    StmCommands[\"SetGreenMachine\"] = \"a\";\n    StmCommands[\"SetBlueMachine\"] = \"b\";\n})(StmCommands = exports.StmCommands || (exports.StmCommands = {}));\n/*\n*/\nvar TempratureData = [4331, 4281, 4232, 4225, 4218, 4211, 4204, 4197, 4190, 4183, 4176,\n    4467, 4348, 4229, 4107, 4085, 4063, 4040, 4018, 3996, 3971, 3946,\n    3863, 3780, 3698, 3710, 3673, 3640, 3606, 3573, 3539, 3506, 3472,\n    3437, 3416, 3395, 3375, 3400, 3359, 3317, 3276, 3235, 3193, 3152,\n    3127, 3090, 3048, 3006, 2964, 2922, 2880, 2839, 2797, 2755, 2721,\n    2688, 2656, 2618, 2594, 2531, 2494, 2469, 2436, 2402, 2353, 2317,\n    2282, 2245, 2211, 2164, 2122, 2082, 2057, 2008, 1973, 1936, 1899,\n    1874, 1812, 1775, 1737, 1712, 1675, 1638, 1626, 1570, 1514, 1458,\n    1402, 1346, 1291, 1241, 1220, 1199, 1178, 1157, 1135, 1114, 1093,\n    1072, 1051, 1030, 1009, 988, 967, 946, 924, 903, 882, 861,\n    840, 819, 798, 777, 756, 735, 714, 692, 671, 650, 629,\n    608, 587, 566, 545, 524, 503, 481, 460, 439, 418, 397,\n    376, 355, 334, 313, 292, 271, 249, 228, 207, 186, 165,\n    144, 123, 102, 81, 60, 38, 17, 2];\nvar HAND_COLIBR_VOLTAGE = 2290;\nvar VoltCalibrBase = 1950;\nTempratureData.forEach(function (value, index) {\n    TempratureData[index] = value * HAND_COLIBR_VOLTAGE / VoltCalibrBase;\n});\nvar Converter = {\n    fromString: function (msg) {\n        return { id: msg[0], content: msg.substring(1) };\n    },\n    toString: function (msg) {\n        return \"\" + msg.id + msg.content;\n    },\n    voltToCelsium: function (voltage) {\n        var volt = parseInt(voltage, 10) || 0;\n        for (var i = 0; i < TempratureData.length - 1; i++) {\n            if (TempratureData[i + 1] < volt) {\n                var desatki = (10 * (volt - TempratureData[i + 1])) /\n                    (TempratureData[i] - TempratureData[i + 1]);\n                return ((i + 1) * 10 - desatki) / 10;\n            }\n        }\n        return 150;\n    },\n    volumetric: function (value) {\n        if (value === 1) {\n            return 1;\n        }\n        var DIFFUSOR07 = 365;\n        //#define DIFFUSOR06 375\n        //#define ACTIVEDIFFUSOR DIFFUSOR06\n        return Math.round((value * 100) / DIFFUSOR07);\n    },\n    compressure: function (value) {\n        if (value < 750) {\n            return 0;\n        }\n        return (value - 750) / 2;\n    }\n};\nexports.default = Converter;\n\n\n//# sourceURL=webpack:///./server/stm/Converter.ts?");

/***/ }),

/***/ "./server/usart/Constants.ts":
/*!***********************************!*\
  !*** ./server/usart/Constants.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    startBit: '[',\n    endBit: ']',\n};\n\n\n//# sourceURL=webpack:///./server/usart/Constants.ts?");

/***/ }),

/***/ "./server/usart/Message.ts":
/*!*********************************!*\
  !*** ./server/usart/Message.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Constants_1 = __importDefault(__webpack_require__(/*! ./Constants */ \"./server/usart/Constants.ts\"));\nvar Message = /** @class */ (function () {\n    function Message() {\n    }\n    Message.prototype.getMessageFromString = function (message) {\n        var length = message.length;\n        var messageBits = [];\n        var code = 0xFF;\n        for (var i = 1; i < length; i++) {\n            var char = message.charCodeAt(i);\n            messageBits.push(char);\n            code = code ^ char;\n        }\n        return [Constants_1.default.startBit.charCodeAt(0), message.charCodeAt(0), length - 1].concat(messageBits).concat([code, Constants_1.default.endBit.charCodeAt(0)]);\n    };\n    Message.prototype.getMessageFromCode = function (code) {\n        var length = code[2];\n        var message = \"\" + String.fromCharCode(code[1]);\n        var lastByte = 0xFF;\n        if (length === 0) {\n            return '';\n        }\n        if (code.length !== length + 5) {\n            console.log('exit1', message, code.length, length);\n            return '';\n        }\n        for (var i = 0; i < length; i++) {\n            var char = code[i + 3];\n            message = \"\" + message + String.fromCharCode(char);\n            lastByte = lastByte ^ char;\n        }\n        if (code[length + 3] !== lastByte) {\n            console.log('exit2', message, code[length + 3], lastByte);\n            return '';\n        }\n        return message;\n    };\n    return Message;\n}());\nexports.default = Message;\n\n\n//# sourceURL=webpack:///./server/usart/Message.ts?");

/***/ }),

/***/ "./server/usart/Usart.ts":
/*!*******************************!*\
  !*** ./server/usart/Usart.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Constants_1 = __importDefault(__webpack_require__(/*! ./Constants */ \"./server/usart/Constants.ts\"));\nvar Message_1 = __importDefault(__webpack_require__(/*! ./Message */ \"./server/usart/Message.ts\"));\nvar buffer_1 = __importDefault(__webpack_require__(/*! buffer */ \"buffer\"));\nvar Usart = /** @class */ (function () {\n    function Usart(serial) {\n        var _this = this;\n        this.buffer = [];\n        this.msgHandlers = [];\n        this.queue = [];\n        this.inProgress = false;\n        serial.open(function () {\n            _this.serial = serial;\n            console.log(\"Serial opened\");\n            serial.on('data', function (data) {\n                // @ts-ignore\n                _this.buffer = __spreadArrays(_this.buffer, data);\n                _this.extractMessage();\n            });\n            _this.queueProcess();\n        });\n    }\n    Usart.prototype.extractMessage = function () {\n        var start = this.buffer.indexOf(Constants_1.default.startBit.charCodeAt(0));\n        if (start > -1) {\n            this.buffer = this.buffer.slice(start);\n            var end = this.buffer.indexOf(Constants_1.default.endBit.charCodeAt(0));\n            if (end > -1) {\n                var message = this.buffer.splice(0, end + 1);\n                this.buffer = this.buffer.slice(end + 1);\n                var msgObject = new Message_1.default();\n                var stringMsg_1 = msgObject.getMessageFromCode(message);\n                if (stringMsg_1) {\n                    this.msgHandlers.forEach(function (el) { return el(stringMsg_1); });\n                }\n                this.extractMessage();\n            }\n        }\n    };\n    Usart.prototype.sendMessage = function (message) {\n        var msgObject = new Message_1.default();\n        this.queue.push(msgObject.getMessageFromString(message));\n        //console.log(\"Pushed to queue\");\n        this.queueProcess();\n    };\n    Usart.prototype.queueProcess = function () {\n        var _this = this;\n        if (this.serial && !this.inProgress) {\n            if (this.queue.length > 0) {\n                var msg = buffer_1.default.Buffer.from(this.queue[0]);\n                this.queue = this.queue.slice(1);\n                this.inProgress = true;\n                this.serial.write(msg, function () {\n                    _this.inProgress = false;\n                    _this.queueProcess();\n                });\n            }\n        }\n    };\n    return Usart;\n}());\nexports.default = Usart;\n\n\n//# sourceURL=webpack:///./server/usart/Usart.ts?");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"buffer\");\n\n//# sourceURL=webpack:///external_%22buffer%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "raspi-serial":
/*!*******************************!*\
  !*** external "raspi-serial" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"raspi-serial\");\n\n//# sourceURL=webpack:///external_%22raspi-serial%22?");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ws\");\n\n//# sourceURL=webpack:///external_%22ws%22?");

/***/ })

/******/ });