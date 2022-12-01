<!-- 
  TODO: Better way for static components (meta data?)
-->
<template id="app">
  <Header v-if="hideStaticComponents === false" />
  <router-view/>
  <Footer v-if="hideStaticComponents === false" />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      hideStaticComponents: false,
      fullPage: false,
    }
  },
  watch: {
    '$route'(to) {
      if (to.path == '/404') {
        this.hideStaticComponents = true;
        this.fullPage = true;
      } else {
        this.hideStaticComponents = false;
        this.fullPage = false;
      }
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&family=Roboto&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  font-family: 'Roboto', sans-serif;
}

  #app {
    min-height: 100vh; 
    margin: 0; 
    display: grid;
    grid-template-rows: 1fr auto;
}
</style>