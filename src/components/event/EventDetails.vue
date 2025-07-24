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

<template>
  <div class="bg-white rounded-xl shadow-lg p-8">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Detalles del Evento</h2>
    
    <div class="prose prose-lg max-w-none text-gray-600 mb-8">
      <p>{{ event.description }}</p>
    </div>

    <!-- Información Adicional -->
    <div class="border-t pt-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Información Adicional</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
        <div>
          <h4 class="font-medium text-gray-800 mb-2">¿Qué esperar?</h4>
          <ul class="space-y-1 text-sm">
            <li>• Ambiente familiar y acogedor</li>
            <li>• Actividades para todas las edades</li>
            <li>• Momentos de adoración y reflexión</li>
            <li>• Comunión con otros creyentes</li>
          </ul>
        </div>
        <div>
          <h4 class="font-medium text-gray-800 mb-2">Recomendaciones</h4>
          <ul class="space-y-1 text-sm">
            <li>• Llegar con 15 minutos de anticipación</li>
            <li>• Traer una actitud abierta y dispuesta</li>
            <li>• Vestimenta cómoda y apropiada</li>
            <li>• Compartir la invitación con amigos</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Imagen del Evento -->
    <div v-if="event.image" class="border-t pt-6 mt-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Imagen del Evento</h3>
      <div 
        class="relative rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
        @click="openImageModal"
      >
        <img 
      <!-- Imagen del Evento separada en su propio componente -->
      <EventImage :event="event" :getDateForDisplay="getDateForDisplay" />
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

<style scoped>
/* Mostrar fallback cuando hay error de imagen */
[data-image-error="true"] .fallback-on-error {
  opacity: 1;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.7;
}
</style>
