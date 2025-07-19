<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import EventsPreview from '@/components/home/EventsPreview.vue'
import YouTubeVideo from '@/components/global/YouTubeVideo.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import BlogPreview from '@/components/home/BlogPreview.vue'
</script>

<template>
  <div>
    <HeroSection />
    <EventsPreview />
    
    <!-- Sección de Video Destacado -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Conoce Nuestra Comunidad
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre lo que significa ser parte de Solo Hay UNO y cómo vivimos nuestra fe juntos.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <YouTubeVideo 
            video-id="Q7acWLojc4c"
            title="Solo Hay UNO - Nuestra Historia"
            description="Un vistazo a nuestra comunidad de fe y cómo Dios nos ha bendecido."
          />
        </div>
      </div>
    </section>
    
    <AboutSection />
    <BlogPreview />
  </div>
</template>
