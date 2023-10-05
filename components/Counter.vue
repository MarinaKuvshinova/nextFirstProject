<template>
  <div class="flex gap-5">
    <span>Counter: {{ counter }}</span>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script>
const counter = useCounter();
</script>
