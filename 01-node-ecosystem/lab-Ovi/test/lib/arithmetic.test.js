
const arithmetic = require('../../lib/arithmetic.js');
const assert = require('assert');

assert.strictEqual(arithmetic.add(2, 3), 5, 'Sum is not correct');
assert.strictEqual(arithmetic.add(2, 'o'), null, 'Addition is not valid');

assert.strictEqual(arithmetic.sub(5, 2), 3, 'Sum is not correct');
assert.strictEqual(arithmetic.sub(5, 'O'), null, 'Subtract is not valid');
