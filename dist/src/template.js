"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_a) {
    var body = _a.body, title = _a.title, serialized = _a.serialized;
    return "\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <meta charset=\"UTF-8\">\n          <title>" + title + "</title>\n          <meta name=\"viewport\" content=\"width=device-width\">\n          <link rel=\"stylesheet\" href=\"/dist/index.css\" />\n        </head>\n      <body>\n        <div id=\"main\">" + body + "</div>\n        <script src=\"/node_modules/react/umd/react.development.js\"></script>\n        <script src=\"/node_modules/react-dom/umd/react-dom.development.js\"></script>\n        <script>\n          window.__SERIALIZED_DATA = " + serialized + ";\n        </script>\n        <script src=\"/dist/index.js\"></script>\n      \n      </body>\n      </html>\n    ";
});
//# sourceMappingURL=template.js.map