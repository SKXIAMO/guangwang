import chatsData from '../data/chat.json'
import { sendChatsToIOS } from '@/utils/iosBridge'
import { create } from 'zustand'

export const useChatsStore = create((set, get) => ({
  chat: window.chatList || chatsData,

  getChatById: (chatId) => {
    const { chat } = get()
    return chat.find((c) => c.chatId === chatId)
  },

  updateChat: (chatId, updatedData) => {
    const { chat } = get()
    const next = chat.map((c) =>
      c.chatId === chatId ? { ...c, ...updatedData } : c,
    )
    set({ chat: next })
    window.chatList = next
    sendChatsToIOS(next)
  },

  addChat: (newChat) => {
    const { chat } = get()
    const next = [...chat, newChat]
    set({ chat: next })
    window.chatList = next
    sendChatsToIOS(next)
  },
}))