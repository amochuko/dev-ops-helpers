"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
function request(url) {
    return new Promise(function (resolve) {
        // This is an example of an http request, for example to fetch user data from an API.
        // This module is being mocked in __mocks_/request.ts
        http_1.default.get({ path: url }, function (res) {
            var data = '';
            res.on('data', function (_data) { return (data += _data); });
            res.on('end', function () { return resolve(data); });
        });
    });
}
exports.default = request;
//# sourceMappingURL=request.js.map