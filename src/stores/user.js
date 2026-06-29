import usersData from '../data/users.json'
import { useCurrentUserStore } from './currentUser'
import { sendUsersToIOS } from '@/utils/iosBridge'
import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
  users: window.userList || usersData,

  getUserById: (id) => {
    const { users } = get()
    return users.find((u) => u.userId === id)
  },

  getOtherUserInChat: (chatUserIds) => {
    const { currentUser } = useCurrentUserStore.getState()
    const myId = currentUser?.userId
    const otherId = (chatUserIds || []).find((id) => id !== myId)
    return get().getUserById(otherId)
  },

  updateUser: (userId, newData) => {
    const { users } = get()
    const next = users.map((u) => (u.userId === userId ? { ...u, ...newData } : u))
    set({ users: next })
    window.userList = next
    console.log(next)

    // 同步 currentUser
    const { currentUser, setCurrentUser } = useCurrentUserStore.getState()
    if (currentUser?.userId === userId) {
      setCurrentUser({ ...currentUser, ...newData })
    }

    sendUsersToIOS(next)
  },
}))
