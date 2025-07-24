<template>
  <div v-if="event.image" class="border-t pt-6 mt-6">
    <h3 class="text-xl font-semibold text-gray-800 mb-4">Imagen del Evento</h3>
    <div 
      class="relative rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
      @click="openImageModal"
    >
      <img 
        :src="event.image" 
        :alt="event.title"
        class="w-full h-auto object-cover max-h-96 hover:scale-105 transition-transform duration-300"
        @error="onImageError"
      />
      <!-- Fallback para error de imagen -->
      <div 
        class="fallback-on-error w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center absolute top-0 left-0 opacity-0 transition-opacity duration-300"
      >
        <div class="text-white text-center">
          <div class="text-6xl font-bold mb-4">{{ getDateForDisplay(event.date).getDate() }}</div>
          <div class="text-2xl">{{ getDateForDisplay(event.date).toLocaleDateString('es-ES', { month: 'long' }) }}</div>
          <div class="text-lg mt-2">{{ event.title }}</div>
        </div>
      </div>
      <!-- Overlay de zoom -->
      <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
        <div class="bg-white bg-opacity-90 rounded-full p-3">
          <svg class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </div>
    <p class="text-sm text-gray-500 mt-2 text-center">
      Haz clic en la imagen para verla en tamaño completo
    </p>

    <!-- Modal de Imagen en Tamaño Completo -->
    <div 
      v-if="showImageModal && event.image" 
      class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      @click="closeImageModal"
    >
      <div class="relative max-w-7xl max-h-full">
        <!-- Botón de cerrar -->
        <button 
          @click="closeImageModal"
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Event } from '@/composables/useEvents'

interface Props {
  event: Event
  getDateForDisplay: (dateString: string) => Date
}

const props = defineProps<Props>()
const showImageModal = ref(false)

const onImageError = (domEvent: globalThis.Event) => {
  const img = domEvent.target as HTMLImageElement
  console.log('Error cargando imagen:', img.src)
  img.style.display = 'none'
  const container = img.parentElement
  if (container) {
    container.setAttribute('data-image-error', 'true')
  }
}

const openImageModal = () => {
  showImageModal.value = true
}

const closeImageModal = () => {
  showImageModal.value = false
}
</script>

<style scoped>
[data-image-error="true"] .fallback-on-error {
  opacity: 1;
}
</style>
