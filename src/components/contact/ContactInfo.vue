<script setup lang="ts">
const contactInfo = [
  {
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347',
    title: 'WhatsApp',
    value: '+506 8581 2895',
    link: 'https://wa.me/50685812895'
  },
  {
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    title: 'Teléfono',
    value: '+506 8581 2895',
    link: 'tel:+50685812895'
  },
  {
    icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Email',
    value: 'solohayunocr@gmail.com',
    link: 'mailto:solohayunocr@gmail.com'
  },
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Dirección',
    value: 'Nicoya, Guanacaste, Costa Rica',
    link: null
  }
]
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h2>
    <div class="space-y-4">
      <div
        v-for="info in contactInfo"
        :key="info.title"
        class="flex items-start space-x-3"
      >
        <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="info.icon" />
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-gray-800">{{ info.title }}</h3>
          <a
            v-if="info.link"
            :href="info.link"
            class="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {{ info.value }}
          </a>
          <p v-else class="text-gray-600">{{ info.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
