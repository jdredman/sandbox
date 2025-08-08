<template>
  <v-card class="rds-card" :style="cardStyles">
    <v-card-title class="rds-card-title">
      {{ title }}
    </v-card-title>
    <v-card-text class="rds-card-content">
      <slot></slot>
    </v-card-text>
    <v-card-actions v-if="hasActions">
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRdsTokens } from '@/composables/useRdsTokens'

interface Props {
  title?: string
  variant?: 'default' | 'success' | 'error' | 'warning'
  hasActions?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  variant: 'default',
  hasActions: false,
})

const { colors, radius, shadows } = useRdsTokens()

const cardStyles = computed(() => {
  const baseStyles = {
    borderRadius: radius.md,
    boxShadow: shadows.sm,
    fontFamily: 'canada-type-gibson, Arial, sans-serif',
  }

  switch (props.variant) {
    case 'success':
      return {
        ...baseStyles,
        borderLeft: `4px solid ${colors.success}`,
      }
    case 'error':
      return {
        ...baseStyles,
        borderLeft: `4px solid ${colors.error}`,
      }
    case 'warning':
      return {
        ...baseStyles,
        borderLeft: `4px solid ${colors.warning}`,
      }
    default:
      return baseStyles
  }
})
</script>

<style scoped>
.rds-card {
  font-family: 'canada-type-gibson', Arial, sans-serif;
}

.rds-card-title {
  font-family: 'canada-type-gibson', Arial, sans-serif;
  font-weight: 600;
  color: v-bind('colors.textBase');
}

.rds-card-content {
  font-family: 'canada-type-gibson', Arial, sans-serif;
  color: v-bind('colors.textBase');
  line-height: 1.5;
}
</style>
