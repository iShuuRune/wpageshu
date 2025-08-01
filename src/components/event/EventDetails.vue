<script setup lang="ts">
import type { Event } from '@/composables/useEvents'

interface Props {
  event: Event
  getDateForDisplay: (dateString: string) => Date
}

defineProps<Props>()

const emit = defineEmits<{
  openImageModal: []
  imageError: [errorEvent: any]
}>()

const handleImageError = (errorEvent: any) => {
  emit('imageError', errorEvent)
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
        @click="emit('openImageModal')"
      >
        <img 
          :src="event.image" 
          :alt="event.title"
          class="w-full h-auto object-cover max-h-96 hover:scale-105 transition-transform duration-300"
          @error="handleImageError"
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