'use strict';

module.exports = exports = {};

exports.sayHello = (name) => {
    if (typeof name !== 'string' || name.length === 0) {
        return null;
    }

    return `Hello ${name}`;
};