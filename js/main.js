import { router } from "./router.js"
import appHeader from './comps/app-header.cmp.js'
import appFooter from './comps/app-footer.cmp.js'



const options = {
    template: `
        <app-header/>
        <router-view/>
        <app-footer/>
    `,
    components: {
        appHeader,
        appFooter,
    },
};


const app = Vue.createApp(options)
app.use(router)
app.mount("#app")