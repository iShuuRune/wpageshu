<script setup lang="ts">
const values = [
  {
    title: 'Fe',
    description: 'Creemos en el poder transformador de la fe y su capacidad para cambiar vidas.',
    icon: '✝️'
  },
  {
    title: 'Comunidad',
    description: 'Valoramos las relaciones auténticas y el apoyo mutuo entre hermanos.',
    icon: '🤝'
  },
  {
    title: 'Servicio',
    description: 'Estamos comprometidos a servir a nuestra comunidad y a los más necesitados.',
    icon: '❤️'
  },
  {
    title: 'Crecimiento',
    description: 'Promovemos el crecimiento espiritual, personal y emocional de cada persona.',
    icon: '🌱'
  }
]
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Nuestros Valores</h2>
        <p class="text-xl text-gray-600">Los principios que guían todo lo que hacemos</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="value in values"
          :key="value.title"
          class="text-center bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
        >
          <div class="text-4xl mb-4">{{ value.icon }}</div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">{{ value.title }}</h3>
          <p class="text-gray-600">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
