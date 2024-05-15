"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function request(url) {
    return new Promise(function (resolve, _reject) {
        var userId = parseInt(url.slice('/users/'.length), 10);
        console.log('userId:', userId);
        process.nextTick(function () {
            return resolve('users[userId]');
        });
    });
}
exports.default = request;
//# sourceMappingURL=request.js.map