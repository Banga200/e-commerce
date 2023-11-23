<script setup>
import { RouterView } from 'vue-router'
import { useProductsStore } from './stores/products';
import {onMounted} from 'vue';
const store = useProductsStore();

onMounted(() => {
  store.getAllProducts();
})

</script>

<template>
  <header>
    <h1 class="title">Banakita</h1>
  </header>
  <RouterView />
</template>

