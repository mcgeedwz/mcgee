<template>
  <div class="hello">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>{{ msg }}</h1>
    <h2>{{ age }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
    age: {
      type: Number as PropType<number>,
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
