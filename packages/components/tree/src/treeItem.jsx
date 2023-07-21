export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({
        data: [],
        node: {},
      }),
    },
  },
  emits: ['click'],
})
