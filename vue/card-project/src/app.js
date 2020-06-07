import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true

Vue.component('text-input',{
    template:'<textarea></textarea>'
})

new Vue({
    render: h => h(App),
}).$mount('#app')
