<script setup lang="ts">
import HeroAbout from '@/components/about/HeroAbout.vue'
import HistorySection from '@/components/about/HistorySection.vue'
import TimelineSection from '@/components/about/TimelineSection.vue'
import ValuesSection from '@/components/about/ValuesSection.vue'
import TeamSection from '@/components/about/TeamSection.vue'
import JoinUsSection from '@/components/about/JoinUsSection.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeroAbout />
    <HistorySection />
    <TimelineSection />
    <ValuesSection />
    <TeamSection />
    <JoinUsSection />
  </div>
</template>
