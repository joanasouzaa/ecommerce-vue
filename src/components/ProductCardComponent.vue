<template>
  <div class="rounded-lg p-4 text-black shadow-md bg-gray-300 hover:transform hover:scale-105">
    <img :src="product.thumbnail" :alt="product.title" class="mx-auto mb-2 h-32 object-cover">
    <h2 class="text-center font-bold">{{ product.title }}</h2>
    <p class="text-center text-sm">R$ {{ product.price }}</p>
   <router-link
  :to="'/produto/' + product.id"
  class="flex justify-center mt-4 items-center bg-[#5F805F] text-white font-bold py-2 px-6 shadow rounded-lg hover:bg-blue-200"
>
  Ver Detalhes ✨
</router-link>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>
