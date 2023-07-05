#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: pnpm gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/components/$NAME"
DIRNAMESRC="$FILE_PATH/components"

INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi

NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"

cat > $DIRNAME/src/$INPUT_NAME.vue <<EOF
<script setup>

defineOptions({
  name: 'FY$NAME',
})

const props = defineProps({})

// init here
</script>

<template>
  <div>
    <slot />
  </div>
</template>
EOF

cat <<EOF >"$DIRNAME/index.js"
import { withInstall } from '@hitotek/fuzzy-ui-utils'
import $NAME from './src/$INPUT_NAME.vue'

export const FY$NAME = withInstall($NAME)
export default FY$NAME

export * from './src/$INPUT_NAME.vue'
EOF

echo "export * from './$INPUT_NAME/index.js'">>"$DIRNAMESRC/export-components.js"
