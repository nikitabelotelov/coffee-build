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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\r\nvar settingsProfilesFileName = \"settingsProfiles.json\";\r\nfunction getDefaultSettingsProfiles() {\r\n    var profiles = [\r\n        {\r\n            title: \"Стандарт\",\r\n            settings: {\r\n                Group1Temperature: '0',\r\n                Group1AutoMode1: '0',\r\n                Group1AutoMode2: '0',\r\n                Group2Temperature: '0',\r\n                Group2AutoMode1: '0',\r\n                Group2AutoMode2: '0',\r\n                SteamPressure: '0',\r\n                RedCold: '0',\r\n                GreenCold: '0',\r\n                BlueCold: '16',\r\n                RedHot: '16',\r\n                GreenHot: '0',\r\n                BlueHot: '0',\r\n                EnergyMode: '0',\r\n            }\r\n        },\r\n        {\r\n            title: \"Пользовательские\",\r\n            settings: {\r\n                Group1Temperature: '1',\r\n                Group1AutoMode1: '0',\r\n                Group1AutoMode2: '0',\r\n                Group2Temperature: '0',\r\n                Group2AutoMode1: '0',\r\n                Group2AutoMode2: '0',\r\n                SteamPressure: '0',\r\n                RedCold: '0',\r\n                GreenCold: '0',\r\n                BlueCold: '16',\r\n                RedHot: '16',\r\n                GreenHot: '0',\r\n                BlueHot: '0',\r\n                EnergyMode: '0',\r\n            }\r\n        }\r\n    ];\r\n    return {\r\n        choosenProfile: \"Стандарт\",\r\n        profiles: profiles\r\n    };\r\n}\r\nfunction loadSettings() {\r\n    return new Promise(function (resolve) {\r\n        fs_1.default.readFile(settingsProfilesFileName, function (error, data) {\r\n            if (error) {\r\n                console.error('Could not load profiles. Default profile loaded. ' + error);\r\n                resolve(getDefaultSettingsProfiles());\r\n            }\r\n            else {\r\n                resolve(JSON.parse(data.toString()));\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.loadSettings = loadSettings;\r\nfunction serializeSettingsProfiles(profiles) {\r\n    fs_1.default.writeFile(settingsProfilesFileName, JSON.stringify(profiles), function (err) {\r\n        if (err) {\r\n            console.error('Error while saving settings profiles: ' + err);\r\n        }\r\n    });\r\n}\r\nexports.serializeSettingsProfiles = serializeSettingsProfiles;\r\n\n\n//# sourceURL=webpack:///./server/fs/fsLib.ts?");

/***/ }),

