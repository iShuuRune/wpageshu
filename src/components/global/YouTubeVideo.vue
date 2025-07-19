<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  videoId: string
  title: string
  autoplay?: boolean
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: false
})

const embedUrl = computed(() => {
  const baseUrl = `https://www.youtube.com/embed/${props.videoId}`
  return props.autoplay ? `${baseUrl}?autoplay=1` : baseUrl
})
</script>

<template>
  <div class="w-full">
    <div class="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100">
      <iframe 
        :src="embedUrl"
        :title="title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="absolute inset-0 w-full h-full"
        loading="lazy"
      ></iframe>
    </div>
    
    <!-- Título y descripción opcional -->
    <div v-if="title || description" class="mt-4 text-center">
      <h3 v-if="title" class="text-xl font-semibold text-gray-800 mb-2">
        {{ title }}
      </h3>
      <p v-if="description" class="text-gray-600">
        {{ description }}
      </p>
    </div>
  </div>
</template>
