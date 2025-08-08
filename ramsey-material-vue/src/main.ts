import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Custom RDS theme and styles
import { rdsTheme } from './plugins/vuetify-theme'
import './styles/rds-theme.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'rds',
    themes: {
      rds: rdsTheme,
    },
  },
  defaults: {
    // Apply RDS design system defaults
    VBtn: {
      style: [
        { fontFamily: 'canada-type-gibson, Arial, sans-serif' },
        { fontWeight: 600 },
        { borderRadius: '4px' },
      ],
    },
    VCard: {
      style: [{ fontFamily: 'canada-type-gibson, Arial, sans-serif' }, { borderRadius: '8px' }],
    },
    VTextField: {
      style: [{ fontFamily: 'canada-type-gibson, Arial, sans-serif' }],
    },
    VAppBar: {
      style: [{ fontFamily: 'canada-type-gibson, Arial, sans-serif' }, { fontWeight: 600 }],
    },
  },
})

createApp(App).use(vuetify).use(router).mount('#app')
