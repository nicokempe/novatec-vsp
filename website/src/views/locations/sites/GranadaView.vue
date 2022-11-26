<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-12 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
      <LocationHead :siteName="siteNameData" :siteLocation='siteLocationData' :siteCreated='siteCreatedData' :applicationFilter='applicationFilterData'></LocationHead>
      <p class="mt-5">[Location content]</p>
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
    siteNameData: 'Granada',
    siteLocationData: 'Spain',
    siteCreatedData: '?',
    applicationFilterData: '/career/search?filter=granada',
  }
}
}
</script>