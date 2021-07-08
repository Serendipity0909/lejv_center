import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import { getToken, clearAll } from '@/utils/myAuth'
import router from "@/router"
// create an axios instance
const service = axios.create({
    // baseURL: 'http://localhost', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// 请求的断点
service.interceptors.request.use(
    config => {
        var token = getToken();
        //判断是否有token,如果有的话就将token存储到请求头里面 如果没有token就在路由导航里面进行判断不让其页面进行跳转
        if (token) {
            config.headers['token'] = token;
        }
        return config
    },
    error => {

        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 返回断点
service.interceptors.response.use(

    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data
        if (res.code === 20002) {
            //清空userInfo和token
            clearAll();
            //跳到登录页面
            router.push("/login");
            Message.error(res.message);
        }
        // if the custom code is not 20000, it is judged as an error.
        return res
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service