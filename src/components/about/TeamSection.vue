<script setup lang="ts">
const teamMembers = [
  {
    name: 'Cristian',
    position: 'Pastor Principal',
    description: 'Con más de 15 años de experiencia en el ministerio, Cristian lidera nuestra iglesia con pasión y dedicación.',
    image: 'shu_cris.jpg'
  },
  {
    name: 'Arlyn',
    position: 'Directora de Ministerios',
    description: 'Arlyn coordina todos nuestros ministerios y programas comunitarios con gran amor y eficiencia.',
    image: 'shu_arlyn.jpg'
  },
  {
    name: 'Josa',
    position: 'Pastor de Jóvenes',
    description: 'Josa trabaja incansablemente con los jóvenes, inspirándolos a crecer en su fe y propósito.',
    image: 'shu_josa.jpg'
  },
  {
    name: 'Toto',
    position: 'Coordinador de Alabanza',
    description: 'Toto dirige nuestro equipo de alabanza, creando momentos de adoración transformadores.',
    image: 'shu_toto.jpg'
  },
  {
    name: 'Kelly',
    position: 'Coordinadora de Eventos',
    description: 'Kelly organiza y coordina todos nuestros eventos especiales y actividades comunitarias.',
    image: 'shu_kelly.jpg'
  },
  {
    name: 'Isra',
    position: 'Director de Comunicaciones',
    description: 'Isra se encarga de mantener a nuestra comunidad conectada e informada a través de diversos medios.',
    image: 'shu_isra.jpg'
  }
]
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Nuestro Equipo</h2>
        <p class="text-xl text-gray-600">Conoce a las personas que lideran nuestra comunidad</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div class="h-64 overflow-hidden">
            <img 
              :src="`/src/assets/${member.image}`"
              :alt="member.name"
              class="w-full h-full object-cover object-top"
              style="object-position: center 15%;"
            />
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">{{ member.name }}</h3>
            <p class="text-blue-600 font-medium mb-3">{{ member.position }}</p>
            <p class="text-gray-600 text-sm">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
