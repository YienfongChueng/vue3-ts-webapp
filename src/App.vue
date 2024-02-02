<script setup lang="ts">
import NavTab from '@/views/NavTab.vue'
import { useStore } from 'vuex'
const store = useStore()
</script>

<template>
  <router-view></router-view>
  <nav-tab v-if="store.state.navShow"></nav-tab>
</template>

<style scoped>

</style>
