"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
function NumberInput(props) {
    return React.createElement("div", { className: 'setting__input' },
        React.createElement("button", { onClick: function () { return props.decrement(props.value); }, className: 'btn-outline-dark setting__inputButton' }, "-"),
        React.createElement("span", { className: 'setting__inputValue' }, props.value),
        React.createElement("button", { onClick: function () { return props.increment(props.value); }, className: 'btn-outline-dark setting__inputButton' }, "+"));
}
exports.default = NumberInput;
;
//# sourceMappingURL=NumberInput.js.map