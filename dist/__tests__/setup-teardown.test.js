"use strict";
beforeAll(function () { return console.log('1 - beforeAll'); });
afterAll(function () { return console.log('1 - afterAll'); });
beforeEach(function () { return console.log('1 - beforeEach'); });
afterEach(function () { return console.log('1 - afterEach'); });
test('first call', function () { return console.log('1 - test'); });
describe('Scoped', function () {
    console.log();
    beforeAll(function () { return console.log('2 - beforeAll'); });
    afterAll(function () { return console.log('2 - afterAll'); });
    beforeEach(function () { return console.log('2 - beforeEach'); });
    afterEach(function () { return console.log('2 - afterEach'); });
    test.only('second call', function () { return console.log('2 - test'); });
});
//# sourceMappingURL=setup-teardown.test.js.map