import { create } from 'zustand'
import * as uuid from 'uuid'

const useContentStore = create((set) => ({
  id: null,
  model: null,
  messages: [],
  key: null,
  input: '',
  isTyping: false,
  setInit: () => set({
    id: uuid.v4(),
    model: 'gpt-3.5-turbo',
    messages: [],
    isTyping: false,
    input: '',
  }),
  setInfo: (data) => set({
    ...data,
  }),
  setModel: (data) => set({
    model: data || 'gpt-3.5-turbo',
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
