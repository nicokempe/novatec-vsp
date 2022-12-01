<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-12 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
      <LocationHead :siteName="siteNameData" :siteLocation='siteLocationData' :siteCreated='siteCreatedData' :siteEmployees="siteEmployeesData" :applicationFilter='applicationFilterData'></LocationHead>
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <video autoplay muted loop>
          <source :src="video" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import LocationHead from '@/components/LocationHead';

export default {
components: {
  LocationHead
},
data() {
  return {
    siteNameData: 'Leinfelden-Echterdingen',
    siteLocationData: 'Baden-Württemberg, Deutschland',
    siteCreatedData: '',
    siteEmployeesData: '199',
    applicationFilterData: '/career/search?filter=leinfelden-echterdingen',
    video: require('@/assets/videos/novatec-le-presentation.mp4')
  }
}
}
</script>