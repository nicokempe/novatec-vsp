<template>
  <div class="bg-white">
      <div class="mx-auto max-w-2xl py-16 px-12 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div v-if="$attrs.success">
          Awesome! We got your application and will reach out to you when we decided!
        </div>
        <div v-else>
          <p>Unfortunately, we made a mistake when transferring your data. Please try again later.</p>
          <RouterLink type="button" to="/" class="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 mt-5">Back to the homepage</RouterLink>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    personalInformation: {
      type: Object,
      required: false
    },
    contactInformation: {
      type: Object,
      required: false
    }
  },
  mounted() {
    this.$emit('update', {applicationHeadActionData: 'Back to the homepage', applicationHeadActionRouterUrlData: '/'})
    if(Object.keys(this.$attrs.contactInformation).length == 0 || Object.keys(this.$attrs.personalInformation).length == 0){
      this.$router.push('/')
    }
  },
  data() {
    return {
      success: false,
      failed: false,
    }
  }
}
</script>