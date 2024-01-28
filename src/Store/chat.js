import { create } from 'zustand'

const useChatStore = create((set) => ({
  chats: [],
  setChats: (chats) => set({
    chats: chats,
  }),
  updateChat: (chat) => set(state => {
    const index = state.chats.findIndex(i => i.id === chat.id)
    if (index > -1) {
      state.chats[index] = {
        ...state.chats[index],
        ...chat,
      }
      return { ...state }
    }
    return state
  }),
  addChat: (chat) => set(state => {
    state.chats.push(chat)
    return { ...state }
  }),
}))

export default useChatStore
