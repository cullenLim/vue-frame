import axios from 'axios'
import qs from 'qs'

// 添加一个请求拦截器
axios.interceptors.request.use(config => {
	return config;
}, error => {
	return Promise.reject(error)
});

// 添加一个响应拦截器
axios.interceptors.response.use(response => {
	// Do something with response data
	return response;
}, error => {
	// Do something with response error
	return Promise.reject(error);
});


// axios全局修改的变量
// 请求的url的基础url，将和url拼接请求
axios.defaults.baseURL = '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let get = async function(url, data) {
	let option = {
		url: url,
		method: 'get',
		data: data,
		timeout: 2000,
		// `headers` are custom headers to be sent
		// headers: {'X-Requested-With': 'XMLHttpRequest'},
		// 是否携带cookie信息
		withCredentials: false,
		// 响应格式
		// 可选项 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
		responseType: 'json',
		// 'proxy' defines the hostname and port of the proxy server
		// Use `false` to disable proxies, ignoring environment variables.
		// `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
		// supplies credentials.
		// This will set an `Proxy-Authorization` header, overwriting any existing
		// `Proxy-Authorization` custom headers you have set using `headers`.
		// 代理
		// proxy: {
		// 	host: '127.0.0.1',
		// 	port: 9000,
		// 	auth: {
		// 		username: 'mikeymike',
		// 		password: 'rapunz3l'
		// 	}
		// },
	};
	try {
		return await axios(option);
	} catch (e) {
		return Promise.reject(e);
	}
}

let post = async function(url, data) {
	let option = {
		url: url,
		method: 'post',
		data: data,
		timeout: 2000,
		// `headers` are custom headers to be sent
		// headers: {'X-Requested-With': 'XMLHttpRequest'},
		// 是否携带cookie信息
		withCredentials: false,
		// 响应格式
		// 可选项 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
		responseType: 'json',
		// 'proxy' defines the hostname and port of the proxy server
		// Use `false` to disable proxies, ignoring environment variables.
		// `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
		// supplies credentials.
		// This will set an `Proxy-Authorization` header, overwriting any existing
		// `Proxy-Authorization` custom headers you have set using `headers`.
		// 代理
		// proxy: {
		// 	host: '127.0.0.1',
		// 	port: 9000,
		// 	auth: {
		// 		username: 'mikeymike',
		// 		password: 'rapunz3l'
		// 	}
		// },
	};
	try {
		return await axios(option);
	} catch (e) {
		return Promise.reject(e);
	}
}

export default {
	get: get,
	post: post
}