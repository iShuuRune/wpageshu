<script setup lang="ts">
import { RouterLink } from 'vue-router'

const scrollToNextSection = () => {
  const nextSection = document.getElementById('eventos-preview')
  if (nextSection) {
    nextSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background con imagen -->
    <div class="absolute inset-0">
      <!-- Imagen de fondo -->
      <img 
        src="@/assets/img_home.jpg" 
        alt="SHU Background" 
        class="w-full h-full object-cover object-center"
        style="object-position: center 10%;"
      />
    </div>

    <!-- Contenido principal -->
    <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
        "Cantamos juntos al único que 
        <br>
        merece toda gloria"
      </h1>
    </div>

    <!-- Logo en esquina inferior derecha -->
    <div class="absolute bottom-8 right-8 z-20">
      <img 
        src="@/assets/SHU_logo.png" 
        alt="SHU Logo" 
        class="h-16 w-auto opacity-90"
      />
    </div>

    <!-- Indicador de scroll -->
    <button 
      @click="scrollToNextSection"
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full p-2"
      aria-label="Desplazarse a la siguiente sección"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
</style>
