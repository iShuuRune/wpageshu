<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useMenu } from '@/composables/useMenu'

const { isMenuOpen, toggleMenu, closeMenu } = useMenu()

const navigationItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Eventos', path: '/eventos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contacto', path: '/contacto' },
  { name: 'Quienes Somos', path: '/quienes-somos' }
]
</script>

<template>
  <header class="bg-white shadow-lg relative z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <RouterLink to="/" class="flex items-center" @click="closeMenu">
            <img 
              src="@/assets/SHU_logo.png" 
              alt="SHU Logo" 
              class="h-10 w-auto"
            />
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            active-class="text-blue-600 font-semibold"
          >
            {{ item.name }}
          </RouterLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          :class="{ 'space-y-0': isMenuOpen }"
        >
          <span
            class="block w-6 h-0.5 bg-gray-800 transition-all duration-300"
            :class="{ 'rotate-45 translate-y-1': isMenuOpen }"
          ></span>
          <span
            class="block w-6 h-0.5 bg-gray-800 transition-all duration-300"
            :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span
            class="block w-6 h-0.5 bg-gray-800 transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-1': isMenuOpen }"
          ></span>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav
        class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        :class="isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'"
      >
        <div class="flex flex-col space-y-2 pt-2">
          <RouterLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            @click="closeMenu"
            class="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            active-class="text-blue-600 bg-blue-50 font-semibold"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  color: rgb(37 99 235);
  font-weight: 600;
}
</style>
