"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
describe('sum module', function () {
    test('adds 1 + 2 to equal 3', function () {
        expect((0, __1.sum)(1, 2)).toBe(3);
    });
    it('returns true', function () {
        expect(__1.isObj).toBeTruthy();
    });
    test('should add 1 + 2', function () {
        expect((0, __1.sum)(1, 2)).toBe(3);
    });
    test('is Object', function () {
        expect(__1.obj).toEqual({ one: 1 });
    });
    it('adding positive numbers is not zero', function () {
        for (var a = 1; a < 10; a++) {
            for (var b_1 = 1; b_1 < 10; b_1++) {
                expect(a + b_1).not.toBe(0);
            }
        }
    });
    test('null', function () {
        var n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });
    test('zero', function () {
        var z = 0;
        expect(z).toBeFalsy();
        expect(z).not.toBeNull();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeDefined();
    });
});
describe('String', function () {
    test('there is no I in tema', function () {
        expect('team').not.toMatch(/I/);
    });
    test('but there is "stop" in Christoph', function () {
        expect('Christop').toMatch(/stop/);
    });
});
describe('Array & iterables', function () {
    var shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
    ];
    test('the shopping list has milk on it', function () {
        expect(shoppingList).toContain('milk');
        expect(new Set(shoppingList)).toContain('milk');
    });
});
describe('Exceptions', function () {
    function compileAndroidCode() {
        throw new Error('you are using the wrong JDK!');
    }
    it('compiling android goes as expected', function () {
        expect(function () { return compileAndroidCode(); }).toThrow();
        expect(function () { return compileAndroidCode(); }).toThrow(Error);
        // You can also use a string that must be contained in the error message or a regexp
        expect(function () { return compileAndroidCode(); }).toThrow('you are using the wrong JDK!');
        expect(function () { return compileAndroidCode(); }).toThrow(/JDK/);
        // Or you can match an exact error message using a regexp like below
        // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
        expect(function () { return compileAndroidCode(); }).toThrow(/^you are using the wrong JDK!$/); // Test pass
    });
});
describe('Asynchronous code', function () {
    var fetchData = function () {
        return new Promise(function (res, rej) {
            res('hello');
        });
    };
    var fetchDataWithCallback = function (cb) {
        cb('peanut butter');
    };
    test('the data is hello', function () {
        return fetchData().then(function (d) {
            expect(d).toBe('hello');
        });
    });
    test('async await', function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    expect.assertions(1);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetchData()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    expect(err_1).toMatch('err');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    test('the fetch fails with an error', function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    expect.assertions(1);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetchData()];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    err_2 = _a.sent();
                    return [2 /*return*/, expect(err_2).toMatch('err')];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    test('testing a callback', function (done) {
        function cb(err, data) {
            console.log('inside the callback fn...');
            if (err) {
                done(err);
                return;
            }
            try {
                expect(data).toBe('peanut butter');
                done();
            }
            catch (err) {
                done(err);
            }
        }
        fetchDataWithCallback(cb);
    });
});
//# sourceMappingURL=sum.test.js.map