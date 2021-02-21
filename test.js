const test = require('ava');
const openGoogle = require('.');

test('dont throw exception', t => {
    t.notThrows(() => {
        openGoogle('Knut Kirkhorn');
    });
});
