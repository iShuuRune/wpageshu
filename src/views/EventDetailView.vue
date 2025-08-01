<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useEvents } from '@/composables/useEvents'
import EventHeroSection from '@/components/event/EventHeroSection.vue'
import EventDetails from '@/components/event/EventDetails.vue'
import EventInfoSidebar from '@/components/event/EventInfoSidebar.vue'
import EventImageModal from '@/components/event/EventImageModal.vue'

const route = useRoute()
const router = useRouter()
const { getEventById, formatDate, getDateForDisplay, getEventTypeColor } = useEvents()

const eventId = computed(() => parseInt(route.params.id as string))
const event = computed(() => getEventById(eventId.value))
const showImageModal = ref(false)

// Si el evento no existe, redirigir a la página de eventos
onMounted(() => {
  if (!event.value) {
    router.push('/eventos')
  }
})

const handleImageError = (errorEvent: any) => {
  const img = errorEvent.target as HTMLImageElement
  console.log('Error cargando imagen:', img.src)
  img.style.display = 'none'
  const container = img.parentElement
  if (container) {
    container.setAttribute('data-image-error', 'true')
  }
}

const shareEvent = () => {
  if (navigator.share) {
    navigator.share({
      title: event.value?.title,
      text: event.value?.description,
      url: window.location.href
    })
  } else {
    // Fallback: copiar al portapapeles
    navigator.clipboard.writeText(window.location.href)
    alert('Enlace copiado al portapapeles')
  }
}

const openImageModal = () => {
  showImageModal.value = true
}

const closeImageModal = () => {
  showImageModal.value = false
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <div v-if="event" class="min-h-screen bg-gray-50">
    <!-- Hero Section con Imagen -->
    <EventHeroSection 
      :event="event"
      :format-date="formatDate"
      :get-date-for-display="getDateForDisplay"
      :get-event-type-color="getEventTypeColor"
      @go-back="goBack"
      @image-error="handleImageError"
    />

    <!-- Contenido Principal -->
    <section class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Información Principal -->
          <div class="lg:col-span-2">
            <EventDetails 
              :event="event"
              :get-date-for-display="getDateForDisplay"
              @open-image-modal="openImageModal"
              @image-error="handleImageError"
            />
          </div>

          <!-- Sidebar con Información -->
          <EventInfoSidebar 
            :event="event"
            :format-date="formatDate"
            @share-event="shareEvent"
          />
        </div>
      </div>
    </section>
  </div>

  <!-- Si el evento no existe -->
  <div v-else class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Evento no encontrado</h1>
      <p class="text-gray-600 mb-8">El evento que buscas no existe o ha sido eliminado.</p>
      <RouterLink 
        to="/eventos"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
      >
        Ver Todos los Eventos
      </RouterLink>
    </div>
  </div>

  <!-- Modal de Imagen en Tamaño Completo -->
  <EventImageModal 
    v-if="event"
    :event="event"
    :show="showImageModal"
    @close="closeImageModal"
  />
</template>

<style scoped>
/* Estilos específicos del EventDetailView si son necesarios */
</style>
