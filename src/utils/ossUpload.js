import OSS from 'ali-oss'
import axios from 'axios'

let ossClient = null
let cdnUrl = ''

/**
 * 获取临时 STS 凭证
 */
async function getOssSts() {
  const { data } = await axios.get('https://api.wouldbeauty.com/sts/getkey')
  if (data.code !== '0000') throw new Error('获取 STS 失败')
  return data.result
}

/**
 * 初始化 OSS 客户端，带自动刷新 STS Token
 */
async function initOssClient() {
  const sts = await getOssSts()
  const [, endpoint] = sts.host.split(`${sts.bucket}.`)
  cdnUrl = sts.cdnUrl
  ossClient = new OSS({
    accessKeyId: sts.AccessKeyId,
    accessKeySecret: sts.AccessKeySecret,
    stsToken: sts.SecurityToken,
    bucket: sts.bucket,
    endpoint,
    refreshSTSToken: async () => {
      const { data } = await axios.get('https://api.wouldbeauty.com/sts/getkey')
      if (data.code !== '0000') throw new Error('刷新 STS 失败')
      return {
        accessKeyId: data.result.AccessKeyId,
        accessKeySecret: data.result.AccessKeySecret,
        stsToken: data.result.SecurityToken,
      }
    },
    refreshSTSTokenInterval: 900000, // 15分钟自动刷新一次，可根据需要调整
  })
}

/**
 * 上传单张图片
 * @param {File} file
 * @param {string} folder
 * @returns {Promise<string>} 返回阿里云网络地址
 */
export async function uploadSingleImage(file, folder = 'posts') {
  if (!ossClient) await initOssClient()

  const filename = `${folder}/${Date.now()}-${file.name}`
  await ossClient.put(filename, file)

  return `${cdnUrl}/template_development/${filename.split('/').pop()}`
}

/**
 * 上传多张图片
 * @param {File[]} files
 * @param {string} folder
 * @returns {Promise<string[]>} 返回阿里云网络地址数组
 */
export async function uploadMultipleImages(files, folder = 'posts') {
  const promises = files.map((file) => uploadSingleImage(file, folder))
  return Promise.all(promises)
}

/**
 * 上传视频文件
 * @param {File} file
 * @param {string} folder
 * @returns {Promise<string>} 返回阿里云网络地址
 */
export async function uploadVideo(file, folder = 'videos') {
  if (!ossClient) await initOssClient()

  const filename = `${folder}/${Date.now()}-${file.name}`
  await ossClient.put(filename, file)

  return `${cdnUrl}/template_development/${filename.split('/').pop()}`
}
