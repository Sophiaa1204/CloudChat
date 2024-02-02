import { create } from 'zustand'

const defaultInfo = {
  BotId: '',
  id: '',
  avatar: 'https://aichatdb.blob.core.windows.net/attachment/defaultAvatar.png',
  description: '',
  isPublic: '',
  prompt: '',
  title: '',
  ownerId: '',
  userId: '',
}
const useBotStore = create((set) => ({
  bots: [],
  info: defaultInfo,
  addBot: (bot) => set(state => {
    return {
      ...state,
      bots: [...state.bots, bot],
    }
  }),
  updateBot: (bot) => set(state => {
    const index = state.bots.findIndex(i => i.id === bot.id)
    if (index > -1) {
      const bots = [...state.bots]
      bots[index] = {
        ...state.bots[index],
        ...bot,
      }
      return { ...state, bots }
    }
    return state
  }),
  deleteBot: (id) => set(state => {
    return {
      ...state,
      bots: state.bots.filter(i => i.id !== id),
    }
  }),
  setBots: (bots) => set({
    bots: bots,
  }),
  setInfo: (info) => set({
    info: info,
  }),
  setAvatar: (avatar) => set(state => {
    return {
      ...state,
      info: {
        ...state.info,
        avatar: avatar,
      },
    }
  }),
  setPrompt: (prompt) => set(state => {
    return {
      ...state,
      info: {
        ...state.info,
        prompt: prompt,
      },
    }
  }),
  setTitle: (title) => set(state => {
    return {
      ...state,
      info: {
        ...state.info,
        title: title,
      },
    }
  }),
  setDescription: (description) => set(state => {
    return {
      ...state,
      info: {
        ...state.info,
        description: description,
      },
    }
  }),
  setPublic: (isPublic) => set(state => {
    return {
      ...state,
      info: {
        ...state.info,
        isPublic: isPublic,
      },
    }
  }),
  resetInfo: () => set({
    info: defaultInfo,
  }),
}))

export default useBotStore
