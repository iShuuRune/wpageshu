<script setup lang="ts">
import type { Event } from '@/composables/useEvents'

interface Props {
  event: Event
  show: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Teleport to="body">
    <div 
      v-if="show" 
      class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      @click="emit('close')"
    >
      <div class="relative max-w-7xl max-h-full">
        <!-- Botón de cerrar -->
        <button 
          @click="emit('close')"
          class="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <!-- Imagen -->
        <img 
          :src="event.image" 
          :alt="event.title"
          class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          @click.stop
        />
        
        <!-- Información de la imagen -->
        <div class="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-4 rounded-lg">
          <h3 class="text-xl font-semibold mb-2">{{ event.title }}</h3>
          <p class="text-sm opacity-90">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>
