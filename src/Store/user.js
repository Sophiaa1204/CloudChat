import { create } from 'zustand'

const useUserStore = create((set) => ({
  token: 'token',
}))

export default useUserStore
