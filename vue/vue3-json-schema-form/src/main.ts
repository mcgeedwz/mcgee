import { createApp } from 'vue'
// import App from './App.vue'
import App from './App'

// import { createApp, defineComponent, h, reactive, ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

// eslint-disable-next-line
// const imglogo = require('./assets/logo.png')

// const App = defineComponent({
//   // setup函数只执行一次

//   setup() {
//     const state = reactive({
//       name: 'mcgee',
//     })

//     const countRef = ref(1)

//     setInterval(() => {
//       state.name += '1'
//       countRef.value += 2
//     }, 1000)

//     // ref的变化会触发return 重新执行 生成dom树 但是不会让setup重新执行
//     //const count = countRef.value

//     return () => {
//       // 在return里面写才能触发重新渲染
//       const count = countRef.value

//       return h('div', { id: 'app' }, [
//         h('img', {
//           alt: 'img-log',
//           src: imglogo,
//         }),
//         h(HelloWorld, {
//           msg: state.name,
//           age: count,
//         }),
//       ])
//     }
//   },
// })

createApp(App).mount('#app')
