<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ProductCardComponent
      v-for="p in products"
      :key="p.id"
      :product="p"
    />
  </div>
</template>

<script setup>
import ProductCardComponent from './ProductCardComponent.vue'

defineProps({
  products: Array
})
</script>
