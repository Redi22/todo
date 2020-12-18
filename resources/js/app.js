

require('./bootstrap');
import router from './router';
import vuetify from './vuetify';
import App from './components/App';
window.Vue = require('vue');



Vue.component('App' , require('./components/App.vue'))
const app = new Vue({
    el: '#app',
    router,
    vuetify,
    render: h => h(App)
});
export default app;