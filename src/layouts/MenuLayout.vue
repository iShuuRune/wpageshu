<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header class="sticky top-0 z-50" />
    
    <main class="flex-1">
      <RouterView />
    </main>
    
    <Footer />
  </div>
</template>
