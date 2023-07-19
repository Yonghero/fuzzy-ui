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
