<template>
  <div class="flex justify-center gap-6 mt-8">
    <button @click="$emit('anterior')" class="p-2 rounded-md bg-transparent text-black shadow hover:bg-[#89b789] hover:text-white transition">Anterior</button>
    <button @click="$emit('proximo')" class="p-2 rounded-md bg-transparent text-black shadow hover:bg-[#89b789] hover:text-white transition">Próximo</button>
  </div>
</template>
