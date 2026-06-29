import { create } from 'zustand'
import currentUserData from '../data/currentUser.json'

export const useCurrentUserStore = create((set) => ({
  currentUser: window.currentUser || currentUserData,
  setCurrentUser: (user) => {
    set({ currentUser: user })
    window.currentUser = user
  },
}))

// 兼容 iOS 侧通过 JS 回调更新当前用户
window.updateCurrentUser = function (user) {
  const { setCurrentUser } = useCurrentUserStore.getState()
  setCurrentUser(user)
}
 