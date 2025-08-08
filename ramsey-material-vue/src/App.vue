<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar :elevation="5" color="surface">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>RDS Vuetify</v-app-bar-title>

      <template v-slot:append>
        <v-btn to="/implementation-guide" variant="text" prepend-icon="mdi-file-document-outline">
          Implementation Guide
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <router-view v-if="$route.path !== '/'" />

      <v-container v-else>
        <v-row>
          <v-col cols="12">
            <h1 class="rds-heading">RDS Vuetify Design System</h1>
            <p class="rds-body">
              An experimental project to test the integration of RDS with Vuetify. Vuetify is a
              popular Material Design component framework for use in Vue.js.
            </p>
          </v-col>
        </v-row>

        <!-- Component Demo -->
        <v-row class="mt-8">
          <v-col cols="12" md="6">
            <v-card :elevation="2" class="pa-4">
              <v-card-title>Foundations</v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card :elevation="2" class="pa-4">
              <v-card-title>Components</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
