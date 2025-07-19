<script setup lang="ts">
import ContactInfo from '@/components/contact/ContactInfo.vue'
import SocialLinks from '@/components/contact/SocialLinks.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
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
          <ContactInfo />

          <!-- Redes Sociales -->
          <SocialLinks />
        </div>

        <!-- Formulario de Contacto -->
        <div class="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>
