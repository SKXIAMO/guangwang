import axios from 'axios'
import { encryptAES } from '@/utils/aes'

const aiClient = axios.create({
    baseURL: 'https://opi.3o2g4cpj.link',
    timeout: 30000
})

// 请求拦截
aiClient.interceptors.request.use(config => {

    const body = config.data || {}

    // AES加密
    const encrypted = encryptAES(body)

    config.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        appVersion: '1.0.0',
        deviceNo: 'pwjyYtdVTqNHAVSMyp44332211',
        pushToken: '',
        loginToken: '',
        appId: '44332211'
    }

    // ⚠️ 阻止 axios 自动 JSON 序列化
    config.transformRequest = [(data) => data]

    config.data = encrypted

    return config
})

export default aiClient