import Fly from 'flyio/dist/npm/wx'
const request = new Fly()
request.config = {
  baseURL: process.env.BASE_URL, // api的base_url
  timeout: 300000 // 请求超时时间
}
// 添加请求拦截器
request.interceptors.request.use((req) => {
  return req
})
// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
request.interceptors.response.use(
  res => {
    // 只将请求结果的data字段返回
    return res.data
  }, error => {
    // 发生网络错误后会走到这里
    console.log('err' + error)
    return Promise.resolve(error)
  }
)
export default request
