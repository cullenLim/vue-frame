import axiosApi from './axiosApi'
import {
	apiMapper
} from '@/apiMapper'
import qs from 'qs'

export default {
	get(pathAlias, data) {
		return new Promise(function(resolve, reject) {
			axiosApi.get(apiMapper[pathAlias], data).then(response => {
				resolve(response)
			}).catch(error => {
				reject(error);
			})
		})
	},
	post(pathAlias, data) {
		return new Promise(function(resolve, reject) {
			axiosApi.post(apiMapper[pathAlias], qs.stringify(data)).then(response => {
				resolve(response)
			}).catch(error => {
				reject(error);
			})
		})
	}
}