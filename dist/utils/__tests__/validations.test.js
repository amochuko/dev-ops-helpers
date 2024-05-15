"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../validations");
describe('Validations', function () {
    it('should return true if url is valid', function () {
        var urls = [
            'http://windows.com',
            'https://windows.com',
            'ftp://windows.com',
            'ftps://windows.com',
        ];
        urls.forEach(function (url) {
            var res = (0, validations_1.isValidURL)(url);
            expect(res).toBeTruthy();
        });
    });
    it('should return false  if url is invalid', function () {
        var urls = ['htt://windows', '//windows.com'];
        urls.forEach(function (url) {
            var res = (0, validations_1.isValidURL)(url);
            expect(res).not.toBeTruthy();
        });
    });
});
//# sourceMappingURL=validations.test.js.map