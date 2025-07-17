<script setup lang="ts">
const milestones = [
  { year: '2010', event: 'Fundación de SHU con 20 miembros fundadores' },
  { year: '2013', event: 'Primera expansión - Inauguración del segundo campus' },
  { year: '2016', event: 'Lanzamiento de programas juveniles y comunitarios' },
  { year: '2019', event: 'Apertura del tercer campus y programas digitales' },
  { year: '2022', event: 'Celebración de 500+ miembros activos' },
  { year: '2025', event: 'Continúa nuestro crecimiento y servicio a la comunidad' }
]
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Nuestro Camino</h2>
        <p class="text-xl text-gray-600">Momentos importantes en nuestra historia</p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Línea vertical -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300"></div>
          
          <div class="space-y-8">
            <div
              v-for="milestone in milestones"
              :key="milestone.year"
              class="relative flex items-center"
            >
              <!-- Punto en la línea -->
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                {{ milestone.year }}
              </div>
              
              <!-- Contenido -->
              <div class="ml-8 bg-white rounded-lg shadow-md p-6 flex-1">
                <p class="text-gray-800 font-medium">{{ milestone.event }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
