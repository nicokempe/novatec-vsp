<!--
  TODO: Add required notification preferences
-->
<template>
  <div>
      <form ref="form" class="space-y-8 divide-y divide-gray-200 mt-12">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">

          <div class="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
            <div>
              <h3 class="text-lg font-medium leading-6 text-gray-900">Contact options</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
            </div>
            <div class="space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Email address</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input v-model="email" id="email" name="email" type="email" autocomplete="email" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:max-w-xs sm:text-sm" placeholder="john.doe@domain.com" />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="phone" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Phone number</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input v-model="phoneNumber" type="text" name="first-name" id="phone" autocomplete="given-name" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:max-w-xs sm:text-sm" placeholder="+49 176 12345678" />
                </div>
              </div>

            </div>
          </div>

          <div class="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
            <div>
              <h3 class="text-lg font-medium leading-6 text-gray-900">Notification preferences</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
            </div>
            <div class="space-y-6 divide-y divide-gray-200 sm:space-y-5">
              <div class="pt-6 sm:pt-5">
                <div role="group" aria-labelledby="label-phone">
                  <div class="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                    <div>
                      <div class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-phone">Telephone call notifications</div>
                    </div>
                    <div class="mt-4 sm:col-span-2 sm:mt-0">
                      <div class="max-w-lg space-y-4">
                        <div class="relative flex items-start">
                          <div class="flex h-5 items-center">
                            <input v-model="callNotifyAtAppointments" id="appointments" name="appointments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-transparent" />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="appointments" class="font-medium text-gray-700">Appointment arrangements</label>
                            <p class="text-gray-500">Telephone notification when we want to make appointments with you.</p>
                          </div>
                        </div>
                        <div class="relative flex items-start">
                          <div class="flex h-5 items-center">
                            <input v-model="callNotifyAtOffers" id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-transparent" />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="offers" class="font-medium text-gray-700">Offers and refusals </label>
                            <p class="text-gray-500">Get notified when we accepted or rejected your application.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-6 sm:pt-5">
                <div role="group" aria-labelledby="label-notifications">
                  <div class="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                    <div>
                      <div class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-notifications">Preferred way of communication</div>
                    </div>
                    <div class="sm:col-span-2">
                      <div class="max-w-lg">
                        <p class="text-sm text-gray-500">We try to stick to your preference. However, this is not binding for us.</p>
                        <div class="mt-4 space-y-4">
                          <div class="flex items-center">
                            <input v-model="communicationPreference" id="do-not-care" name="preferred-communication" type="radio" class="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-transparent" />
                            <label for="do-not-care" class="ml-3 block text-sm font-medium text-gray-700">I don't care</label>
                          </div>
                          <div class="flex items-center">
                            <input v-model="communicationPreference" id="prefer-email" name="preferred-communication" type="radio" class="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-transparent" />
                            <label for="prefer-email" class="ml-3 block text-sm font-medium text-gray-700">E-Mail</label>
                          </div>
                          <div class="flex items-center">
                            <input v-model="communicationPreference" id="prefer-phone" name="preferred-communication" type="radio" class="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-transparent" />
                            <label for="prefer-phone" class="ml-3 block text-sm font-medium text-gray-700">Phone calls</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
            <button v-if="disabled" type="button" class="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm opacity-30">
              Submit
            </button>
            <button v-if="!disabled" @click.prevent="next" type="button" class="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
              Submit
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
      email: '',
      phoneNumber: '',
      callNotifyAtAppointments: '',
      callNotifyAtOffers: '',
      communicationPreference: '',
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
      this.$emit("next", {send: true, email: this.email, phoneNumber: this.phoneNumber, callNotifyAtAppointments: this.callNotifyAtAppointments, callNotifyAtOffers: this.callNotifyAtOffers, communicationPreference: this.communicationPreference, from: "contactInformation", link: "/response"});
    }
  }
}
</script>