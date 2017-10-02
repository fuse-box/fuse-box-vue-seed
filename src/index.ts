import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'prismjs/prism';
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-solarizedlight.css';
import 'vuetify/dist/vuetify.min.css';
import App from './components/App.vue';
import Home from './components/Home.vue';
import Config from './components/Config.vue';

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/config', component: Config }
  ]
});

new Vue({
    router,
    el: '#app',
    render: h => h(App),
});
