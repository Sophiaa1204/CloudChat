import { create } from 'zustand'

const useChatStore = create((set) => ({
  id: null,
  model: null,
  messages: [],
  input: '',
  isTyping: true,
  setInit: () => set({
    id: null,
    model: null,
    messages: [],
    isTyping: false,
    input: '',
  }),
  setInfo: (data) => set({
    ...data,
  }),
  setTyping: (data) => set({
    isTyping: data,
  }),
  setMessages: (data) => set({
    messages: data,
  }),
  setInput: (data) => set({
    input: data,
  }),
}))

export default useChatStore
