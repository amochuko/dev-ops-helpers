"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidURL = void 0;
/**
 * The function validates the URL
 * @param {*} url path to the file
 * @returns boolean
 */
function isValidURL(url) {
    var urlRegex = /^(https?|ftps?|sftp?):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(url);
}
exports.isValidURL = isValidURL;
//# sourceMappingURL=validations.js.map