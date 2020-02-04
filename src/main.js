import "./assets/styles/index.css";

import App from "./App.vue";
import Vue from "vue";
import VueClipboard from "vue-clipboard2";

Vue.config.productionTip = false;
Vue.use(VueClipboard);

new Vue({
  render: h => h(App)
}).$mount("#app");
