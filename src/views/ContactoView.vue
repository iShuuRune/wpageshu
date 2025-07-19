<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

// Número de WhatsApp de SHU (cambiar por el número real)
const whatsappNumber = '50685812895' // +506 8581 2895 sin espacios ni símbolos

const getSubjectText = (value: string) => {
  const subjects = {
    'informacion-general': 'Información General',
    'eventos': 'Eventos',
    'voluntariado': 'Voluntariado',
    'oracion': 'Petición de Oración',
    'otro': 'Otro'
  }
  return subjects[value as keyof typeof subjects] || value
}

const generateWhatsAppMessage = () => {
  let message = `¡Hola SHU! 👋\n\n`
  message += `*Nombre:* ${form.value.name}\n`
  
  if (form.value.email) {
    message += `*Email:* ${form.value.email}\n`
  }
  
  if (form.value.phone) {
    message += `*Teléfono:* ${form.value.phone}\n`
  }
  
  message += `*Asunto:* ${getSubjectText(form.value.subject)}\n\n`
  message += `*Mensaje:*\n${form.value.message}\n\n`
  message += `_Enviado desde la página web de SHU 🎵_`
  
  return encodeURIComponent(message)
}

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simular preparación del mensaje
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Generar el mensaje de WhatsApp
  const whatsappMessage = generateWhatsAppMessage()
  
  // Crear URL de WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  
  // Abrir WhatsApp
  window.open(whatsappUrl, '_blank')
  
  // Resetear formulario después de un momento
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    isSubmitting.value = false
  }, 1000)
}

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

const schedules = [
  { day: 'Domingo', time: '10:00 AM - 12:00 PM', event: 'Servicio Principal' },
  { day: 'Miércoles', time: '7:30 PM - 9:00 PM', event: 'Estudio Bíblico' },
  { day: 'Viernes', time: '7:00 PM - 9:00 PM', event: 'Noche de Jóvenes' },
  { day: 'Sábado', time: '6:00 PM - 8:00 PM', event: 'Servicio de Oración' }
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <!-- Header -->
    <div class="container mx-auto px-4 mb-12">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Contáctanos
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Estamos aquí para ti. No dudes en contactarnos para cualquier consulta o para conocer más sobre nuestra comunidad.
        </p>
      </div>
    </div>

    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Información de Contacto -->
        <div class="lg:col-span-1 space-y-8">
          <!-- Datos de Contacto -->
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

          <!-- Horarios -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Horarios de Servicios</h2>
            <div class="space-y-4">
              <div
                v-for="schedule in schedules"
                :key="schedule.day"
                class="border-l-4 border-blue-500 pl-4 py-2"
              >
                <h3 class="font-semibold text-gray-800">{{ schedule.day }}</h3>
                <p class="text-blue-600 font-medium">{{ schedule.time }}</p>
                <p class="text-gray-600 text-sm">{{ schedule.event }}</p>
              </div>
            </div>
          </div>

          <!-- Redes Sociales -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Síguenos</h2>
            <div class="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61552521511259"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <span class="sr-only">Facebook</span>
                <svg class="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@SolohayUNO-gf9px"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
              >
                <span class="sr-only">YouTube</span>
                <svg class="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/solohayunocr/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors duration-200"
              >
                <span class="sr-only">Instagram</span>
                <svg class="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Formulario de Contacto -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>
            <p class="text-gray-600 mb-8">
              Completa el formulario y te redirigiremos a WhatsApp con tu mensaje listo para enviar. 
              ¡Recibiremos tu consulta inmediatamente! 📱
            </p>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="+506 8123 4567"
                  />
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <select
                    id="subject"
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="informacion-general">Información General</option>
                    <option value="eventos">Eventos</option>
                    <option value="voluntariado">Voluntariado</option>
                    <option value="oracion">Petición de Oración</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg
                  v-if="isSubmitting"
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                
                <!-- Ícono de WhatsApp cuando no está cargando -->
                <svg
                  v-if="!isSubmitting"
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
                
                {{ isSubmitting ? 'Preparando mensaje...' : 'Enviar por WhatsApp' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
