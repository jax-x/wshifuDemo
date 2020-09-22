import axios from 'axios'
import qs from 'qs'

const getRequest = (url, data) => axios.get(url, { params: data })
const postRequest = (url, data) => axios.post(url, data)

axios.interceptors.request.use(config => {
    config.data = qs.stringify(config.data); 
    return config
})

export default {
    postRequest,
    getRequest
}