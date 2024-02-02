import axios, { InternalAxiosRequestConfig, AxiosResponse} from 'axios'

const service = axios.create({
    baseURL: 'http://124.223.161.17:3015'
})
service.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    return config
})

service.interceptors.response.use((response:AxiosResponse) => {
    return response
},(err :any) => {
    return Promise.reject(err);
})

export default service