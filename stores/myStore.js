//Vue 2 Option
// export const useCounterStore = defineStore("counter", {
//   state: () => ({ counter: 0, name: "maryna" }),
//   getters: {
//     doubleCounter: (state) => state.counter * 2,
//   },
//   actions: {
//     increment() {
//       this.counter++;
//     },
//   },
// });

//Vue3 compotion API
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("maryna");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
