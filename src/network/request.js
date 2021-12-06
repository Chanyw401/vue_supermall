import axios from 'axios'

// ES6 Promise的封装
export function request(options) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例对象
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 20000
    })

    // 过滤器(拦截器)
//  1.请求拦截的作用:
    instance.interceptors.request.use(config =>{
      return config
    },err =>{console.log(err);})

//  2.相应拦截:
    instance.interceptors.response.use(res => {
      return res.data
    },err =>{console.log(err);}),
      // 通过实例发送网络请求
      instance(options)
        .then(res => {
          resolve(res)
        }).catch(err => {
        reject(err)
      })
  })
}