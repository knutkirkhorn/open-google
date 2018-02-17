import test from 'ava';
import m from '.';

test('dont throw exception', t => {
    t.notThrows(() => {
        m('Knut Kirkhorn');
    });
});