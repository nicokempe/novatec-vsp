<template>
  <!--
    TODO: Add the industries
    TODO: Add the services
  -->
  <div class="bg-white">
    <div class="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8"> <!-- removed: py-16 sm:py-24 -->
      <Team></Team>
      <References></References>
    </div>
  </div>
</template>

<script>
import Team from '@/components/Team.vue';
import References from '@/components/References.vue';

 export default {
  components: {
    Team,
    References
  }
 }
</script>