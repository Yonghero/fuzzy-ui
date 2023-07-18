import { ref } from 'vue'

export function useUnfold() {
  const unfold = ref(false)

  return {
    unfold,
    // eslint-disable-next-line no-return-assign
    toggle: () => (unfold.value = !unfold.value),
  }
}