/***/ "./server/mocha/RSerial.ts":
/*!*********************************!*\
  !*** ./server/mocha/RSerial.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a, _b;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Converter_1 = __importStar(__webpack_require__(/*! ../stm/Converter */ \"./server/stm/Converter.ts\"));\r\nvar Message_1 = __importDefault(__webpack_require__(/*! ../usart/Message */ \"./server/usart/Message.ts\"));\r\nvar machine = (_a = {},\r\n    _a[Converter_1.StmMessages.Relay1] = '0',\r\n    _a[Converter_1.StmMessages.Relay2] = '0',\r\n    _a[Converter_1.StmMessages.Relay3] = '0',\r\n    _a[Converter_1.StmMessages.Relay4] = '0',\r\n    _a[Converter_1.StmMessages.Relay5] = '0',\r\n    _a[Converter_1.StmMessages.Relay6] = '0',\r\n    _a[Converter_1.StmMessages.Relay7] = '0',\r\n    _a[Converter_1.StmMessages.Relay8] = '0',\r\n    _a[Converter_1.StmMessages.Valve1] = '0',\r\n    _a[Converter_1.StmMessages.Valve2] = '0',\r\n    _a[Converter_1.StmMessages.Valve3] = '0',\r\n    _a[Converter_1.StmMessages.Valve4] = '0',\r\n    _a[Converter_1.StmMessages.Valve5] = '0',\r\n    _a[Converter_1.StmMessages.Valve6] = '0',\r\n    _a[Converter_1.StmMessages.SteamPressure] = '1010',\r\n    _a[Converter_1.StmMessages.Group1Pressure] = '90',\r\n    _a[Converter_1.StmMessages.Group1Temperature] = '90',\r\n    _a[Converter_1.StmMessages.Group2Pressure] = '90',\r\n    _a[Converter_1.StmMessages.Group2Temperature] = '90',\r\n    _a[Converter_1.StmMessages.WaterLevel] = '0',\r\n    _a);\r\nvar MochaMashine = (_b = {},\r\n    _b[Converter_1.StmCommands.SetRelay1] = '0',\r\n    _b[Converter_1.StmCommands.SetRelay2] = '0',\r\n    _b[Converter_1.StmCommands.SetRelay3] = '0',\r\n    _b[Converter_1.StmCommands.SetRelay4] = '0',\r\n    _b[Converter_1.StmCommands.SetRelay5] = '0',\r\n    _b[Converter_1.StmCommands.SetRelay6] = '0',\r\n    _b[Converter_1.StmCommands.SetRelay7] = '0',\r\n    _b[Converter_1.StmCommands.SetRelay8] = '0',\r\n    _b[Converter_1.StmCommands.SetValve1] = '0',\r\n    _b[Converter_1.StmCommands.SetValve2] = '0',\r\n    _b[Converter_1.StmCommands.SetValve3] = '0',\r\n    _b[Converter_1.StmCommands.SetValve4] = '0',\r\n    _b[Converter_1.StmCommands.SetValve5] = '0',\r\n    _b[Converter_1.StmCommands.SetValve6] = '0',\r\n    _b);\r\nvar waterProcess = function () {\r\n    setTimeout(function () {\r\n        machine[Converter_1.StmMessages.WaterLevel] = '1';\r\n    }, 8000);\r\n};\r\nfunction set(cmd, msg) {\r\n    // @ts-ignore\r\n    if (MochaMashine[cmd] === '1' && machine[msg] === '0') {\r\n        // @ts-ignore\r\n        machine[msg] = '1';\r\n    }\r\n    // @ts-ignore\r\n    if (MochaMashine[cmd] === '0') {\r\n        // @ts-ignore\r\n        machine[msg] = '0';\r\n    }\r\n}\r\nsetInterval(function () {\r\n    if (MochaMashine[Converter_1.StmCommands.SetRelay8] === '1' && machine[Converter_1.StmMessages.Relay8] === '0') {\r\n        machine[Converter_1.StmMessages.Relay8] = '1';\r\n        if (machine[Converter_1.StmMessages.Relay8] === '1') { // todo check valve\r\n            waterProcess();\r\n        }\r\n    }\r\n    if (MochaMashine[Converter_1.StmCommands.SetRelay8] === '0') {\r\n        machine[Converter_1.StmMessages.Relay8] = '0';\r\n    }\r\n    set(Converter_1.StmCommands.SetValve1, Converter_1.StmMessages.Valve1);\r\n    set(Converter_1.StmCommands.SetValve2, Converter_1.StmMessages.Valve2);\r\n    set(Converter_1.StmCommands.SetValve3, Converter_1.StmMessages.Valve3);\r\n    set(Converter_1.StmCommands.SetValve4, Converter_1.StmMessages.Valve4);\r\n    set(Converter_1.StmCommands.SetValve5, Converter_1.StmMessages.Valve5);\r\n    set(Converter_1.StmCommands.SetValve6, Converter_1.StmMessages.Valve6);\r\n}, 100);\r\nvar RSerial = /** @class */ (function () {\r\n    function RSerial() {\r\n        this._portId = '123';\r\n        this.msg = 0;\r\n    }\r\n    RSerial.prototype.startMessages = function (func) {\r\n        var _this = this;\r\n        setTimeout(function () {\r\n            var messages = Object.keys(machine);\r\n            if (!messages[_this.msg]) {\r\n                _this.msg = 0;\r\n            }\r\n            var msgObject = new Message_1.default();\r\n            // @ts-ignore\r\n            var msg = msgObject.getMessageFromString(Converter_1.default.toString({ id: messages[_this.msg], content: machine[messages[_this.msg]] }));\r\n            func(msg);\r\n            if (_this.echoAns) {\r\n                var msg_1 = msgObject.getMessageFromString(Converter_1.default.toString({ id: Converter_1.StmMessages.Echo, content: _this.echoAns }));\r\n                _this.echoAns = '';\r\n                func(msg_1);\r\n            }\r\n            _this.msg++;\r\n            _this.startMessages(func);\r\n        }, 100);\r\n    };\r\n    RSerial.prototype.on = function (a, f) {\r\n        this.startMessages(f);\r\n        return this;\r\n    };\r\n    RSerial.prototype.open = function (cb) {\r\n        setTimeout(function () {\r\n            cb && cb();\r\n        }, 1000);\r\n    };\r\n    RSerial.prototype.close = function (cb) {\r\n    };\r\n    RSerial.prototype.write = function (data, cb) {\r\n        var msg = new Message_1.default();\r\n        // @ts-ignore\r\n        var message = msg.getMessageFromCode(data);\r\n        var stmM = Converter_1.default.fromString(message);\r\n        this.echoAns = message;\r\n        // console.log('STM:', stmM)\r\n        // @ts-ignore\r\n        MochaMashine[stmM.id] = stmM.content;\r\n        setTimeout(function () {\r\n            cb();\r\n        }, 100);\r\n    };\r\n    RSerial.prototype.flush = function (cb) {\r\n    };\r\n    return RSerial;\r\n}());\r\nexports.RSerial = RSerial;\r\n\n\n//# sourceURL=webpack:///./server/mocha/RSerial.ts?");

