# H5App (React)

H5 前端项目

## Tech Stack

- **Vite**
- **React** + **React Router**
- **Zustand**
- **antd-mobile**
- **Axios**

## Requirements

- Node.js: 见 `package.json` 的 `engines`

## Scripts

```sh
npm install
```

开发（热更新）：

```sh
npm run dev
```

局域网调试（同一 Wi‑Fi/局域网的手机可访问）：

- 运行 `npm run dev` 后，Vite 会监听 `0.0.0.0` 并输出 `Network` 地址
- 用手机浏览器打开：`http://<你的电脑局域网IP>:4000/`（若端口被占用会自动递增）

常见排查：

- **同一局域网**：手机和电脑必须在同一 Wi‑Fi/网段
- **防火墙**：macOS 防火墙/公司网络可能拦截入站端口
- **端口占用**：若 4000 被占用，Vite 会自动换到 4001/4002...

构建：

```sh
npm run build
```

预览：

```sh
npm run preview
```

Lint / 格式化：

```sh
npm run lint
npm run format
```

## Project Structure (key)

- `index.html`：入口，加载 `src/main.jsx`
- `src/main.jsx`：React 启动入口
- `src/App.jsx`：应用壳（全局 loading/toast）
- `src/router.jsx`：路由表（React Router）
- `src/views-react/`：页面（React）
- `src/components-react/`：通用组件（React）
- `src/stores/`：Zustand stores（保留原有方法名/行为）
- `src/utils/iosBridge.js`：iOS WKWebView bridge
- `src/utils/ossUpload.js`：OSS 上传（图片/视频）

## iOS WKWebView Bridge

项目会在 Web 侧调用 `window.webkit.messageHandlers.*` 与 iOS 通信，典型方法在 `src/utils/iosBridge.js`：

- `sendUsersToIOS(users)`
- `sendPostsToIOS(posts)`
- `sendChatsToIOS(chats)`
- `sendMessagesToIOS(messages)`
- `sendCommentsToIOS(comments)`
- `sendLogoutToIOS(isLogout)`
- `sendPaymentToIOS(payKey)`
- `useBack()`

同时支持 iOS 通过 JS 回调更新当前用户：

- `window.updateCurrentUser(user)`（见 `src/stores/currentUser.js`）

## Data Source

本地开发默认读取 `src/data/*.json`，也支持 iOS 端通过 `window.*` 注入数据：

- `window.currentUser`
- `window.userList`
- `window.postList`
- `window.chatList`
- `window.messageList`
- `window.commentList`
- `window.other`

## Notes

- 如果你本地已起多个 dev server，Vite 可能会自动换端口（例如 4000 → 4001 → 4002）。
- 静态资源在 `src/assets/`，建议在 React 代码里用 `import xxx from '@/assets/xxx.png'` 的方式引用，保证 Vite 能正确打包。
