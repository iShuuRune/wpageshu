<script setup lang="ts">
import { ref, computed } from 'vue'

const blogPosts = ref([
  {
    id: 1,
    title: 'La Importancia de la Oración en Nuestras Vidas',
    excerpt: 'Descubre cómo la oración puede transformar tu vida diaria y fortalecer tu relación con Dios. En este artículo exploramos diferentes formas de oración y su impacto en nuestro crecimiento espiritual.',
    content: 'La oración es mucho más que palabras dirigidas al cielo...',
    author: 'Pastor Juan',
    date: '2025-07-10',
    readTime: '5 min',
    category: 'Espiritualidad',
    featured: true
  },
  {
    id: 2,
    title: 'Construyendo Comunidad en Tiempos Modernos',
    excerpt: 'Exploramos formas prácticas de mantener conexiones genuinas en nuestra comunidad en una era digital.',
    content: 'En un mundo cada vez más conectado digitalmente...',
    author: 'María González',
    date: '2025-07-08',
    readTime: '7 min',
    category: 'Comunidad',
    featured: false
  },
  {
    id: 3,
    title: 'Jóvenes y Fe: Navegando Desafíos Actuales',
    excerpt: 'Consejos para los jóvenes sobre cómo mantener su fe en el mundo actual lleno de desafíos.',
    content: 'Los jóvenes de hoy enfrentan desafíos únicos...',
    author: 'Carlos Ruiz',
    date: '2025-07-05',
    readTime: '6 min',
    category: 'Jóvenes',
    featured: true
  },
  {
    id: 4,
    title: 'La Gratitud Como Estilo de Vida',
    excerpt: 'Cómo cultivar un corazón agradecido puede transformar nuestra perspectiva y relaciones.',
    content: 'La gratitud es más que un sentimiento...',
    author: 'Ana Morales',
    date: '2025-07-03',
    readTime: '4 min',
    category: 'Crecimiento Personal',
    featured: false
  },
  {
    id: 5,
    title: 'Servir a Otros: El Corazón del Evangelio',
    excerpt: 'Reflexiones sobre la importancia del servicio y cómo podemos impactar positivamente a nuestra comunidad.',
    content: 'El servicio a otros es fundamental...',
    author: 'Pastor Juan',
    date: '2025-07-01',
    readTime: '8 min',
    category: 'Servicio',
    featured: false
  }
])

const categories = ref(['Todos', 'Espiritualidad', 'Comunidad', 'Jóvenes', 'Crecimiento Personal', 'Servicio'])
const selectedCategory = ref('Todos')

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return blogPosts.value
  }
  return blogPosts.value.filter(post => post.category === selectedCategory.value)
})

const featuredPosts = computed(() => {
  return blogPosts.value.filter(post => post.featured)
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getCategoryColor = (category: string) => {
  const colors = {
    'Espiritualidad': 'bg-blue-500',
    'Comunidad': 'bg-green-500',
    'Jóvenes': 'bg-purple-500',
    'Crecimiento Personal': 'bg-yellow-500',
    'Servicio': 'bg-red-500'
  }
  return colors[category as keyof typeof colors] || 'bg-gray-500'
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <!-- Header -->
    <div class="container mx-auto px-4 mb-12">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Blog y Reflexiones
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Inspiración, enseñanzas y reflexiones para nutrir tu alma y fortalecer tu fe
        </p>
      </div>
    </div>

    <!-- Artículos Destacados -->
    <section class="container mx-auto px-4 mb-16">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Artículos Destacados</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <article
          v-for="post in featuredPosts"
          :key="post.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div class="h-48 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center relative">
            <div class="text-white text-center">
              <div class="text-4xl mb-2">📝</div>
              <span :class="`px-3 py-1 rounded-full text-sm font-medium text-white ${getCategoryColor(post.category)}`">
                {{ post.category }}
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">{{ post.title }}</h3>
            <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>

            <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span class="text-xs font-semibold">{{ post.author.charAt(0) }}</span>
                </div>
                <span>{{ post.author }}</span>
              </div>
              <span>{{ post.readTime }}</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-400">{{ formatDate(post.date) }}</span>
              <button class="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                Leer Completo
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Filtros de Categorías -->
    <section class="container mx-auto px-4 mb-8">
      <div class="flex flex-wrap justify-center gap-3">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <!-- Todos los Artículos -->
    <section class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">
        {{ selectedCategory === 'Todos' ? 'Todos los Artículos' : `Categoría: ${selectedCategory}` }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="post in filteredPosts"
          :key="post.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="h-40 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center relative">
            <div class="text-white text-center">
              <div class="text-3xl mb-2">📖</div>
            </div>
            <span :class="`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(post.category)}`">
              {{ post.category }}
            </span>
          </div>

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{{ post.title }}</h3>
            <p class="text-gray-600 text-sm mb-3 line-clamp-3">{{ post.excerpt }}</p>

            <div class="flex items-center justify-between text-xs text-gray-500 mb-3">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <span class="text-xs font-semibold">{{ post.author.charAt(0) }}</span>
                </div>
                <span>{{ post.author }}</span>
              </div>
              <span>{{ post.readTime }}</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-400">{{ formatDate(post.date) }}</span>
              <button class="text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline">
                Leer más →
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
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
