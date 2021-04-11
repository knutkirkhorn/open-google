import {expectType} from 'tsd';
import openGoogle = require('.');

expectType<void>(openGoogle('Knut Kirkhorn'));
