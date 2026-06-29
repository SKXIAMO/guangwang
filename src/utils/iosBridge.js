import { useNavigate } from 'react-router-dom'
// Send updated users list to iOS
export function sendUsersToIOS(users) {
  try {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.userListUpdate
    ) {
      // 解开 Proxy，保证纯数组对象
      const plainUsers = JSON.parse(JSON.stringify(users))
      window.webkit.messageHandlers.userListUpdate.postMessage({ users: plainUsers })
    } else {
      console.warn('iOS handler userListUpdate not found')
    }
  } catch (e) {
    console.error('sendUsersToIOS error', e)
  }
}

// Send updated posts list to iOS
export function sendPostsToIOS(posts) {
  try {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.postsUpdate
    ) {
      // 解开 Proxy，保证纯数组对象
      const plainPosts = JSON.parse(JSON.stringify(posts))
      window.webkit.messageHandlers.postsUpdate.postMessage({ posts: plainPosts })
    } else {
      console.warn('iOS handler postsUpdate not found')
    }
  } catch (e) {
    console.error('sendPostsToIOS error', e)
  }
}

// Send updated chats list to iOS
export function sendChatsToIOS(chats) {
  try {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.chatsUpdate
    ) {
      // 解开 Proxy，保证纯数组对象
      const plainChats = JSON.parse(JSON.stringify(chats))
      window.webkit.messageHandlers.chatsUpdate.postMessage({ chats: plainChats })
    } else {
      console.warn('iOS handler chatsUpdate not found')
    }
  } catch (e) {
    console.error('sendChatsToIOS error', e)
  }
}

// Send updated messages list to iOS
export function sendMessagesToIOS(messages) {
  try {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.messagesUpdate
    ) {
      // 解开 Proxy，保证纯数组对象
      const plainMessages = JSON.parse(JSON.stringify(messages))
      window.webkit.messageHandlers.messagesUpdate.postMessage({ messages: plainMessages })
    } else {
      console.warn('iOS handler messagesUpdate not found')
    }
  } catch (e) {
    console.error('sendMessagesToIOS error', e)
  }
}

// Send updated comments list to iOS
export function sendCommentsToIOS(comments) {
  try {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.commentsUpdate
    ) {
      // 解开 Proxy，保证纯数组对象
      const plainComments = JSON.parse(JSON.stringify(comments))
      window.webkit.messageHandlers.commentsUpdate.postMessage({ comments: plainComments })
    } else {
      console.warn('iOS handler commentsUpdate not found')
    }
  } catch (e) {
    console.error('sendCommentsToIOS error', e)
  }
}

// Notify iOS that user logged out
export function sendLogoutToIOS(isLogout) {
  try {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.logout) {
      window.webkit.messageHandlers.logout.postMessage({ isLogout: isLogout })
    } else {
      console.warn('iOS handler logout not found')
    }
  } catch (e) {
    console.error('sendLogoutToIOS error', e)
  }
}

// Handle page back or close action

export function useBack() {
  const navigate = useNavigate()

  return () => {
    const idx = window.history.state?.idx ?? 0
    if (idx > 0) {
      navigate(-1)
    } else {
      if (window.webkit?.messageHandlers?.close) {
        window.webkit.messageHandlers.close.postMessage({})
      }
    }
  }
}

// Notify iOS to start in-app purchase
export function sendPaymentToIOS(payKey) {
  try {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.payment) {
      window.webkit.messageHandlers.payment.postMessage({ payKey: payKey })
      // iOS 端回调支付结果会通过 JS 调用 window[callbackName](success)
    } else {
      console.warn('iOS handler payment not found')
    }
  } catch (e) {
    console.error('sendPaymentToIOS error', e)
  }
}
