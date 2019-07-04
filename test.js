import test from 'ava';
import openGoogle from '.';

test('dont throw exception', t => {
    t.notThrows(() => {
        openGoogle('Knut Kirkhorn');
    });
});