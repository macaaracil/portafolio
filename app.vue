<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <section class="text-center py-12 bg-gray-100">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Hola, soy Macarena</h1>
      <p class="text-lg text-gray-600">
        Desarrolladora frontend enfocada en crear soluciones limpias y funcionales.
      </p>
    </section>

    <!-- Proyectos -->
    <section id="proyectos" class="py-12">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Proyectos</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded-lg shadow">
            <h3 class="text-lg font-bold text-gray-800">Proyecto 1</h3>
            <p class="text-sm text-gray-600">Descripción breve del proyecto.</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow">
            <h3 class="text-lg font-bold text-gray-800">Proyecto 2</h3>
            <p class="text-sm text-gray-600">Descripción breve del proyecto.</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow">
            <h3 class="text-lg font-bold text-gray-800">Proyecto 3</h3>
            <p class="text-sm text-gray-600">Descripción breve del proyecto.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre mí -->
    <section id="sobre-mi" class="py-12 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Sobre mí</h2>
        <p class="text-lg text-gray-600 p-10">



          "Soy una desarrolladora frontend en formación, apasionada por el aprendizaje constante y con un enfoque
          resolutivo para superar desafíos. Aunque soy nueva en el mundo del desarrollo, me motiva el poder crear
          soluciones efectivas y funcionales que aporten valor. Me caracterizo por mi capacidad de adaptarme
          rápidamente, aprender de forma autodidacta y buscar siempre maneras de mejorar. Estoy entusiasmada por
          encontrar nuevas oportunidades que me permitan seguir creciendo profesionalmente y aplicar mis conocimientos
          en proyectos innovadores."


        </p>
      </div>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Contacto</h2>
        <p class="text-lg text-gray-600">
          Estoy disponible para nuevos proyectos. ¡Contáctame!
        </p>
        <a href="mailto:macarena.frontend@email.com"
          class="bg-gray-800 text-white py-2 px-4 rounded-lg mt-4 inline-block hover:bg-gray-700">
          Enviar Correo
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
