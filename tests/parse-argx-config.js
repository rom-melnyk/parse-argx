const assert = require('assert');
const parseArgx = require('../index');


describe('parse-argx config', () => {
    it('should ignore the config entity without "name"', () => {
        const { namedArgs } = parseArgx([{}], [ '-a -b' ]);
        assert.deepEqual(namedArgs, {});
    });
    // it('should ignore the config entity without "name"', () => {
    //     const { namedArgs } = parseArgx([{ name: '-a' }], [ '-a -b' ]);
    //     assert.deepEqual(namedArgs, { '-a': true });
    // });
});
