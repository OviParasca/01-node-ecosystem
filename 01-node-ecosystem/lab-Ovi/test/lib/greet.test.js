
const greet = require('../../lib/greet.js');
const assert = require('assert');

let nameMessage = greet.sayHello("World");
assert.strictEqual(nameMessage, 'Hello World', 'Does Not Match');

nameMessage = greet.sayHello(123);
assert.strictEqual(nameMessage, null, 'Does Not Match');