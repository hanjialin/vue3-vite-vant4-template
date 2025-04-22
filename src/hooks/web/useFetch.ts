import { ref, onMounted, reactive, Ref } from 'vue'
import { AxiosPromise } from 'axios'
interface IFetchProps<T> {
  apiFun: AxiosPromise<any>
  isMounted?: true | boolean
  callback?: (data: T, loading: boolean, msg: string, code: number) => void
}
/*
 * @desc 简化请求的hooks
 * @param props FetchProps
 * @param props.apiFun AxiosPromise<any>
 * @param props.isMounted boolean default=true
 * @request {option,loading}
 * @author HanJiaLin
 * @time 2023/4/11 16:04
 * */
export default <T>(props: IFetchProps<T>) => {
  const { apiFun, isMounted, callback } = props
  const data = ref<any | T>()
  const loading = ref<boolean>(false)
  const msg = ref<string>('')
  const loadData = () => {
    loading.value = true
    data.value = []
    apiFun
      .then((res) => {
        loading.value = false
        data.value = res.data.data
        msg.value = res.data.msg
        const code = res.data.code
        // 检查 callback 是否存在再调用
        if (callback) {
          callback(data.value, loading.value, msg.value, code)
        }
        return res
      })
      .catch((error) => {
        loading.value = false
        data.value = []
        return Promise.reject(error)
      })
  }
  if (isMounted && typeof isMounted === 'undefined') {
    onMounted(() => {
      loadData()
    })
  } else {
    loadData()
  }

  return reactive<{ data: Ref<T>; loading: Ref<boolean> }>({
    data,
    loading
  })
}
