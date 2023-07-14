import { withInstall } from '@hitotek/fuzzy-ui-utils'
import FilterInline from './src/filter-inline'

export {
  FilterInline,
}

export * from './src/composable'

export const FYFilterInline = withInstall(FilterInline)
export default FYFilterInline
