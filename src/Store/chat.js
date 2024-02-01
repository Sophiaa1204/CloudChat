import { create } from 'zustand'

const useChatStore = create((set) => ({
  chats: [],
  setChats: (chats) => set({
    chats: chats,
  }),
  updateChat: (chat) => set(state => {
    const index = state.chats.findIndex(i => i.id === chat.id)
    if (index > -1) {
      const chats = [...state.chats]
      chats[index] = {
        ...state.chats[index],
        ...chat,
      }
      return { ...state, chats }
    }
    return state
  }),
  addChat: (chat) => set(state => {
    return {
      ...state,
      chats: [...state.chats, chat],
    }
  }),
}))

export default useChatStore