/***/ }),

/***/ "./server/server.tsx":
/*!***************************!*\
  !*** ./server/server.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\n//import template from '../src/template'; use for SSR\r\nvar ws_1 = __importDefault(__webpack_require__(/*! ws */ \"ws\"));\r\nvar Usart_1 = __importDefault(__webpack_require__(/*! ./usart/Usart */ \"./server/usart/Usart.ts\"));\r\nvar RSerial_1 = __webpack_require__(/*! ./mocha/RSerial */ \"./server/mocha/RSerial.ts\");\r\nvar Converter_1 = __importDefault(__webpack_require__(/*! ./stm/Converter */ \"./server/stm/Converter.ts\"));\r\nvar fsLib_1 = __webpack_require__(/*! ./fs/fsLib */ \"./server/fs/fsLib.ts\");\r\nvar fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\r\nvar Serial;\r\ntry {\r\n    Serial = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'raspi-serial'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).Serial;\r\n}\r\ncatch (e) {\r\n    console.warn('Couldn\\'t load raspi-serial. Will use mock-object instead.');\r\n    Serial = RSerial_1.RSerial;\r\n}\r\nvar app = express_1.default(), resourcesPath = path_1.default.join(\"\", \".\");\r\nvar settingsProfiles;\r\nvar root = process.cwd();\r\napp.use(express_1.default.static(resourcesPath));\r\nvar indexFile = fs_1.default.readFileSync(path_1.default.join(root, 'index.html'), 'utf8');\r\napp.use('/*', function (req, res) {\r\n    res.send(indexFile);\r\n});\r\nvar port = process.env.PORT || 777;\r\nvar expressServer = app.listen({ port: port }, function () {\r\n    return console.log(\"\\uD83D\\uDE80 Server ready\");\r\n});\r\nvar wss = new ws_1.default.Server({ server: expressServer });\r\nvar clients = {};\r\nvar serial;\r\nif (process.arch === 'arm') {\r\n    serial = new Serial({ baudRate: 57600 });\r\n}\r\nelse {\r\n    serial = new RSerial_1.RSerial();\r\n}\r\nvar messagesFromStm = [];\r\nvar settingsMsg = [];\r\nvar usart = new Usart_1.default(serial);\r\nvar sendMessages = function () {\r\n    while (messagesFromStm.length) {\r\n        var msg = messagesFromStm.pop();\r\n        for (var client in clients) {\r\n            try {\r\n                clients[client].ws.send(JSON.stringify({ stm: Converter_1.default.toString(msg) }));\r\n            }\r\n            catch (e) {\r\n                console.error('Couldn\\'t send message to websocket. Connection is probably closed. ' + e.message);\r\n            }\r\n        }\r\n    }\r\n    while (settingsMsg.length) {\r\n        var msg = settingsMsg.pop();\r\n        for (var client in clients) {\r\n            try {\r\n                clients[client].ws.send(JSON.stringify({ settingsProfiles: msg }));\r\n            }\r\n            catch (e) {\r\n                console.error('Couldn\\'t send message to websocket. Connection is probably closed. ' + e.message);\r\n            }\r\n        }\r\n    }\r\n};\r\nusart.msgHandlers.push(function (message) {\r\n    var stm = Converter_1.default.fromString(message);\r\n    messagesFromStm.push(stm);\r\n    sendMessages();\r\n});\r\nwss.on(\"connection\", function connectionListener(ws) {\r\n    var id = Math.random();\r\n    clients[id] = {\r\n        ws: ws\r\n    };\r\n    console.log(\"новое соединение \" + id);\r\n    fsLib_1.loadSettings().then(function (result) {\r\n        settingsProfiles = result;\r\n        settingsMsg.push(settingsProfiles);\r\n        sendMessages();\r\n    });\r\n    ws.on(\"close\", function () {\r\n        delete clients[id];\r\n    });\r\n    ws.on(\"message\", function (data) {\r\n        // @ts-ignore\r\n        var message = JSON.parse(data);\r\n        if (message.stm) {\r\n            //console.log(\"Got message from client. Trying to send to usart.\");\r\n            usart.sendMessage(message.stm);\r\n        }\r\n        else if (message.settings) {\r\n            settingsProfiles.profiles[message.settings.profile].settings[message.settings.id] = message.settings.content;\r\n            fsLib_1.serializeSettingsProfiles(settingsProfiles);\r\n            console.log(data);\r\n            // todo: save settings to file\r\n            // read - change - save\r\n        }\r\n        else if (message.profile) {\r\n            settingsProfiles.choosenProfile = message.profile;\r\n            fsLib_1.serializeSettingsProfiles(settingsProfiles);\r\n            console.log(data);\r\n        }\r\n        else {\r\n            console.log(data);\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./server/server.tsx?");

