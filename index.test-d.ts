import {expectType} from 'tsd';
import openGoogle from './index.js';

expectType<void>(openGoogle('Knut Kirkhorn'));
