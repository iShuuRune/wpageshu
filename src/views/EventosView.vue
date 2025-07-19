<script setup lang="ts">
import { ref } from 'vue'

const events = ref([
  {
    id: 1,
    title: 'Aniversario Red Conexión',
    date: '2025-07-26',
    time: '7:00 PM',
    location: 'Iglesia PDP Sede Pueblo Viejo',
    description: 'Celebramos un año más de la Red Conexión con una noche especial. Únete a nosotros para conmemorar este momento tan importante.',
    type: 'Aniversario',
    featured: true
  },
  {
    id: 2,
    title: 'Concierto René González',
    date: '2025-08-27',
    time: '6:30 PM',
    location: 'Sala Magna del Liceo de Santa Cruz',
    description: 'Una noche inolvidable con René González, uno de los exponentes más reconocidos de la música cristiana.',
    type: 'Concierto',
    featured: true
  },
  {
    id: 3,
    title: 'Congreso de Música',
    date: '2025-11-15',
    time: '10:00 AM',
    location: 'Iglesia Central PDP San Joaquín',
    description: 'Un encuentro especial dedicado a la música cristiana con talleres, conferencias y momentos de adoración. Ideal para músicos y amantes de la música.',
    type: 'Congreso',
    featured: false
  },
  {
    id: 4,
    title: 'Concierto Alex Zurdo',
    date: '2025-12-07',
    time: '3:00 PM',
    location: 'Polideportivo de Nicoya',
    description: 'Alex Zurdo llega a Costa Rica con su música llena de energía y mensaje. Una tarde que no te puedes perder con uno de los artistas más queridos del género urbano cristiano.',
    type: 'Concierto',
    featured: true
  },
  {
    id: 5,
    title: 'Campamento Zonal Río Naranjo 2025',
    date: '2025-12-19',
    time: '5:00 PM',
    location: 'Río Naranjo de Upala',
    description: 'Tres días de campamento zonal del 19 al 21 de diciembre. Salida viernes 5:00 PM, regreso domingo 6:00 PM. Una experiencia de crecimiento espiritual en la naturaleza.',
    type: 'Campamento',
    featured: false
  }
])

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

const getEventTypeColor = (type: string) => {
  const colors = {
    'Aniversario': 'bg-purple-500',
    'Concierto': 'bg-red-500',
    'Congreso': 'bg-blue-500',
    'Campamento': 'bg-green-500'
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
              <div class="text-4xl font-bold mb-2">{{ getDateForDisplay(event.date).getDate() }}</div>
              <div class="text-lg">{{ getDateForDisplay(event.date).toLocaleDateString('es-ES', { month: 'long' }) }}</div>
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
              <div class="text-2xl font-bold">{{ getDateForDisplay(event.date).getDate() }}</div>
              <div class="text-sm">{{ getDateForDisplay(event.date).toLocaleDateString('es-ES', { month: 'short' }) }}</div>
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
