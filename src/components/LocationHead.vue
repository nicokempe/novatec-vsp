<template>
  <div class="lg:flex lg:items-center lg:justify-between">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{{ siteName }}</h2>
      <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <div v-if="siteLocation" class="mt-2 flex items-center text-sm text-gray-500">
          <i class="fa-solid fa-map-location mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true"></i>
          {{ siteLocation }}
        </div>
        <div v-if="siteCreated" class="mt-2 flex items-center text-sm text-gray-500">
          <i class="fa-solid fa-calendar-days mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true"></i>
          {{ siteCreated }}
        </div>
        <div v-if="siteEmployees" class="mt-2 flex items-center text-sm text-gray-500">
          <i class="fa-solid fa-users mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true"></i>
          {{ siteEmployees }}
        </div>
      </div>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4" v-if="applicationFilter">
      <span class="sm:ml-3">
        <a class="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" :href="applicationFilter">
          <i class="fa-solid fa-paper-plane -ml-1 mr-2 h-3 w-3"></i>
          Apply on this branch
        </a>
      </span>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    siteName: {
      type: String,
      required: true
    },
    siteLocation: {
      type: String,
      required: true
    },
    siteCreated: {
      type: String,
      required: false
    },
    siteEmployees: {
      type: String,
      required: false
    },
    applicationFilter: {
      type: String,
      required: false
    }
  }
}
</script>