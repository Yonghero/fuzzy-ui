import { FYSelect } from '../../../select'

export const formItemMap = new Map()

export function installFormItem(item) {
  formItemMap.set(item.type, item.renderer)
}

installFormItem({
  type: 'select',
  renderer(props) {
    console.log('props: ', props)
    return (<FYSelect v-model={props.model[props.value]} {...props}/>)
  },
})
