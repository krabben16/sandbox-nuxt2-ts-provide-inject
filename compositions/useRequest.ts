import { reactive, toRefs, useContext, InjectionKey, useFetch } from '@nuxtjs/composition-api'

interface RequestState {
  data: string | null
}

export default function useRequest() {
  // const { $axios } = useContext()

  const state = reactive<RequestState>({
    data: null,
  })

  useFetch(async () => {
    // state.data = await $axios.$get('https://postman-echo.com/get')
    state.data = Math.random().toString()
  })

  return {
    ...toRefs(state),
  }
}

export type RequestStoreType = ReturnType<typeof useRequest>
export const RequestStoreKey: InjectionKey<RequestStoreType> = Symbol('RequestStore')
