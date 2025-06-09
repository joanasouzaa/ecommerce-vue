<template>
  <div class="relative bg-[#89B789] w-full border-b py-2">
    <div class="flex items-center px-4 gap-4 overflow-x-auto hide-scrollbar justify-around">
      <button
        @click="mostrarTodas = !mostrarTodas"
        class="font-semibold text-sm text-gray-700 hover:underline whitespace-nowrap"
      >
        ☰ Todas Categorias
      </button>

    /*  <button
        v-for="(cat, index) in categoriasLimitadas"
        :key="index"
        class="text-sm font-medium text-gray-700 hover:underline whitespace-nowrap capitalize"
        @click="$emit('selecionar-categoria', cat)"
      >
        {{ cat.replace('-', ' ') }}
      </button>
    </div>
*/
    <div
      v-if="mostrarTodas"
      class="absolute bg-white shadow-md rounded-lg p-4 z-50 mt-2 w-64 border capitalize "
    >
      <h3 class="font-semibold mb-2 text-center">Categorias</h3>
      <ul class="grid grid-cols-2 gap-2 text-sm">
        <li
          v-for="(cat, index) in categorias"
          :key="index"
          class="cursor-pointer text-center hover:underline hover:bg-[#89B789] hover:rounded-md hover:p-1 hover:text-white"
          @click="$emit('selecionar-categoria', cat); mostrarTodas = false"
        >
          {{ cat.replace('-', ' ') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const mostrarTodas = ref(false)
const categorias = ref([])         
const categoriasLimitadas = ref([]) 

onMounted(async () => {
  try {
    
    const res = await axios.get('https://dummyjson.com/products/categories') 
    categorias.value = res.data     
    categoriasLimitadas.value = categorias.value.slice(0, 5) 
  } catch (error) {
    console.error('Erro ao buscar categorias:', error)
  }
})
</script>
