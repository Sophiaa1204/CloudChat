import { create } from 'zustand'

const useContentStore = create((set) => ({
  id: null,
  model: null,
  messages: [],
  key: null,
  input: '',
  isTyping: false,
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
  setModel: (data) => set({
    model: data,
  }),
  setIsTyping: (data) => set({
    isTyping: data,
  }),
  setMessages: (data) => set({
    messages: data,
  }),
  setInput: (data) => set({
    input: data,
  }),
  setKey: (data) => set({
    key: data,
  }),
  setId: (data) => set({
    id: data,
  }),
}))

export default useContentStore
