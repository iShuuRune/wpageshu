<script setup lang="ts">
import type { Event } from '@/composables/useEvents'

interface Props {
  event: Event
  formatDate: (dateString: string) => string
}

defineProps<Props>()
</script>

<template>
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
</template>
