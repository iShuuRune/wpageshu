<script setup lang="ts">
import { RouterLink } from 'vue-router'

const upcomingEvents = [
  {
    id: 1,
    title: 'Aniversario Red Conexión',
    date: '2025-07-26',
    time: '7:00 PM',
    location: 'Iglesia PDP Sede Pueblo Viejo',
    description: 'Celebramos un año más de la Red Conexión con una noche especial. Únete a nosotros para conmemorar este momento tan importante.',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'Concierto René González',
    date: '2025-08-27',
    time: '6:30 PM',
    location: 'Sala Magna del Liceo de Santa Cruz',
    description: 'Una noche inolvidable con René González, uno de los exponentes más reconocidos de la música cristiana. Prepárate para una experiencia de adoración única.',
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'Congreso de Música',
    date: '2025-11-15',
    time: '10:00 AM',
    location: 'Iglesia Central PDP San Joaquín',
    description: 'Un encuentro especial dedicado a la música cristiana con talleres, conferencias y momentos de adoración. Ideal para músicos y amantes de la música.',
    image: '/api/placeholder/400/250'
  }
]

const formatDate = (dateString: string) => {
  // Crear la fecha agregando 'T00:00:00' para forzar zona horaria local
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getDateForDisplay = (dateString: string) => {
  // Función auxiliar para obtener la fecha correcta en zona horaria local
  return new Date(dateString + 'T00:00:00')
}
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Próximos Eventos
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubre los eventos y actividades que tenemos preparados para ti y tu familia
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div
          v-for="event in upcomingEvents"
          :key="event.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div class="text-white text-center">
              <div class="text-3xl font-bold">{{ getDateForDisplay(event.date).getDate() }}</div>
              <div class="text-sm">{{ getDateForDisplay(event.date).toLocaleDateString('es-ES', { month: 'short' }) }}</div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ event.title }}</h3>
            <p class="text-gray-600 mb-4">{{ event.description }}</p>
            
            <div class="space-y-2 text-sm text-gray-500">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ formatDate(event.date) }}
              </div>
              
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ event.time }}
              </div>
              
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ event.location }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <RouterLink
          to="/eventos"
          class="btn btn-primary btn-lg px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold"
        >
          Ver Todos los Eventos
        </RouterLink>
      </div>
    </div>
  </section>
</template>
