"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fillUntil(endValue, callback, initial) {
    let value = initial;
    const ret = [];
    while (true) {
        // eslint-disable-line no-constant-condition
        value = callback(value);
        if (value === endValue) {
            return ret;
        }
        ret.push(value);
    }
}
exports.fillUntil = fillUntil;
