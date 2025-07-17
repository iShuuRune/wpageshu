<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Imagen/Visual -->
        <div class="relative">
          <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl h-96 flex items-center justify-center">
            <div class="text-white text-center">
              <div class="text-6xl mb-4">🙏</div>
              <p class="text-xl font-semibold">Nuestra Comunidad</p>
            </div>
          </div>
          
          <!-- Elementos decorativos -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
          <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-400 rounded-full opacity-20"></div>
        </div>

        <!-- Contenido -->
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Acerca de
            <span class="text-blue-600">SHU</span>
          </h2>
          
          <p class="text-lg text-gray-600 mb-6 leading-relaxed">
            Somos una comunidad vibrante dedicada a compartir el amor de Dios y hacer una diferencia 
            positiva en nuestro mundo. Creemos en la importancia de la fe, la familia y la comunidad.
          </p>
          
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Nuestro propósito es crear un ambiente donde cada persona pueda experimentar el amor 
            incondicional de Dios y encontrar su lugar en nuestra familia de fe.
          </p>

          <!-- Estadísticas o puntos destacados -->
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div class="text-center p-4 bg-blue-50 rounded-lg">
              <div class="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <p class="text-gray-600">Miembros Activos</p>
            </div>
            
            <div class="text-center p-4 bg-purple-50 rounded-lg">
              <div class="text-3xl font-bold text-purple-600 mb-2">15</div>
              <p class="text-gray-600">Años de Servicio</p>
            </div>
            
            <div class="text-center p-4 bg-green-50 rounded-lg">
              <div class="text-3xl font-bold text-green-600 mb-2">3</div>
              <p class="text-gray-600">Ubicaciones</p>
            </div>
            
            <div class="text-center p-4 bg-yellow-50 rounded-lg">
              <div class="text-3xl font-bold text-yellow-600 mb-2">50+</div>
              <p class="text-gray-600">Programas</p>
            </div>
          </div>

          <RouterLink
            to="/quienes-somos"
            class="btn btn-outline btn-lg px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full font-semibold"
          >
            Conoce Más
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
