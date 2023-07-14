import { withInstall } from '@hitotek/fuzzy-ui-utils'
import FilterInline from './src/FilterInline'

export * from './src/composable'

export {
  FilterInline,
}

export const FYFilterInline = withInstall(FilterInline)
export default FYFilterInline
