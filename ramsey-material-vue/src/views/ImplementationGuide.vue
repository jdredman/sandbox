<template>
  <v-app>
    <v-main>
      <v-container class="py-8">
        <!-- Introduction -->
        <section class="mb-12">
          <v-btn @click="goHome" variant="text"> ← Back to Demo </v-btn>

          <h1 class="rds-heading-lg mb-6">Get Started</h1>
          <p class="rds-body">
            This guide will help you implement the RDS Vuetify theme in any Vue.js application. The
            theme is designed to be fully portable and shareable across different projects.
          </p>
        </section>

        <!-- Prerequisites -->
        <section class="mb-12">
          <h2 class="rds-heading-md mb-4">Prerequisites</h2>
          <v-card class="pa-6" variant="outlined">
            <ul class="rds-body">
              <li>Vue 3.x</li>
              <li>Vuetify 3.x</li>
              <li>TypeScript (recommended)</li>
              <li>Node.js 16+ / npm or yarn</li>
            </ul>
          </v-card>
        </section>

        <!-- Steps -->
        <section class="mb-12">
          <h2 class="rds-heading-md mb-4">Implementation Steps</h2>

          <div v-for="(step, index) in steps" :key="index" class="mb-8">
            <v-card class="elevation-2">
              <v-card-title>
                <v-icon icon="mdi-numeric" class=""></v-icon>
                Step {{ index + 1 }}: {{ step.title }}
              </v-card-title>

              <v-card-text class="pa-6">
                <p class="rds-body mb-4">{{ step.description }}</p>

                <v-card v-if="step.code" class="pa-4 mb-4" color="grey-lighten-5">
                  <v-card-text>
                    <pre class="code-block"><code>{{ step.code }}</code></pre>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      @click="copyToClipboard(step.code)"
                      variant="outlined"
                      size="small"
                      prepend-icon="mdi-content-copy"
                    >
                      Copy Code
                    </v-btn>
                  </v-card-actions>
                </v-card>

                <v-alert v-if="step.note" type="info" class="mb-4">
                  {{ step.note }}
                </v-alert>
              </v-card-text>
            </v-card>
          </div>
        </section>

        <!-- Snackbar for copy feedback -->
        <v-snackbar v-model="showCopySnackbar" timeout="2000" color="success">
          Code copied to clipboard!
        </v-snackbar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showCopySnackbar = ref(false)

function goHome() {
  window.location.href = '/'
}

const steps = [
  {
    title: 'Install Dependencies',
    description: 'First, make sure you have Vue 3 and Vuetify 3 installed in your project.',
    code: `npm install vue@^3.0.0 vuetify@^3.0.0
# or
yarn add vue@^3.0.0 vuetify@^3.0.0`,
    note: 'If you already have these dependencies, you can skip this step.',
  },
  {
    title: 'Add Gibson Font',
    description: 'Add the Gibson font from Adobe Typekit to your HTML head tag.',
    code: `<!-- In your index.html or main template -->
<head>
  <!-- ... other head content ... -->
  <link rel="stylesheet" href="https://use.typekit.net/euz0vgw.css">
</head>`,
    note: 'This font link must be included for the typography to display correctly.',
  },
  {
    title: 'Copy RDS Files',
    description:
      'Copy the RDS theme files to your src directory. See the "Required Files" section below for details.',
    code: `# Copy these files to your project:
src/
├── plugins/
│   ├── vuetify-theme.ts
│   └── index.ts
├── styles/
│   └── rds-theme.css
└── composables/
    └── useRdsTokens.ts`,
    note: 'Make sure to maintain the same directory structure for proper imports.',
  },
  {
    title: 'Configure Vuetify',
    description: 'Update your main.ts file to use the RDS theme configuration.',
    code: `// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// RDS Theme
import { rdsTheme } from './plugins/vuetify-theme'
import './styles/rds-theme.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'rds',
    themes: {
      rds: rdsTheme
    }
  }
})

createApp(App).use(vuetify).mount('#app')`,
    note: 'This configuration applies the RDS theme as the default theme for all Vuetify components.',
  },
  {
    title: 'Start Using RDS',
    description:
      'You can now use RDS typography classes and design tokens throughout your application.',
    code: `<!-- In your Vue components -->
<template>
  <div>
    <h1 class="rds-heading-lg">Gibson Font Heading</h1>
    <p class="rds-body">Body text with Gibson font</p>
    <v-btn color="primary">RDS Themed Button</v-btn>
  </div>
</template>`,
    note: 'All Vuetify components will automatically use the Gibson font and RDS color palette.',
  },
]

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    showCopySnackbar.value = true
  })
}
</script>

<style scoped>
.code-block {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
