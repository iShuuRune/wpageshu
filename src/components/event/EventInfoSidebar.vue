<script setup lang="ts">
import type { Event } from '@/composables/useEvents'

interface Props {
  event: Event
  formatDate: (dateString: string) => string
}

defineProps<Props>()

const emit = defineEmits<{
  shareEvent: []
}>()
</script>

<template>
  <div class="space-y-6">
    <!-- Información del Evento -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Información del Evento</h3>
      <div class="space-y-4">
        <div class="flex items-start">
          <svg class="w-5 h-5 mr-3 mt-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div>
            <div class="font-medium text-gray-800">Fecha</div>
            <div class="text-gray-600">{{ formatDate(event.date) }}</div>
          </div>
        </div>
        
        <div class="flex items-start">
          <svg class="w-5 h-5 mr-3 mt-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <div class="font-medium text-gray-800">Hora</div>
            <div class="text-gray-600">{{ event.time }}</div>
          </div>
        </div>
        
        <div class="flex items-start">
          <svg class="w-5 h-5 mr-3 mt-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <div class="font-medium text-gray-800">Ubicación</div>
            <div class="text-gray-600">{{ event.location }}</div>
          </div>
        </div>

        <div class="flex items-start">
          <svg class="w-5 h-5 mr-3 mt-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <div>
            <div class="font-medium text-gray-800">Tipo</div>
            <div class="text-gray-600">{{ event.type }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Acciones -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Acciones</h3>
      <div class="space-y-3">
        <button 
          @click="emit('shareEvent')"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
          Compartir Evento
        </button>
        
        <a 
          :href="`https://wa.me/50685812895?text=Hola%2C%20me%20interesa%20el%20evento%3A%20${encodeURIComponent(event.title)}`"
          target="_blank"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.712"/>
          </svg>
          Consultar por WhatsApp
        </a>
        
        <RouterLink 
          to="/eventos"
          class="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          Ver Todos los Eventos
        </RouterLink>
      </div>
    </div>
  </div>
</template>
