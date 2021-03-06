import Vue from 'vue'
import App from './App.vue' // 컴포넌트 파일을 다른 파일로 부터 불러옴

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
