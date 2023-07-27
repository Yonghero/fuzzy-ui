export function isAsyncFunction(fn) {
  if (!fn || typeof fn !== 'function') return false
  return Object.prototype.toString.call(fn) === '[object AsyncFunction]'
      || fn.constructor.name === 'AsyncFunction'
}

/**
 * 合并template
 */
export function mergeTemplate(...tmpls) {
  return tmpls
}

/**
 * 递归计算树型结构节点数
 *
*/
export function countNodesRecursive(root) {
  if (!root || !root.length) {
    return 0
  }
  let count = 0
  for (const child of root) {
    count++
    if (child.children) {
      count += countNodesRecursive(child.children)
    }
  }
  return count
}
