import postData from '../data/posts.json' // 本地 JSON
import { sendPostsToIOS } from '@/utils/iosBridge'
import { create } from 'zustand'

export const usePostStore = create((set, get) => ({
  posts: window.postList || postData,

  getPostById: (postId) => {
    const { posts } = get()
    return posts.find((p) => p.dynamicId === String(postId))
  },

  getPostsByUserId: (userId) => {
    const { posts } = get()
    return posts.filter((p) => p.userId === String(userId))
  },

  updatePostById: (postId, newData) => {
    const { posts } = get()
    const next = posts.map((p) => (p.dynamicId === String(postId) ? { ...p, ...newData } : p))
    set({ posts: next })
    window.postList = next
    sendPostsToIOS(next)
  },

  addPost: (newPost) => {
    const { posts } = get()
    const next = [...posts, newPost]
    set({ posts: next })
    window.postList = next
    sendPostsToIOS(next)
  },
}))
