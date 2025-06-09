<template>
  <nav class="bg-[#89B789] text-white py-4 px-8 border-b">
    <div class="flex justify-between items-center">
      <router-link to="/">
        <h1 class="text-lg font-bold">E-commerce da Joana 💫</h1>
      </router-link>

      <div class="items-center justify-center m-auto text-black">
        <input v-model="search" 
        @input="$emit('search', search)" 
        type="text" 
        placeholder="Buscar produtos..."
        class="border p-2 rounded w-80" />
      </div>

      <ul class="flex gap-6 items-center">
        <li>
          <router-link to="/" class="hover:underline flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6 ">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span class="font-bold">Minha Conta</span>
          </router-link>
        </li>
        <li>
          <router-link to="/catalogo" class="hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <CategoryMenuComponent @selecionar-categoria="selecionarCategoria" />
</template>
<script setup>
import { ref } from 'vue'
import CategoryMenuComponent from './CategoryMenuComponent.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'  

const search = ref('')
const router = useRouter()  


const selecionarCategoria = (categoria) => {
  router.push(`/categoria/${categoria}`) 
}

// Função de busca de produtos
const searchProducts = async (query) => {
  searchTerm.value = query.trim()

  if (!query) {
    isSearching.value = false
    skip.value = 0
    fetchProducts()
    return
  }

  isSearching.value = true

  const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
  products.value = response.data.products
  totalPages.value = 1
  currentPage.value = 1
}
</script>
