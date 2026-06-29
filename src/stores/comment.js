import commentsData from '../data/comments.json'
import { useCurrentUserStore } from './currentUser'
import { sendCommentsToIOS } from '@/utils/iosBridge'
import { create } from 'zustand'

export const useCommentsStore = create((set, get) => ({
  comment: window.commentList || commentsData,

  getCommentsById: (postId) => {
    const { comment } = get()
    const { currentUser } = useCurrentUserStore.getState()
    const blockList = currentUser?.blockList || []

    const filtered = comment.filter((c) => c.dynamicId == postId && !blockList.includes(c.userId))
    return filtered.reverse()
  },

  addComment: (newComment) => {
    const { comment } = get()
    const next = [...comment, newComment]
    set({ comment: next })
    window.commentList = next
    sendCommentsToIOS(next)
  },
}))
