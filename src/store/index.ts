import { reactive } from 'vue'
export default function rootStore() {
  const state = reactive({
    count: 0,
  })
  return {
    get count() {
      return state.count
    },
    increment() {
      state.count += 1
    },
    decrement() {
      state.count -= 1
    },
  }
}
type RootStore = ReturnType<typeof rootStore>

import { InjectionKey } from 'vue'

export const RootStoreKey: InjectionKey<RootStore> = Symbol('rootStore')
