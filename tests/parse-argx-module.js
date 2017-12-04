const assert = require('assert');
const parseArgx = require('../parse-argx');


describe('parse-argx module', () => {
    it('should export a function', () => {
        assert.equal(typeof parseArgx, 'function');
    });
});
