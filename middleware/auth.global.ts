export default defineNuxtRouteMiddleware((to, from) => {
  // const isLoggedIn = false;
  // if (isLoggedIn) {
  //   return navigateTo(to.fullPath);
  // }
  // return navigateTo("/login");

  //to is destination
  console.log(to);
  console.log(from);
});