/***/ }),

/***/ "./server/stm/Converter.ts":
/*!*********************************!*\
  !*** ./server/stm/Converter.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar StmMessages;\r\n(function (StmMessages) {\r\n    StmMessages[\"SteamPressure\"] = \"a\";\r\n    StmMessages[\"Group1Pressure\"] = \"b\";\r\n    StmMessages[\"Group1Temperature\"] = \"c\";\r\n    StmMessages[\"Group2Pressure\"] = \"d\";\r\n    StmMessages[\"Group2Temperature\"] = \"e\";\r\n    StmMessages[\"PredictGroupTemperature\"] = \"f\";\r\n    StmMessages[\"Error\"] = \"g\";\r\n    StmMessages[\"Valve1\"] = \"h\";\r\n    StmMessages[\"Valve2\"] = \"k\";\r\n    StmMessages[\"Valve3\"] = \"l\";\r\n    StmMessages[\"Valve4\"] = \"m\";\r\n    StmMessages[\"Valve5\"] = \"n\";\r\n    StmMessages[\"Valve6\"] = \"o\";\r\n    StmMessages[\"Relay1\"] = \"p\";\r\n    StmMessages[\"Relay2\"] = \"q\";\r\n    StmMessages[\"Relay3\"] = \"r\";\r\n    StmMessages[\"Relay4\"] = \"s\";\r\n    StmMessages[\"Relay5\"] = \"t\";\r\n    StmMessages[\"Relay6\"] = \"u\";\r\n    StmMessages[\"Relay7\"] = \"v\";\r\n    StmMessages[\"Relay8\"] = \"w\";\r\n    StmMessages[\"Echo\"] = \"x\";\r\n    StmMessages[\"WaterLevel\"] = \"y\";\r\n    StmMessages[\"Button1\"] = \"z\";\r\n    StmMessages[\"Button2\"] = \"A\";\r\n    StmMessages[\"Button3\"] = \"B\";\r\n    StmMessages[\"Button4\"] = \"C\";\r\n    StmMessages[\"Button5\"] = \"D\";\r\n    StmMessages[\"Button6\"] = \"E\";\r\n    StmMessages[\"Button7\"] = \"F\";\r\n    StmMessages[\"Button8\"] = \"G\";\r\n    StmMessages[\"Button9\"] = \"H\";\r\n    StmMessages[\"VolumetricGroup1\"] = \"K\";\r\n    StmMessages[\"VolumetricGroup2\"] = \"L\";\r\n})(StmMessages = exports.StmMessages || (exports.StmMessages = {}));\r\nvar StmCommands;\r\n(function (StmCommands) {\r\n    StmCommands[\"SetValve1\"] = \"A\";\r\n    StmCommands[\"SetValve2\"] = \"B\";\r\n    StmCommands[\"SetValve3\"] = \"C\";\r\n    StmCommands[\"SetValve4\"] = \"D\";\r\n    StmCommands[\"SetValve5\"] = \"E\";\r\n    StmCommands[\"SetValve6\"] = \"F\";\r\n    StmCommands[\"SetRelay1\"] = \"G\";\r\n    StmCommands[\"SetRelay2\"] = \"H\";\r\n    StmCommands[\"SetRelay3\"] = \"J\";\r\n    StmCommands[\"SetRelay4\"] = \"K\";\r\n    StmCommands[\"SetRelay5\"] = \"L\";\r\n    StmCommands[\"SetRelay6\"] = \"M\";\r\n    StmCommands[\"SetRelay7\"] = \"N\";\r\n    StmCommands[\"SetRelay8\"] = \"O\";\r\n    StmCommands[\"SetRedGroup1\"] = \"P\";\r\n    StmCommands[\"SetGreenGroup1\"] = \"Q\";\r\n    StmCommands[\"SetBlueGroup1\"] = \"R\";\r\n    StmCommands[\"SetRedGroup2\"] = \"S\";\r\n    StmCommands[\"SetGreenGroup2\"] = \"T\";\r\n    StmCommands[\"SetBlueGroup2\"] = \"U\";\r\n    StmCommands[\"ResetVolumetricG1\"] = \"V\";\r\n    StmCommands[\"ResetVolumetricG2\"] = \"W\";\r\n    StmCommands[\"SetSecGroup1\"] = \"X\";\r\n    StmCommands[\"SetSecGroup2\"] = \"Y\";\r\n    StmCommands[\"SetRedMachine\"] = \"Z\";\r\n    StmCommands[\"SetGreenMachine\"] = \"a\";\r\n    StmCommands[\"SetBlueMachine\"] = \"b\";\r\n})(StmCommands = exports.StmCommands || (exports.StmCommands = {}));\r\n/*\r\n#define DIFFUSOR07 365\r\n#define DIFFUSOR06 375\r\n#define ACTIVEDIFFUSOR DIFFUSOR06\r\nuint16_t koefVarG1 = ACTIVEDIFFUSOR;\r\nuint16_t koefVarG2 = ACTIVEDIFFUSOR;\r\nif (needG1Mla1 > 0) {\r\n                    if ( (variomsCount[0]*100) / koefVarG1 >= needG1Mla1){\r\n                        DoButton3();\r\n                    }\r\n                }\r\n                if (needG1Mla2 > 0) {\r\n                    if ( (variomsCount[0]*100) / koefVarG1 >= needG1Mla2){\r\n                        DoButton4();\r\n                    }\r\n                }\r\n            }*/\r\nvar TempratureData = [4331, 4281, 4232, 4225, 4218, 4211, 4204, 4197, 4190, 4183, 4176,\r\n    4467, 4348, 4229, 4107, 4085, 4063, 4040, 4018, 3996, 3971, 3946,\r\n    3863, 3780, 3698, 3710, 3673, 3640, 3606, 3573, 3539, 3506, 3472,\r\n    3437, 3416, 3395, 3375, 3400, 3359, 3317, 3276, 3235, 3193, 3152,\r\n    3127, 3090, 3048, 3006, 2964, 2922, 2880, 2839, 2797, 2755, 2721,\r\n    2688, 2656, 2618, 2594, 2531, 2494, 2469, 2436, 2402, 2353, 2317,\r\n    2282, 2245, 2211, 2164, 2122, 2082, 2057, 2008, 1973, 1936, 1899,\r\n    1874, 1812, 1775, 1737, 1712, 1675, 1638, 1626, 1570, 1514, 1458,\r\n    1402, 1346, 1291, 1241, 1220, 1199, 1178, 1157, 1135, 1114, 1093,\r\n    1072, 1051, 1030, 1009, 988, 967, 946, 924, 903, 882, 861,\r\n    840, 819, 798, 777, 756, 735, 714, 692, 671, 650, 629,\r\n    608, 587, 566, 545, 524, 503, 481, 460, 439, 418, 397,\r\n    376, 355, 334, 313, 292, 271, 249, 228, 207, 186, 165,\r\n    144, 123, 102, 81, 60, 38, 17, 2];\r\nvar HAND_COLIBR_VOLTAGE = 2290;\r\nvar VoltCalibrBase = 1950;\r\nTempratureData.forEach(function (value, index) {\r\n    TempratureData[index] = value * HAND_COLIBR_VOLTAGE / VoltCalibrBase;\r\n});\r\nvar Converter = {\r\n    fromString: function (msg) {\r\n        return { id: msg[0], content: msg.substring(1) };\r\n    },\r\n    toString: function (msg) {\r\n        return \"\" + msg.id + msg.content;\r\n    },\r\n    voltToCelsium: function (voltage) {\r\n        var volt = parseInt(voltage, 10) || 0;\r\n        for (var i = 0; i < TempratureData.length - 1; i++) {\r\n            if (TempratureData[i + 1] < volt) {\r\n                var desatki = (10 * (volt - TempratureData[i + 1])) /\r\n                    (TempratureData[i] - TempratureData[i + 1]);\r\n                return ((i + 1) * 10 - desatki) / 10;\r\n            }\r\n        }\r\n        return 150;\r\n    }\r\n};\r\nexports.default = Converter;\r\n\n\n//# sourceURL=webpack:///./server/stm/Converter.ts?");

/***/ }),

