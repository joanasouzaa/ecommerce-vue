<template>
  <section class="text-center px-4">
    <h1 class="text-4xl font-bold mb-6 text-[#89b789]">Olá, você está no e-commerce da Joana!</h1>
 
    <router-link
      to="/catalogo"
      class="inline-block bg-[#b3d0b3] font-bold text-white py-3 px-6 rounded hover:bg-[#89b789] transition mb-12"
    >
      Catálogo de Produtos
    </router-link>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto ">
      <img 
        src="/src/assets/images/banner.jpg" 
        alt="Maquiagem" 
        class="w-full rounded-lg shadow hover:shadow-lg transition hover:scale-110"
      >
      <img 
        src="/src/assets/images/banner2.jpg" 
        alt="Plantas" 
        class="w-full rounded-lg shadow hover:shadow-lg transition hover:scale-110"
      >
      <img 
        src="/src/assets/images/banner3.jpg" 
        alt="Relógios" 
        class="w-full rounded-lg shadow hover:shadow-lg transition hover:scale-110"
      >
    </div>
  </section>
</template>
