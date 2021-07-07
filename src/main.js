import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueI18n from "vue-i18n";
import ru from "@/lang/ru.js";
import en from "@/lang/en.js";
import by from "@/lang/by.js";

Vue.use(VueI18n);

export const bus = new Vue();

Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: window.navigator.language.slice(0, 2),
  fallbackLocale: ru,
  messages: {
    ru,
    en,
    by,
  },
});

new Vue({
  i18n,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
