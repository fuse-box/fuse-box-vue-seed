import './style/main.scss'
import * as Vue from 'vue/dist/vue.common.js'
import * as App from './components/App.vue'
import  NoneSingleFile from './components/none-single-file'

Vue.component('my-component', NoneSingleFile)

new Vue({
    el: '#app',
    render: h => h(App),
})
