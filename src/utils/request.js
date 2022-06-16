import axios from 'axios' 

const instance = axios.create({
  baseURL: '/development',
  timeout: 1000 * 5
})

// 请求拦截
instance.interceptors.request.use(
  config=>{
    console.log(config);
    return config
  }, error => {
    return Promise.reject(error)
  }
)

// 请求响应
instance.interceptors.response.use(
  config=>{
    const data = config.data
    return data
  }, error => {
    return Promise.reject(error)
  }
)

export default instance
