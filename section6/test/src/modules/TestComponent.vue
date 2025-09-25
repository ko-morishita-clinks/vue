<template>
  <div class="red-b">
    テストです。
    {{ testData }}
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data(){
    return{
      testData: 'テストdataです。。'
    }
  }
}
</script>

<style scoped>
.red-b {
  border: solid 1px red;
}
</style>