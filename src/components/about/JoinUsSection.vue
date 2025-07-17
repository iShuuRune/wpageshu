<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="py-16 bg-blue-600 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-6">Únete a Nuestra Familia</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">
        No importa de dónde vengas o cuál sea tu trasfondo, hay un lugar para ti en SHU. 
        Ven y descubre cómo puedes ser parte de esta increíble comunidad.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button class="btn btn-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-semibold min-w-48">
          Visítanos el Domingo
        </button>
        <RouterLink
          to="/contacto"
          class="btn btn-outline btn-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full font-semibold min-w-48"
        >
          Contáctanos
        </RouterLink>
      </div>
    </div>
  </section>
</template>
