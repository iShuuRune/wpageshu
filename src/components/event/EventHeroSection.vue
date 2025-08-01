<script setup lang="ts">
import type { Event } from '@/composables/useEvents'

interface Props {
  event: Event
  formatDate: (dateString: string) => string
  getEventTypeColor: (type: string) => string
}

defineProps<Props>()

const emit = defineEmits<{
  goBack: []
}>()
</script>

<template>
  <section class="relative h-78 md:h-78 overflow-hidden bg-black">
    <!-- Fondo negro sólido -->
    <div class="absolute inset-0 bg-black"></div>
    
    <!-- Contenido del hero -->
    <div class="relative z-10 container mx-auto px-4 h-full flex items-end pb-8">
      <div class="text-white">
        <span :class="`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${getEventTypeColor(event.type)}`">
          {{ event.type }}
        </span>
        <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ event.title }}</h1>
        <div class="flex flex-wrap items-center gap-6 text-lg">
          <div class="flex items-center">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ formatDate(event.date) }}
          </div>
          <div class="flex items-center">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ event.time }}
          </div>
        </div>
      </div>
    </div>

    <!-- Botón de volver -->
    <button 
      @click="emit('goBack')"
      class="absolute top-6 left-6 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  </section>
</template>