/***/ "./server/usart/Constants.ts":
/*!***********************************!*\
  !*** ./server/usart/Constants.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    startBit: '[',\r\n    endBit: ']',\r\n};\r\n\n\n//# sourceURL=webpack:///./server/usart/Constants.ts?");

/***/ }),

/***/ "./server/usart/Message.ts":
/*!*********************************!*\
  !*** ./server/usart/Message.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Constants_1 = __importDefault(__webpack_require__(/*! ./Constants */ \"./server/usart/Constants.ts\"));\r\nvar Message = /** @class */ (function () {\r\n    function Message() {\r\n    }\r\n    Message.prototype.getMessageFromString = function (message) {\r\n        var length = message.length;\r\n        var messageBits = [];\r\n        var code = 0xFF;\r\n        for (var i = 1; i < length; i++) {\r\n            var char = message.charCodeAt(i);\r\n            messageBits.push(char);\r\n            code = code ^ char;\r\n        }\r\n        return [Constants_1.default.startBit.charCodeAt(0), message.charCodeAt(0), length - 1].concat(messageBits).concat([code, Constants_1.default.endBit.charCodeAt(0)]);\r\n    };\r\n    Message.prototype.getMessageFromCode = function (code) {\r\n        var length = code[2];\r\n        var message = \"\" + String.fromCharCode(code[1]);\r\n        var lastByte = 0xFF;\r\n        if (length === 0) {\r\n            return '';\r\n        }\r\n        if (code.length !== length + 5) {\r\n            console.log('exit1', code.length, length);\r\n            return '';\r\n        }\r\n        for (var i = 0; i < length; i++) {\r\n            var char = code[i + 3];\r\n            message = \"\" + message + String.fromCharCode(char);\r\n            lastByte = lastByte ^ char;\r\n        }\r\n        if (code[length + 3] !== lastByte) {\r\n            console.log('exit2', code[length + 3], lastByte);\r\n            return '';\r\n        }\r\n        return message;\r\n    };\r\n    return Message;\r\n}());\r\nexports.default = Message;\r\n\n\n//# sourceURL=webpack:///./server/usart/Message.ts?");

