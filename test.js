// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import openGoogle from './index.js';

test('dont throw exception', t => {
	t.notThrows(() => {
		openGoogle('Knut Kirkhorn');
	});
});
