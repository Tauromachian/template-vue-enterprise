<template>
  <section>
    <h1>404</h1>
    <p>404 - Página no encontrada</p>
    <p>Lo sentimos, no hemos podido encontrar la página que buscas</p>
    <router-link :to="{ name: 'Home' }"></router-link>
  </section>
</template>

<script>
export default {
  name: '404',
}
</script>
