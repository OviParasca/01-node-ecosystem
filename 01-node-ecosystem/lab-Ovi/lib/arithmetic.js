'use strict';

module.exports = exports = {};

exports.add = (number1, number2) => {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        return null;
    }

    return (number1+number2);
};

exports.sub = (number1, number2) => {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        return null;
    }

    return (number1-number2);
};

