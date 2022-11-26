<!-- 
  Make the static components optional
-->
<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&family=Roboto&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  font-family: 'Roboto', sans-serif;
}
</style>