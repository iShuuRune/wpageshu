<script setup lang="ts">
import { ref } from 'vue'

const events = ref([
  {
    id: 1,
    title: 'Servicio Dominical',
    date: '2025-07-20',
    time: '10:00 AM',
    location: 'Campus Principal',
    description: 'Únete a nosotros para un tiempo de adoración, enseñanza y comunión. Experimenta la presencia de Dios en un ambiente de adoración vibrante.',
    type: 'Servicio Regular',
    featured: true
  },
  {
    id: 2,
    title: 'Noche de Jóvenes',
    date: '2025-07-23',
    time: '7:00 PM',
    location: 'Salón de Jóvenes',
    description: 'Una noche especial dedicada a los jóvenes de nuestra comunidad con música, enseñanza y actividades.',
    type: 'Jóvenes',
    featured: false
  },
  {
    id: 3,
    title: 'Estudio Bíblico',
    date: '2025-07-25',
    time: '7:30 PM',
    location: 'Aula 201',
    description: 'Profundiza en la Palabra de Dios con nuestro estudio bíblico semanal. Todos los niveles son bienvenidos.',
    type: 'Estudio',
    featured: false
  },
  {
    id: 4,
    title: 'Conferencia Anual',
    date: '2025-08-15',
    time: '6:00 PM',
    location: 'Auditorio Central',
    description: 'Nuestra conferencia anual con invitados especiales, talleres y momentos de adoración profunda.',
    type: 'Conferencia',
    featured: true
  },
  {
    id: 5,
    title: 'Retiro de Familias',
    date: '2025-08-22',
    time: '9:00 AM',
    location: 'Centro de Retiros',
    description: 'Un fin de semana especial para fortalecer los vínculos familiares y crecer juntos en la fe.',
    type: 'Retiro',
    featured: true
  }
])

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getEventTypeColor = (type: string) => {
  const colors = {
    'Servicio Regular': 'bg-blue-500',
    'Jóvenes': 'bg-purple-500',
    'Estudio': 'bg-green-500',
    'Conferencia': 'bg-red-500',
    'Retiro': 'bg-yellow-500'
  }
  return colors[type as keyof typeof colors] || 'bg-gray-500'
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <!-- Header -->
    <div class="container mx-auto px-4 mb-12">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Nuestros Eventos
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubre todos los eventos y actividades programadas. ¡Te esperamos con los brazos abiertos!
        </p>
      </div>
    </div>

    <!-- Eventos Destacados -->
    <section class="container mx-auto px-4 mb-16">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Eventos Destacados</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="event in events.filter(e => e.featured)"
          :key="event.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
            <div class="text-white text-center">
              <div class="text-4xl font-bold mb-2">{{ new Date(event.date).getDate() }}</div>
              <div class="text-lg">{{ new Date(event.date).toLocaleDateString('es-ES', { month: 'long' }) }}</div>
            </div>
            <span :class="`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium text-white ${getEventTypeColor(event.type)}`">
              {{ event.type }}
            </span>
          </div>
          
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">{{ event.title }}</h3>
            <p class="text-gray-600 mb-4">{{ event.description }}</p>
            
            <div class="space-y-2 text-gray-500 mb-6">
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ formatDate(event.date) }}
              </div>
              
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ event.time }}
              </div>
              
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ event.location }}
              </div>
            </div>

            <button class="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
              Más Información
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Todos los Eventos -->
    <section class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Todos los Eventos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="event in events"
          :key="event.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div class="h-32 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center relative">
            <div class="text-white text-center">
              <div class="text-2xl font-bold">{{ new Date(event.date).getDate() }}</div>
              <div class="text-sm">{{ new Date(event.date).toLocaleDateString('es-ES', { month: 'short' }) }}</div>
            </div>
            <span :class="`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium text-white ${getEventTypeColor(event.type)}`">
              {{ event.type }}
            </span>
          </div>
          
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ event.title }}</h3>
            <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ event.description }}</p>
            
            <div class="space-y-1 text-xs text-gray-500 mb-4">
              <div class="flex items-center">
                <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ event.time }}
              </div>
              
              <div class="flex items-center">
                <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ event.location }}
              </div>
            </div>

            <button class="btn btn-outline btn-sm w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
