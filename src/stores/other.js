import otherData from '../data/other.json'
import { create } from 'zustand'

export const useOtherStore = create(() => ({
  other: window.other || otherData,
  getTagByIndex: (index) => otherData.postTheme[index],
}))