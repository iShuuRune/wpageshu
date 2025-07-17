<script setup lang="ts">
import { RouterLink } from 'vue-router'

const blogPosts = [
  {
    id: 1,
    title: 'La Importancia de la Oración en Nuestras Vidas',
    excerpt: 'Descubre cómo la oración puede transformar tu vida diaria y fortalecer tu relación con Dios.',
    author: 'Pastor Juan',
    date: '2025-07-10',
    readTime: '5 min',
    category: 'Espiritualidad'
  },
  {
    id: 2,
    title: 'Construyendo Comunidad en Tiempos Modernos',
    excerpt: 'Exploramos formas prácticas de mantener conexiones genuinas en nuestra comunidad.',
    author: 'María González',
    date: '2025-07-08',
    readTime: '7 min',
    category: 'Comunidad'
  },
  {
    id: 3,
    title: 'Jóvenes y Fe: Navegando Desafíos Actuales',
    excerpt: 'Consejos para los jóvenes sobre cómo mantener su fe en el mundo actual.',
    author: 'Carlos Ruiz',
    date: '2025-07-05',
    readTime: '6 min',
    category: 'Jóvenes'
  }
]

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Blog y Reflexiones
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Mantente conectado con inspiración, enseñanzas y reflexiones que nutren el alma
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <article
          v-for="post in blogPosts"
          :key="post.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Header de la tarjeta -->
          <div class="h-48 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center relative">
            <div class="text-white text-center">
              <div class="text-4xl mb-2">📖</div>
              <span class="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                {{ post.category }}
              </span>
            </div>
          </div>

          <!-- Contenido -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
              {{ post.title }}
            </h3>
            
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ post.excerpt }}
            </p>

            <!-- Meta información -->
            <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span class="text-xs font-semibold">{{ post.author.charAt(0) }}</span>
                </div>
                <span>{{ post.author }}</span>
              </div>
              <span>{{ post.readTime }}</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-400">{{ formatDate(post.date) }}</span>
              <button class="text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline">
                Leer más →
              </button>
            </div>
          </div>
        </article>
      </div>

      <div class="text-center">
        <RouterLink
          to="/blog"
          class="btn btn-primary btn-lg px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold"
        >
          Ver Todos los Artículos
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
