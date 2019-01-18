import {
	testMapper
} from './opt'

const merge = require('webpack-merge');

const apiMappers = [
	testMapper
]

export const apiMapper = merge(apiMappers);