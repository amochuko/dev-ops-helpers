"use strict";
var forEach = require('../app').forEach;
var b = 42;
var mockCallback = jest.fn(function (x, i) {
    mockCallback.mockName("mockCallback-".concat(i));
    return x + b;
});
describe.skip('Mocks', function () {
    var arr = [0, 1, 2, 3];
    test('forEach mock function', function () {
        forEach(arr, mockCallback);
        // The mock function was called twice
        expect(mockCallback.mock.calls).toHaveLength(arr.length);
        console.log(mockCallback.mock.calls.length);
        // The first argument of the first call to the function was 0
        expect(mockCallback.mock.calls[0][0]).toBe(0);
        // The first argument of the second call to the function was 1
        expect(mockCallback.mock.calls[1][0]).toBe(1);
        // The return value of the first call to the function was 42
        expect(mockCallback.mock.results[0].value).toBe(b);
        expect(mockCallback.mock.results[1].value).toBe(b + 1);
        // This mock was instantiated 4 times
        expect(mockCallback.mock.instances.length).toBe(4);
        console.log(mockCallback.mock.instances);
        // The object returned by the first instantiation of this function
        // had a `name` property whose value was set to 'mockCallback'
        expect(mockCallback.mock.instances[0].name).toBe('mockCallback-0');
    });
    test('.mock property', function () {
        var myMock1 = jest.fn();
        var a = new myMock1();
        console.log(myMock1.mock.instances);
        var myMock2 = jest.fn();
        var b = {};
        var bound = myMock2.bind(b);
        bound();
        console.log(myMock2.mock.contexts);
        console.log(myMock1.mock.calls);
    });
});
describe('mock return values', function () {
    var myMock = jest.fn();
    //   console.log(myMock());
    myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce('todo')
        .mockReturnValue('greatness');
    //   console.log(myMock(), myMock(), myMock(), myMock());
});
// global.fetch = jest.fn(() =>
//   Promise.resolve({ json: () => Promise.resolve({ user: [{ name: "Bob" }] }) })
// );
// describe("mocking Modules", () => {
// beforeEach(()=> {fetch.mockClear()})
//   jest.mock('fetch');
//   test('should fect users', ()=>{
//     const user = [{name:'Bob'}]
//     // fetch.get.
//   })
// });
describe('Mock Implementation', function () {
    describe('jest.fn', function () {
        var myMockFn = jest.fn(function (cb) { return cb(null, true); });
        myMockFn(function (err, val) { return console.log(val); });
    });
    describe.only('mockImplementation', function () {
        jest.mock('../foo'); // this happens automatically with automocking
        var foo = require('../foo');
        test('foo mocking', function () {
            foo.mockImplementation(function () { return 42; });
            expect(foo()).toBe(42);
        });
        test('mockImplementationOnce', function () {
            // When you need to recreate a complex behavior of a mock function such that multiple function calls produce different results, use the mockImplementationOnce method:
            var mockFn = jest
                .fn()
                .mockImplementationOnce(function (cb) { return cb(null, true); })
                .mockImplementationOnce(function (cb) { return cb(null, false); })
                .mockImplementationOnce(function () { return 'third call'; })
                .mockImplementationOnce(function () { return 'forth call'; })
                .mockName('add42');
            expect(mockFn(function (err, val) { return val; })).toBeTruthy();
            expect(mockFn(function (err, val) { return val; })).toBeFalsy();
            mockFn();
            mockFn();
            mockFn(function (err, val) { return val; });
            mockFn();
            mockFn();
            // The mock function was called at least once
            expect(mockFn).toHaveBeenCalledTimes(mockFn.mock.calls.length);
            // The mock fn was called at least once with the specified args
            //   expect(mockFn).toHaveBeenCalledWith(
            //     (cb) => cb(null, true),
            //     (cb) => cb(null, false)
            //   );
            // The last call to the mock fn was called with the specified args
            expect(mockFn).toHaveBeenLastCalledWith('forth call');
            // All calls and the name of the mock is written as snapshot
            expect(mockFn).toMatchSnapshot();
            // The mock fn was called at least once
            expect(mockFn.mock.calls.length).toBeGreaterThan(0);
            // The mock fn was called at least once with the specified args
            expect(mockFn.mock.calls).toContainEqual(['third call', 'forth call']);
            // The last call to the mock fn was called with the specified args
            expect(mockFn.mock.calls[mockFn.mock.calls.length - 1]).toEqual([
                'third call',
                'forth call',
            ]);
        });
    });
});
//# sourceMappingURL=mocks.test.js.map