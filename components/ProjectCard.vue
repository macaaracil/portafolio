<template>
  <div class="p-6 rounded-lg shadow-lg bg-white flex flex-col items-center">
    <img :src="image" :alt="title" class="w-32 h-32 object-cover rounded-full mb-4" />
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
    <div class="flex space-x-4">
      <a :href="codeLink" target="_blank" class="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600">Ver
        Código</a>
      <a :href="demoLink" target="_blank"
        class="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600">Ver Demo</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  codeLink: String,
  demoLink: String,
});
</script>
