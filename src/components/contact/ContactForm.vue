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
</script>

<template>
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
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white text-gray-900"
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
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white text-gray-900"
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
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white text-gray-900"
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
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white text-gray-900"
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
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none bg-white text-gray-900"
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
</template>
