<template>
  <div class="flex gap-8">
    <CategoriesComponent
      :categories="categories"
      @selectCategory="selectCategory"
    />

    <div class="flex-1">
      <!-- SearchComponent @search="searchProducts" (to be implemented) -->
      <ProductGridComponent :products="products" />
      <PaginationComponent
        v-if="!isSearching"
        :currentPage="currentPage"
        :totalPages="totalPages"
        @previous="previousPage"
        @next="nextPage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import ProductGridComponent from '../components/ProductGridComponent.vue'
import PaginationComponent from '../components/PaginationComponent.vue'
import CategoriesComponent from '../components/CategoriesComponent.vue'

const products = ref([])
const categories = ref([])
const selectedCategory = ref('')
const searchTerm = ref('')
const skip = ref(0)
const limit = 28

const currentPage = ref(1)
const totalPages = ref(1)
const isSearching = ref(false)

const fetchProducts = async () => {
  const url = selectedCategory.value ? `https://dummyjson.com/products/category/${selectedCategory.value}?limit=${limit}&skip=${skip.value}` : `https://dummyjson.com/products?limit=${limit}&skip=${skip.value}`

  const response = await axios.get(url)
  products.value = response.data.products

  // Atualiza paginação apenas fora da busca
  if (!isSearching.value) {
    totalPages.value = Math.ceil(response.data.total / limit)
    currentPage.value = skip.value / limit + 1
  }
}

const fetchCategories = async () => {
  const response = await axios.get('https://dummyjson.com/products/categories')
  categories.value = response.data.map(c => typeof c === 'string' ? c : c.slug)
}

const searchProducts = async (query) => {
  searchTerm.value = query

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

const selectCategory = (category) => {
  selectedCategory.value = category
  skip.value = 0
  isSearching.value = false
  fetchProducts()
}

const previousPage = () => {
  if (skip.value > 0) {
    skip.value -= limit
    fetchProducts()
  }
}

const nextPage = () => {
  skip.value += limit
  fetchProducts()
}

onMounted(() => {
  fetchProducts()
  fetchCategories()
})
</script>
