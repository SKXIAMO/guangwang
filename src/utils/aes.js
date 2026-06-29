import CryptoJS from 'crypto-js'

const KEY = CryptoJS.enc.Utf8.parse('518486he8pzgbjsk')
const IV = CryptoJS.enc.Utf8.parse('614436p28qzhkjsl')

// 加密
export function encryptAES(data) {
    const text = typeof data === 'string' ? data : JSON.stringify(data)

    const encrypted = CryptoJS.AES.encrypt(
        CryptoJS.enc.Utf8.parse(text),
        KEY,
        {
            iv: IV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }
    )

    // 转 HEX
    return encrypted.ciphertext.toString(CryptoJS.enc.Hex)
}

// 解密
export function decryptAES(hexStr) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(hexStr)

    const base64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr)

    const decrypted = CryptoJS.AES.decrypt(base64Str, KEY, {
        iv: IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })

    return decrypted.toString(CryptoJS.enc.Utf8)
}