<!--
  TODO: Add country and state api for more entries
-->
<template>
  <div>
      <form ref="form" @submit.prevent="next" class="space-y-8 divide-y divide-gray-200 mt-12">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div class="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
            <div>
              <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
            </div>
            <div class="space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">First name</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input v-model="first_name" type="text" name="first-name" placeholder="John" id="first-name" autocomplete="given-name" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm" />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Last name</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input v-model="last_name" type="text" name="last-name" placeholder="Doe" id="last-name" autocomplete="family-name" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm" />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="street-address" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Street address</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input v-model="street_address" type="text" name="street-address" placeholder="Mountain Drive 22A" id="street-address" autocomplete="street-address" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm" />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="postal-code" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">ZIP / Postal code</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input v-model="zip" type="text" name="postal-code" placeholder="42187" id="postal-code" autocomplete="postal-code" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm" />
                </div>
              </div>
    
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="city" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">City</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input v-model="city" type="text" name="city" placeholder="Someplace" id="city" autocomplete="address-level2" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm" />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="region" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">State / Province</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input v-model="state" type="text" name="region" placeholder="Somestate" id="region" autocomplete="address-level1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm" />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="country" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Country</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <select v-model="country" id="country" name="country" autocomplete="country-name" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm">
                    <option>Germany</option>
                    <option>Spain</option>
                  </select>
                </div>
              </div>

            </div>
          </div>

          <div class="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
            <button v-if="disabled" type="button" class="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm opacity-30">
              Next
            </button>
            <button v-if="!disabled" @click.prevent="next" type="button" class="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
              Next
            </button>
          </div>

        </div>
      </form>
    
  </div>

  <ToastNotification v-if="failed" notificationTitle="Failed!" notificationText="Please check your entries again." notificationIcon="fa-solid fa-circle-xmark h-5 w-5 text-red-400"></ToastNotification>

</template>

<script>
import ToastNotification from '@/components/ToastNotification.vue'
import { ref } from 'vue'

export default {
  mounted() {
    this.$emit('update', {applicationHeadActionData:'', applicationHeadActionRouterUrlData: ''})
  },
  data() {
    return {
      first_name: '',
      last_name: '',
      street_address: '',
      city: '',
      zip: '',
      state: '',
      country: 'Germany',
      disabled: false,
      success: false,
      failed: false
    }
  },
  components: {
    ToastNotification
  },
  methods: {
    next() {
      let access = true
      if(!this.$refs.form[0].value)
        access = false
      if(!this.$refs.form[1].value)
        access = false
      if(!this.$refs.form[2].value)
        access = false
      if(!this.$refs.form[3].value)
        access = false
      if(!this.$refs.form[5].value)
        access = false
      if(!this.$refs.form[6].value)
        access = false
      if(!access) {
        this.failed = true;
        this.disabled = true;
        setTimeout(() => {
          this.failed = false;
          this.disabled = false;
        }, 2000);
        return 
      }
      this.disabled = true
      this.$emit("next", {first_name: this.first_name, last_name: this.last_name, street_address: this.street_address, city:this.city, zip:this.zip, state:this.state, country: this.country, from: "personalInformation", link: "/contact-information"});
    }
  }
}
</script>