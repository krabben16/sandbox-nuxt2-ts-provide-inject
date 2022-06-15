import { provide } from '@nuxtjs/composition-api'
import useRequest, { RequestStoreKey } from '~/compositions/useRequest'

const setup = () => {
  if (process.client) {
    // ここで useRequest を実行する。
    // 同時に state が作成される。
    provide(RequestStoreKey, useRequest())
  }
}

export default setup
