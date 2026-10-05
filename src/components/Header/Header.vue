<script setup>
import Nav from '@/components/Header/Nav.vue'
import Over from '@/components/Header/Over.vue'
</script>

<template>
  <header class="header">
    <Nav />
    <Over />
  </header>
</template>

<style scoped>
.header {
  background-color: #FDDDCF;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>