<template>
  <div>
    <Request />
    <Request />
    <Request />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import requestSetup from '~/setups/request'

export default defineComponent({
  setup() {
    requestSetup()
    return {}
  }
})
</script>
