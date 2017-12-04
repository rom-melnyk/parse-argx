const assert = require('assert');
const parseArgx = require('../index');

const DEFAULT_RESULT = {
    isValid: false,
    namedArgs: {},
    anonymousArgs: []
};


describe('parse-argx module', () => {
    it('should export a function', () => {
        assert.ok(typeof parseArgx === 'function');
    });
    it('should not fail without params', () => {
        assert.deepEqual(parseArgx(), DEFAULT_RESULT);
    });
});
