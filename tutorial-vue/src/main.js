import { createApp } from "vue";
import App from "./App.vue";
import Navbar from "@/components/Navbar.vue";

const app = createApp(App);
app.component("Navbar", Navbar);
app.directive("email", {
    created(el, biding) {
        el.innerHTML = `<a href="mailto:${biding.value}">${biding.value}</a>`;
    },
});
app.mount("#app");