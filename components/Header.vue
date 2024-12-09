<template>
  <header class="bg-white shadow-md p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <a href="/" class="text-lg font-semibold text-gray-800">
        Portafolio de Macarena
      </a>
      <!-- Navegación -->
      <nav>
        <ul class="flex space-x-6">
          <li>
            <a href="#proyectos" class="text-gray-600 hover:text-black transition">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#sobre-mi" class="text-gray-600 hover:text-black transition">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#contacto" class="text-gray-600 hover:text-black transition">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