/***/ }),

/***/ "./server/usart/Usart.ts":
/*!*******************************!*\
  !*** ./server/usart/Usart.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Constants_1 = __importDefault(__webpack_require__(/*! ./Constants */ \"./server/usart/Constants.ts\"));\r\nvar Message_1 = __importDefault(__webpack_require__(/*! ./Message */ \"./server/usart/Message.ts\"));\r\nvar buffer_1 = __importDefault(__webpack_require__(/*! buffer */ \"buffer\"));\r\nvar Usart = /** @class */ (function () {\r\n    function Usart(serial) {\r\n        var _this = this;\r\n        this.buffer = [];\r\n        this.msgHandlers = [];\r\n        this.queue = [];\r\n        this.inProgress = false;\r\n        serial.open(function () {\r\n            _this.serial = serial;\r\n            console.log(\"Serial opened\");\r\n            serial.on('data', function (data) {\r\n                // @ts-ignore\r\n                _this.buffer = __spreadArrays(_this.buffer, data);\r\n                _this.extractMessage();\r\n            });\r\n            _this.queueProcess();\r\n        });\r\n    }\r\n    Usart.prototype.extractMessage = function () {\r\n        var start = this.buffer.indexOf(Constants_1.default.startBit.charCodeAt(0));\r\n        if (start > -1) {\r\n            this.buffer = this.buffer.slice(start);\r\n            var end = this.buffer.indexOf(Constants_1.default.endBit.charCodeAt(0));\r\n            if (end > -1) {\r\n                var message = this.buffer.splice(0, end + 1);\r\n                this.buffer = this.buffer.slice(end + 1);\r\n                var msgObject = new Message_1.default();\r\n                var stringMsg_1 = msgObject.getMessageFromCode(message);\r\n                if (stringMsg_1) {\r\n                    this.msgHandlers.forEach(function (el) { return el(stringMsg_1); });\r\n                }\r\n                this.extractMessage();\r\n            }\r\n        }\r\n    };\r\n    Usart.prototype.sendMessage = function (message) {\r\n        var msgObject = new Message_1.default();\r\n        this.queue.push(msgObject.getMessageFromString(message));\r\n        //console.log(\"Pushed to queue\");\r\n        this.queueProcess();\r\n    };\r\n    Usart.prototype.queueProcess = function () {\r\n        var _this = this;\r\n        if (this.serial && !this.inProgress) {\r\n            if (this.queue.length > 0) {\r\n                var msg = buffer_1.default.Buffer.from(this.queue[0]);\r\n                this.queue = this.queue.slice(1);\r\n                this.inProgress = true;\r\n                this.serial.write(msg, function () {\r\n                    _this.inProgress = false;\r\n                    _this.queueProcess();\r\n                });\r\n            }\r\n        }\r\n    };\r\n    return Usart;\r\n}());\r\nexports.default = Usart;\r\n\n\n//# sourceURL=webpack:///./server/usart/Usart.ts?");

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

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ws\");\n\n//# sourceURL=webpack:///external_%22ws%22?");

/***/ })

/******/ });