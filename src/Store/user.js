import { create } from 'zustand'

const useUserStore = create((set) => ({
  email: null,
  id: null,
  info: {},
  chat: [],
  set: (data) => set(data),
}))

export default useUserStore
