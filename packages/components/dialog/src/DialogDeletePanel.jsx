import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    dialogConfig: {
      type: Object,
      default: () => ({
        // 删除的对象名称
        businessType: '字段',
        // 控制删除对象的类名
        typeClass: '',
        // 控制tag文字的类名
        tagClass: '',
        // tag文字
        tagText: 'XX',
        // 自定义删除描述
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
