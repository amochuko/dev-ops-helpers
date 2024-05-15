"use strict";
describe('Snapshots', function () {
    it('will check the matcher and pass', function () {
        var user = {
            createdAt: new Date(),
            id: Math.floor(Math.random() * 20),
            name: 'Jack Perry',
        };
        expect(user).toMatchSnapshot({
            createdAt: expect.any(Date),
            id: expect.any(Number),
        });
    });
});
//# sourceMappingURL=snapshot.test.js.map