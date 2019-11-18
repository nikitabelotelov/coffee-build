"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
require("./Panel.less");
var react_router_dom_1 = require("react-router-dom");
var Root_1 = __importDefault(require("./Root"));
var SettingsIndex_1 = __importDefault(require("./SettingsIndex"));
var Profile_1 = __importDefault(require("./Profile"));
var Update_1 = __importDefault(require("./Update"));
var ParametersSettings_1 = __importDefault(require("./ParametersSettings"));
var Steam_1 = __importDefault(require("./Parameters/Steam"));
var ColorHot_1 = __importDefault(require("./Colors/ColorHot"));
var Admin_1 = __importDefault(require("./Admin"));
function Panel() {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Root_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/admin", component: Admin_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings", component: SettingsIndex_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/profile", component: Profile_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/color", component: ColorHot_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/update", component: Update_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/profile/hand", component: ParametersSettings_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/profile/hand/steam", component: Steam_1.default })));
}
exports.Panel = Panel;
//# sourceMappingURL=Panel.js.map