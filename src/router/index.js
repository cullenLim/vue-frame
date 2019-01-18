import Vue from 'vue'
import Router from 'vue-router'
import {
	_load
} from '@/router/componentload'
// import HelloWorld from '@/components/HelloWorld'
import {
	testRoute
} from '@/router/routes'

Vue.use(Router)

let routes = [
	...testRoute
]

export {
	routes
}

export default new Router({
	routes
})