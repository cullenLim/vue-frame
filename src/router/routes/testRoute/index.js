import {
	_load
} from '@/router/componentload'

const testRoute = [{
	path: '/test',
	component: _load('vuextest1'),
	name: "测试vuex",
	// children:[]
}];

export {
	testRoute
};