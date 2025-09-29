<template>
  <div>
    Composition
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>ref: {{ nameRef }}</p>
    <p>reactive: {{ book.title }}</p>
    <p>reactive: {{ book.author[0] }}</p>
    <p>reactiveToRefs: {{ titleRef }}</p>
    <p>reactiveToRefs: {{ authorRef[1] }}</p>
    <button @click="btnClicked">クリック</button>
    <p>computed: {{ totalPrice }}</p>
    <div>watch:<input type="text" v-model="search"></div>
    <div>watchEffect:<input type="text" v-model="searchEffect"></div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch, watchEffect, onMounted } from 'vue'
export default {
  data(){
    return {
      number:1,
      sports:'サッカー'
    }
  },
  setup(){
    let name = '大谷'
    const age = 30
    const nameRef = ref('錦織')

    const book = reactive({
      title: 'タイトル',
      author:  ['大谷', '伊藤']
    })
    const booktoRefs = reactive({
      titleRef: 'タイトル2',
      authorRef:  ['大谷2', '伊藤2']
    })
    const btnClicked = () => {
      console.log(book.title)
    }
    const search = ref('')
    watch(search, (newValue, prevValue) => {
      console.log(`watch: ${search.value}`)
      console.log(`new: ${newValue}`)
      console.log(`prev: ${prevValue}`)
    })
    const searchEffect = ref('')
    watchEffect(() => {
      console.log(`watchEffect: ${searchEffect.value}`)
    })
    onMounted(() => {
      console.log('onMounted')
    })
    const item = reactive({
      price: 100,
      number: 1
    })
    const totalPrice = computed(() => {
      return item.price * item.number
    })
    console.log('setup')
    return {
      name,
      age,
      nameRef,
      book,
      ...toRefs(booktoRefs),
      btnClicked,
      item,
      totalPrice,
      search,
      searchEffect,
    }
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log('mounted')
  },
}
</script>

<style>

</style>