<template>
  <div class="lg:flex lg:items-center lg:justify-between">
    <div class="min-w-0 flex-1">
      <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div class="flex">
              <RouterLink to="/career" class="text-sm font-medium text-gray-500 hover:text-gray-700">Jobs</RouterLink>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <i class="h-3 w-3 flex-shrink-0 text-gray-400 fa-solid fa-chevron-right" aria-hidden="true"></i>
              <RouterLink to="/career" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{{ departmentName }}</RouterLink>
            </div>
          </li>
        </ol>
      </nav>
      <h2 class="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{{ positionName }}</h2>
      <div v-if="jobTime" class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <i class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400 fa-solid fa-clock" aria-hidden="true" ></i>
          {{ jobTime }}
        </div>
        <div v-if="jobLocation" class="mt-2 flex items-center text-sm text-gray-500">
          <i class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400 fa-solid fa-person-walking-luggage" aria-hidden="true" ></i>
          {{ jobLocation }}
        </div>
        <div v-if="salary" class="mt-2 flex items-center text-sm text-gray-500">
          <i class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400 fa-solid fa-comments-dollar" aria-hidden="true" ></i>
          {{ salary }}
        </div>
        <div v-if="jobStarting" class="mt-2 flex items-center text-sm text-gray-500">
          <i class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400 fa-solid fa-play" aria-hidden="true" ></i>
          {{ jobStarting }}
        </div>
        <div v-if="jobClosing" class="mt-2 flex items-center text-sm text-gray-500">
          <i class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400 fa-solid fa-calendar-xmark" aria-hidden="true" ></i>
          {{ jobClosing }}
        </div>
        <div v-if="remoteStatus" class="mt-2 flex items-center text-sm text-gray-500">
          <i class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400 fa-solid fa-earth-europe" aria-hidden="true" ></i>
          {{ remoteStatus }}
        </div>
      </div>
    </div>
    <div  v-if="applicationHeadActionRouterUrl && applicationHeadAction" class="mt-5 flex lg:mt-0 lg:ml-4">
      <span class="sm:ml-3">
        <RouterLink type="button" :to="applicationHeadActionRouterUrl" class="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
          <!-- <i class="-ml-1 mr-2 h-4 w-4 fa-solid fa-check" aria-hidden="true" ></i> -->
          {{ applicationHeadAction }}
        </RouterLink>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    departmentName: {
      type: String,
      required: true,
    },
    positionName: {
      type: String,
      required: true,
    },
    jobTime: {
      type: String,
      required: false,
    },
    jobLocation: {
      type: String,
      required: false,
      default: 'Remote'
    },
    salary: {
      type: String,
      required: false,
    },
    jobStarting: {
      type: String,
      required: false,
    },
    jobClosing: {
      type: String,
      required: false,
    },
    applicationHeadAction: {
      type: String,
      required: false,
      default: 'Submit'
    },
    applicationHeadActionRouterUrl: {
      type: String,
      required: false,
    },
    remoteStatus: {
      type: String,
      required: false,
    }
  }
}
</script>