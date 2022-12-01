<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-md">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg font-medium leading-6 text-gray-900">{{ jobCount }} Jobs at Novatec:</h3>
          </div>
        </div>

        <ul role="list" class="divide-y divide-gray-200">
          <li v-for="position in positions" :key="position.id">
            <RouterLink :to='"/career/apply/"+position.id+"/personal-information"' class="block hover:bg-gray-50">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="truncate text-sm font-medium text-cyan-600">{{ position.title }}</p>
                  <div v-if="position.type" class="ml-2 flex flex-shrink-0">
                    <p class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{{ position.type }}</p>
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <p v-if="position.department" class="flex items-center text-sm text-gray-500">
                      <i class="fa-solid fa-user-group mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" ></i>
                      {{ position.department }}
                    </p>
                    <p v-if="position.location" class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <i class="fa-solid fa-map-location mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      {{ position.location }}
                    </p>
                  </div>
                  <div v-if="position.level" class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>{{position.level}}</p>
                  </div>
                </div>
              </div>
            </RouterLink>
          </li>
        </ul>

        <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
          <div class="-mt-px flex w-0 flex-1">
            <a @click.prevent="clickedPage(1)" class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer select-none">
              <i class="fa-solid fa-arrow-left-long mr-3 h-4 w-4 text-gray-400" aria-hidden="true" ></i>
              First
            </a>
          </div>

          <div class="hidden md:-mt-px md:flex">
            <a v-for="page in currentPages" @click.prevent="clickedPage(page)" class="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium cursor-pointer select-none" :class="{'border-transparent hover:border-gray-300 hover:text-gray-700 text-gray-500': this.page !== page, 'border-cyan-500 text-cyan-600': this.page === page}">{{page}}</a>
          </div>

          <div class="-mt-px flex w-0 flex-1 justify-end">
            <a @click.prevent="clickedPage(this.pages.length)" href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer select-none">
              Last
              <i class="fa-solid fa-arrow-right-long ml-3 h-4 w-4 text-gray-400" aria-hidden="true" ></i>
            </a>
          </div>
        </nav>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      jobCount: 0,
      jobs: [],
      page: 0,
      positions: [],
      pages: []
    }
  },
  mounted() {
    this.switchPage(1)
  },
  computed: {
    isFirstEnabled(){
      return this.page !== 1
    },
    isLastEnabled() {
      return this.page !== this.pages.length
    },
    currentPages() {
      const arr = []
      if(this.page > 2)
        arr.push(this.page-2)
      if(this.page > 1)
        arr.push(this.page-1)
      arr.push(this.page)
      const maxPage = this.pages[this.pages.length-1];
      if(maxPage > this.page)
        arr.push(this.page+1)
      if(maxPage > this.page+1)
        arr.push(this.page+2)

      return arr
    }
  },
  methods: {
    clickedPage(page){
      if(this.page === page)
        return
      this.switchPage(page)
    },
    async switchPage(page) {
      this.positions = []
      this.page = page
      const {data} = await this.axios.get('https://pcw-api.softgarden.de/widget-api/job-list/jobAds/?userId=c8b30900-46ce-451b-af8f-0380a3454890&projectId=f11a1f2c-67a8-4a13-81b2-a48c16091208&pageId=680b81c5-fe12-4167-8a56-f4f38a515833&isStandalone=false&locale=de&isActiveCustomJobPages=true&isUseLayoutsOfSubsidiaries=false&filterStatus[careerLevel]=true&filterStatus[category]=true&filterStatus[location]=true&filterStatus[company]=false&pageNumber='+this.page+'&numberOfJobsOnPage=5&listState={"search":"","location":{"coords":{"lat":"51.1638175","lon":"10.4478313"}},"filters":{},"filterPredictions":{}}&jobListTitleNew=Neu&isGetFilters=true')
      this.jobCount = data.data.jobsLength
      this.pages = data.data.pagination.dataSource
      data.data.jobs.forEach(j => this.positions.push({title: j.title.replace('(m/w/d)', '(m/w/not d)'), type: j.workTime, location: j.location, department: j.category, level: j.careerLevel, id: j.id}))
    }
  }
}
</script>
