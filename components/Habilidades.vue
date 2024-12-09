<script>
export default {
  name: "Habilidades",
};
</script>


<template>
  <section id="habilidades" class="py-12 bg-gray-50">
    <div class="container mx-auto text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-8">Mis Habilidades</h2>

      <!-- Tecnologías -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-white shadow rounded-lg p-4">
          <h3 class="text-lg font-semibold text-gray-800">HTML5</h3>
          <p class="text-sm text-gray-600">Marcado semántico y limpio.</p>
        </div>
        <div class="bg-white shadow rounded-lg p-4">
          <h3 class="text-lg font-semibold text-gray-800">CSS3</h3>
          <p class="text-sm text-gray-600">Diseños modernos y responsivos.</p>
        </div>
        <div class="bg-white shadow rounded-lg p-4">
          <h3 class="text-lg font-semibold text-gray-800">JavaScript</h3>
          <p class="text-sm text-gray-600">Interactividad en el front-end.</p>
        </div>
        <div class="bg-white shadow rounded-lg p-4">
          <h3 class="text-lg font-semibold text-gray-800">Vue.js</h3>
          <p class="text-sm text-gray-600">Framework para interfaces dinámicas.</p>
        </div>
        <div class="bg-white shadow rounded-lg p-4">
          <h3 class="text-lg font-semibold text-gray-800">TailwindCSS</h3>
          <p class="text-sm text-gray-600">Estilos rápidos y personalizables.</p>
        </div>
        <div class="bg-white shadow rounded-lg p-4">
          <h3 class="text-lg font-semibold text-gray-800">Git</h3>
          <p class="text-sm text-gray-600">Control de versiones y colaboración.</p>
        </div>
      </div>

      <!-- Habilidades Blandas -->
      <h3 class="text-xl font-bold text-gray-800 mb-4">Habilidades Blandas</h3>
      <ul class="flex justify-center flex-wrap space-x-4 text-gray-600">
        <li class="bg-gray-100 py-2 px-4 rounded-lg shadow">Resolutiva</li>
        <li class="bg-gray-100 py-2 px-4 rounded-lg shadow">Proactiva</li>
        <li class="bg-gray-100 py-2 px-4 rounded-lg shadow">Aprendiz Rápida</li>
        <li class="bg-gray-100 py-2 px-4 rounded-lg shadow">Adaptable</li>
      </ul>
    </div>
  </section>
</template>
