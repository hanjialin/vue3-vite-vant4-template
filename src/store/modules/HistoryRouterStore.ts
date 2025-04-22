import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHistoryRouterStore = defineStore('historyRouter', {
  state: () => {
    return {
      historyRouter: ref<string>('/')
    }
  },
  actions: {
    setHistoryRouter(path: string) {
      this.historyRouter = path
    }
  },
  getters: {
    getHistoryRouter(): string {
      return this.historyRouter
    }
  },
  persist: {
    storage: sessionStorage
  }
})
