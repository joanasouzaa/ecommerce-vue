<template>
  <div class="bg-[#B3D0B3] shadow p-6 rounded-lg">
    <aside class="w-48">
      <h2 class="text-lg font-bold mb-2 align-itens text-center text-white">Categories</h2>

      <div class="bg-white shadow px-4 py-2 mt-6 rounded-lg text-blue-600 hover:underline capitalize">
        <button @click="$emit('selectCategory', '')">All</button>
      </div>

      <ul>
        <li v-for="category in categories" :key="category">
          <div class="bg-white shadow px-4 py-2 mb-6 mt-6 rounded-lg align-itens">
            <button
              @click="$emit('select-category', category)"
              class="text-blue-600 hover:underline capitalize"
            >
              {{ category.replace('-', ' ') }}
            </button>
          </div>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script setup>
defineProps({
  categories: Array
})
</script>
