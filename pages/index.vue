<template>
  <div>
    <Header />
    <main class="py-10 bg-gray-50">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">Mis Proyectos</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ProjectCard title="Proyecto 1" description="Este es un proyecto que hice usando Vue y Nuxt."
            image="/images/proyecto1.png" codeLink="https://github.com/usuario/proyecto1"
            demoLink="https://proyecto1-demo.com" />
          <ProjectCard title="Proyecto 2" description="Otro proyecto interesante que resuelve un problema específico."
            image="/images/proyecto2.png" codeLink="https://github.com/usuario/proyecto2"
            demoLink="https://proyecto2-demo.com" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import ProjectCard from '~/components/ProjectCard.vue';
</script>
