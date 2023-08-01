// 判断当前点击区域是否在组件内部，摘抄自element-plus 源码
const nodeList = new Map()
let startClick
document.addEventListener('mousedown', (e) => {
  startClick = e
  return null
})
document.addEventListener('mouseup', (e) => {
  for (const handlers of nodeList.values()) {
    for (const { documentHandler } of handlers) {
      documentHandler(e, startClick)
    }
  }
})

function createDocumentHandler(el, binding) {
  let excludes = []
  let whiteClass = ''

  if (Array.isArray(binding.arg)) {
    excludes = binding.arg
  } else if (typeof binding.arg === 'string') {
    whiteClass = binding.arg
  }
  return function (mouseup, mousedown) {
    const { popperRef } = binding.instance
    const mouseUpTarget = mouseup.target
    const mouseDownTarget = mousedown?.target
    const isBound = !binding || !binding.instance
    const isTargetExists = !mouseUpTarget || !mouseDownTarget
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget)
    const isSelf = el === mouseUpTarget

    const isTargetExcluded = (excludes.length
        && excludes.some((item) => item?.contains(mouseUpTarget)))
      || (excludes.length && excludes.includes(mouseDownTarget))
    const isContainedByPopper = popperRef
      && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget))
    const isClass = whiteClass && (mouseDownTarget.classList.contains(whiteClass))
    if (
      isBound
      || isTargetExists
      || isContainedByEl
      || isSelf
      || isTargetExcluded
      || isContainedByPopper
      || isClass
    ) {
      return
    }
    binding.value(mouseup, mousedown)
  }
}

export const ClickOutside = {
  beforeMount(el, binding) {
    console.log('binding: ', binding)
    // there could be multiple handlers on the element
    if (!nodeList.has(el)) {
      nodeList.set(el, [])
    }

    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value,
    })
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, [])
    }

    const handlers = nodeList.get(el)
    const oldHandlerIndex = handlers.findIndex(
      (item) => item.bindingFn === binding.oldValue,
    )
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value,
    }

    if (oldHandlerIndex >= 0) {
      // replace the old handler to the new handler
      handlers.splice(oldHandlerIndex, 1, newHandler)
    } else {
      handlers.push(newHandler)
    }
  },
  unmounted(el) {
    // remove all listeners when a component unmounted
    nodeList.delete(el)
  },
}
