<template>
  <div>home</div>
  <div id="main" class="flex gap-5">
    <span>Counter: {{ counter }}</span>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>

  <div>
    <!-- for fetch -->
    <!-- <p>{{ pending ? "loading" : product }}</p> -->
    <p>{{ pending ? "loading" : productCounter }}</p>
    <button @click="refresh">refresh</button>
  </div>

  <!-- doesn't work -->
  <!-- <Counter id="counter2" /> -->

  <div>------------------</div>
  <span>{{ data }}</span>
  <div>------------------</div>
  <ContentDoc />
  <Profile></Profile>
  <IconsBell />
  <!-- <img src="~/assets/images/img1.jpg" alt="" /> -->
  <img src="@/assets/images/img1.jpg" alt="" />
  <img src="/img1.jpg" alt="" />
</template>

<script setup>
import { useCounterStore } from "~/stores/myStore";
const store = useCounterStore();
console.log(store);

const { data } = await useFetch("/api/hello");

const { sayHello } = useUtils();
sayHello();
const { $sayHello } = useNuxtApp();
$sayHello("my message");

definePageMeta({
  middleware: "auth",
});

// const counter = useState("counter", () => Math.round(Math.random() * 1000));
const counter = useCounter();

//work with api
// const { data: product } = await useFetch("/api/product", {
//   transform: (_product) => _product.data,
// } - just for useFetch
// const { data: product, pending } = await useLazyFetch("/api/product");
// console.log(toRaw(product.value));
// console.log(product.value);

const { data: productCounter, pending } = await useAsyncData("product", () =>
  $fetch("/api/product")
);
const refresh = () => refreshNuxtData("product");

useHead({
  title: "hello",
  meta: [
    {
      name: "description",
      content: "hello word2",
    },
  ],
});
</script>
