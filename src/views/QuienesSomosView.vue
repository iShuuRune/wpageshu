<script setup lang="ts">
import HeroAbout from '@/components/about/HeroAbout.vue'
import HistorySection from '@/components/about/HistorySection.vue'
import TimelineSection from '@/components/about/TimelineSection.vue'
import YouTubeVideo from '@/components/global/YouTubeVideo.vue'
import ValuesSection from '@/components/about/ValuesSection.vue'
import TeamSection from '@/components/about/TeamSection.vue'
import JoinUsSection from '@/components/about/JoinUsSection.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeroAbout />
    <HistorySection />
    <TimelineSection />
    
    <!-- Sección de Video Testimonial -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Testimonios de Fe
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Escucha cómo Dios ha transformado vidas en nuestra comunidad y cómo seguimos creciendo juntos en fe.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <YouTubeVideo 
            video-id="Q7acWLojc4c"
            title="Testimonios de Nuestra Comunidad"
            description="Historias reales de transformación y esperanza en Solo Hay UNO."
          />
        </div>
      </div>
    </section>
    
    <ValuesSection />
    <TeamSection />
    <JoinUsSection />
  </div>
</template>
