import * as Vue  from 'vue/dist/vue.js';
import * as AppTemplate  from './app-template.html';
import './main.scss';

let app = new Vue({
    el: '#app',
    template: AppTemplate,
    data: {
        name: `Mike Reynolds`,
        currentTime: new Date()
    },
    methods: {
        timer(){
            setInterval(() => {
                this.currentTime = new Date();
            }, 1000)
        }
    },
    mounted(){
        this.timer();
    }
})