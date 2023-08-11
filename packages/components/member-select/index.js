import { withInstall } from '@hitotek/fuzzy-ui-utils'
import MemberSelect from './src/MemberSelect.vue'

export { useMemberCheck } from './src/BuiltInSelect'

export const FYMemberSelect = withInstall(MemberSelect)
export default FYMemberSelect

export * from './src/MemberSelect.vue'
