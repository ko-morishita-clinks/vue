<template>
  <div>RouterTest</div>
  <button @click="goHome">ホームへ戻る</button>
  <button @click="checkRoute">ルート情報</button>
</template>

<script>
import { useRouter, useRoute, onBeforeRouteLeave } from 'vue-router'
export default {
  setup(){
    const router = useRouter()
    const route = useRoute()

    const goHome = () => {
      router.push('/')
    }
    const checkRoute = () => {
      console.log(route.path)
    }

    onBeforeRouteLeave((to, from) => {
      console.log(`to: ${to}`)
      console.log(`from: ${from}`)
    })

    return { goHome, checkRoute }
  }

}
</script>

<style>

</style>