import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    dialogConfig: {
      type: Object,
      default: () => ({
        businessType: '字段',
        typeClass: '',
        tagClass: '',
        tagText: 'XX',
        customDesc: '',
      }),
    },
  },
  setup(props, { slots }) {
    const getTagClass = computed(() => {
      const target = ['delete-tag']
      if (props.dialogConfig.tagClass) {
        target.push(props.dialogConfig.tagClass)
      }
      return target.join(' ')
    })
    return () => (
      <div class="fy-dialog-delete">
        <div>
          确认删除
          <span class={props.dialogConfig.typeClass}>
            {props.dialogConfig.businessType
              ? props.dialogConfig.businessType
              : ''}
            {slots.default && slots.default()}
          </span>
          <el-tag class={getTagClass.value} type="danger">
            {props.dialogConfig.tagText}
          </el-tag>
          吗？
        </div>
        <div class="delete-warn">
          {props.dialogConfig.customDesc ? (
            <span>{props.dialogConfig.customDesc}</span>
          ) : (
            <span>
              <span>{props.dialogConfig.businessType}</span>删除后不可恢复。
            </span>
          )}
        </div>
      </div>
    )
  },
})
