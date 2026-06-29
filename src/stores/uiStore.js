import { create } from 'zustand'

export const useUIStore = create((set, get) => ({
  loading: false,
  toastMessage: '',
  showComment: false,

  showLoading: () => set({ loading: true }),
  hideLoading: () => set({ loading: false }),

  showToast: (message, duration = 1500) => {
    set({ toastMessage: message })
    const { _toastTimer } = get()
    if (_toastTimer) clearTimeout(_toastTimer)
    const timer = setTimeout(() => set({ toastMessage: '' }), duration)
    set({ _toastTimer: timer })
  },

  openComment: () => set({ showComment: true }),
  closeComment: () => set({ showComment: false }),

  // internal
  _toastTimer: null,
}))

