import Vue from "vue";
import ViewportMenu from "./ViewportMenu.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(ViewportMenu)
}).$mount("#viewport-menu");
