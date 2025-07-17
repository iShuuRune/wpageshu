<script setup lang="ts">
const teamMembers = [
  {
    name: 'Cristian',
    position: 'Bajo',
    description: 'Con su sólida base musical y años de experiencia, Cristian aporta el ritmo fundamental que sostiene toda la banda con su bajo.',
    image: 'shu_cris.jpg'
  },
  {
    name: 'Arlyn',
    position: 'Coro y Líder de la Banda',
    description: 'Arlyn combina su hermosa voz en el coro con su liderazgo excepcional, coordinando y dirigiendo a toda la banda durante los ensayos y presentaciones.',
    image: 'shu_arlyn.jpg'
  },
  {
    name: 'Josa',
    position: 'Batería',
    description: 'Josa mantiene el corazón rítmico de la banda, proporcionando la energía y el tempo que impulsa cada canción con su pasión por la batería.',
    image: 'shu_josa.jpg'
  },
  {
    name: 'Toto',
    position: 'Guitarra Eléctrica y Líder de la Banda',
    description: 'Toto lidera la banda con su guitarra eléctrica, creando melodías poderosas y dirigiendo musicalmente cada momento de adoración con carisma y talento.',
    image: 'shu_toto.jpg'
  },
  {
    name: 'Kelly',
    position: 'Teclado y Voz',
    description: 'Kelly enriquece cada canción con sus melodías al teclado y su voz angelical, aportando armonías y texturas musicales que elevan la adoración.',
    image: 'shu_kelly.jpg'
  },
  {
    name: 'Isra',
    position: 'Guitarra Acústica',
    description: 'Isra toca la guitarra acústica con una sensibilidad especial, creando atmósferas íntimas y acompañamientos perfectos que complementan cada momento musical.',
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
              :src="`/${member.image}`"
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
