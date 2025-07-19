import { ref, computed } from 'vue'

export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  type: string
  featured: boolean
  image?: string
}

// Estado global de eventos
const events = ref<Event[]>([
  {
    id: 1,
    title: 'Aniversario Red Conexión',
    date: '2025-07-26',
    time: '7:00 PM',
    location: 'Iglesia PDP Sede Pueblo Viejo',
    description: 'Celebramos un año más de la Red Conexión con una noche especial. Únete a nosotros para conmemorar este momento tan importante.',
    type: 'Aniversario',
    featured: true,
    image: 'https://lh3.googleusercontent.com/d/1vnxQBu2F3UHW2d0TgpEJ4zcLNc8vZsFG'
  },
  {
    id: 2,
    title: 'Concierto René González',
    date: '2025-08-27',
    time: '6:30 PM',
    location: 'Sala Magna del Liceo de Santa Cruz',
    description: 'Una noche inolvidable con René González, uno de los exponentes más reconocidos de la música cristiana.',
    type: 'Concierto',
    featured: true,
    image: 'https://lh3.googleusercontent.com/d/1vnxQBu2F3UHW2d0TgpEJ4zcLNc8vZsFG'
  },
  {
    id: 3,
    title: 'Congreso de Música',
    date: '2025-11-15',
    time: '10:00 AM',
    location: 'Iglesia Central PDP San Joaquín',
    description: 'Un encuentro especial dedicado a la música cristiana con talleres, conferencias y momentos de adoración. Ideal para músicos y amantes de la música.',
    type: 'Congreso',
    featured: false,
    image: 'https://lh3.googleusercontent.com/d/1vnxQBu2F3UHW2d0TgpEJ4zcLNc8vZsFG'
  },
  {
    id: 4,
    title: 'Concierto Alex Zurdo',
    date: '2025-12-07',
    time: '3:00 PM',
    location: 'Polideportivo de Nicoya',
    description: 'Alex Zurdo llega a Costa Rica con su música llena de energía y mensaje. Una tarde que no te puedes perder con uno de los artistas más queridos del género urbano cristiano.',
    type: 'Concierto',
    featured: true,
    image: 'https://lh3.googleusercontent.com/d/1vnxQBu2F3UHW2d0TgpEJ4zcLNc8vZsFG'
  },
  {
    id: 5,
    title: 'Campamento Zonal Río Naranjo 2025',
    date: '2025-12-19',
    time: '5:00 PM',
    location: 'Río Naranjo de Upala',
    description: 'Tres días de campamento zonal del 19 al 21 de diciembre. Salida viernes 5:00 PM, regreso domingo 6:00 PM. Una experiencia de crecimiento espiritual en la naturaleza.',
    type: 'Campamento',
    featured: false,
    image: 'https://lh3.googleusercontent.com/d/1vnxQBu2F3UHW2d0TgpEJ4zcLNc8vZsFG'
  }
])

export function useEvents() {
  // Eventos destacados
  const featuredEvents = computed(() => 
    events.value.filter(event => event.featured)
  )

  // Próximos eventos (para el preview del home - los primeros 3)
  const upcomingEvents = computed(() => 
    events.value
      .filter(event => new Date(event.date + 'T00:00:00') >= new Date())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 3)
  )

  // Todos los eventos ordenados por fecha
  const allEvents = computed(() => 
    events.value
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  )

  // Funciones de utilidad para fechas
  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00')
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getDateForDisplay = (dateString: string) => {
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

  // Función para obtener un evento por ID
  const getEventById = (id: number) => {
    return events.value.find(event => event.id === id)
  }

  // Función para agregar un nuevo evento
  const addEvent = (event: Omit<Event, 'id'>) => {
    const newId = Math.max(...events.value.map(e => e.id)) + 1
    events.value.push({ ...event, id: newId })
  }

  // Función para actualizar un evento
  const updateEvent = (id: number, updatedEvent: Partial<Event>) => {
    const index = events.value.findIndex(event => event.id === id)
    if (index !== -1) {
      events.value[index] = { ...events.value[index], ...updatedEvent }
    }
  }

  // Función para eliminar un evento
  const deleteEvent = (id: number) => {
    const index = events.value.findIndex(event => event.id === id)
    if (index !== -1) {
      events.value.splice(index, 1)
    }
  }

  return {
    // Estado
    events,
    featuredEvents,
    upcomingEvents,
    allEvents,
    
    // Funciones de utilidad
    formatDate,
    getDateForDisplay,
    getEventTypeColor,
    
    // Funciones CRUD
    getEventById,
    addEvent,
    updateEvent,
    deleteEvent
  }
}
