<script setup>
//можем получить доступ к параметрам пути везде в проекте
// const route = useRoute();
// console.log(route.params);

//получаем доступ к контексту проекта
// const nuxt = useNuxtApp();
// console.log(nuxt);
</script>

<template>
  <div>event id: {{ $route.params.id }}</div>
</template>
