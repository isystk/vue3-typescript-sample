import { reactive } from 'vue'
export default function store() {
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
export type Store = ReturnType<typeof store>
