import { createApp } from 'vue'
import App from '@/components/app/App.vue'
import uiComponents from "@/ui-components";


const app = createApp(App)

uiComponents.forEach((component)=> {
    app.component(component.name, component)
})

app.mount('#app')
