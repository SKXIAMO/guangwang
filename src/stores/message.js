import messagesData from '../data/message.json'
import { sendMessagesToIOS } from '@/utils/iosBridge'
import { create } from 'zustand'

export const useMessagesStore = create((set, get) => ({
  message: window.messageList || messagesData,

  getMessagesByChatId: (chatId) => {
    const { message } = get()
    return message.filter((m) => m.chatId === chatId)
  },

  addMessage: (newMessage) => {
    const { message } = get()
    const next = [...message, newMessage]
    set({ message: next })
    window.messageList = next
    sendMessagesToIOS(next)
  },
}))