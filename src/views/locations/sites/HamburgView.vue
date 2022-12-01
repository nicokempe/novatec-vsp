<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-12 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
      <LocationHead :siteName="siteNameData" :siteLocation='siteLocationData' :siteCreated='siteCreatedData' :siteEmployees='siteEmployeesData' :applicationFilter='applicationFilterData'></LocationHead>
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
    siteNameData: 'Hamburg',
    siteLocationData: 'Schleswig-Holstein, Deutschland',
    siteCreatedData: '',
    siteEmployeesData: '11',
    applicationFilterData: '/career/search?filter=hamburg',
  }
}
}
</script>