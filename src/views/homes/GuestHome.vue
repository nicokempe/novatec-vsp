<!--
  TODO: Add the industries
  TODO: Add the services
-->
<template>
  <div class="mx-auto max-w-2xl py-16 px-12 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-800">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <video autoplay muted loop>
          <source :src="video" type="video/mp4">
        </video>
      <div class="mt-48 bg-gray-600">
        <CareerAtNovatec></CareerAtNovatec>
      </div>
    </div>
  </div>
</template>
  
<script>
import CareerAtNovatec from '@/components/CareerAtNovatec.vue'

export default {
  components: {
    CareerAtNovatec
  },
  data() {
    return {
      video: require('@/assets/videos/novatec-company-presentation.mp4')
    }
  }
}
</script>