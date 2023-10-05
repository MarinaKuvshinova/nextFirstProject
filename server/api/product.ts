import data from "./product.json";

let productCounter = 0;
//useAsyncData
export default async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(productCounter++);
    });
  });
  return {
    productCounter,
  };
};

//useLazyFetch
// export default defineEventHandler(async () => {
//   return new Promise<any>((resolve) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 2000);
//   });
// });

//useFetch
// export default defineEventHandler(() => {
//   return {
//     data,
//   };
// });
