<template>
  <div>{{ data }}</div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, toRefs } from '@nuxtjs/composition-api'
import { RequestStoreKey, RequestStoreType } from '~/compositions/useRequest'

export default defineComponent({
  setup() {
    const state = reactive({
      data: '...',
    })

    if (process.client) {
      // setups/request.ts で作成された state を取得する。
      const requestStore = inject(RequestStoreKey) as RequestStoreType
      state.data = requestStore.data.value ?? '...'
    }

    return {
      ...toRefs(state),
    }
  },
})
</script>
