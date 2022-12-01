<template>
  <div class="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
    <div class="relative mx-auto max-w-xl">
      <svg class="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg class="absolute right-full bottom-0 -translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Novatec</h2>
      </div>
      <div class="mt-12">
        <form ref="form" @submit.prevent="sendEmail" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label for="from_first_name" class="block text-sm font-medium text-gray-700">First name</label>
            <div class="mt-1">
              <input type="text" name="from_first_name" placeholder="John" id="from_first_name" autocomplete="given-name" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
            </div>
          </div>
          <div>
            <label for="from_last_name" class="block text-sm font-medium text-gray-700">Last name</label>
            <div class="mt-1">
              <input type="text" name="from_last_name" placeholder="Doe" id="from_last_name" autocomplete="family-name" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="from_company" class="block text-sm font-medium text-gray-700">Company</label>
            <div class="mt-1">
              <input type="text" name="from_company" placeholder="Novatec Consulting GmbH" id="from_company" autocomplete="organization" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="from_email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input id="from_email" name="from_email" placeholder="john.doe@domain.com" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="from_phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="text" name="from_phone" placeholder="+49 176 12345678" id="from_phone" autocomplete="tel" class="block w-full rounded-md border-gray-300 py-3 px-4 focus:border-cyan-500 focus:ring-cyan-500" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <div class="mt-1">
              <textarea id="message" name="message" rows="4" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <Switch v-model="agreed" :class="[agreed ? 'bg-cyan-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2']">
                  <span class="sr-only">Agree to policies</span>
                  <span aria-hidden="true" :class="[agreed ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                </Switch>
              </div>
              <div class="ml-3">
                <p class="text-base text-gray-500">
                  By selecting this, you agree to the
                  {{ ' ' }}
                  <RouterLink to="/privacy-policy" class="font-medium text-gray-700 underline">Privacy Policy</RouterLink>
                  {{ ' ' }}
                  and
                  {{ ' ' }}
                  <RouterLink to="/cookie-policy" class="font-medium text-gray-700 underline">Cookie Policy</RouterLink>.
                </p>
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <button v-if="disabled" class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm opacity-30">Let's talk</button>
            <button v-if="!disabled" type="submit" value="Send" class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2">Let's talk</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <ToastNotification v-if="success" notificationTitle="Success" notificationText="The email has been submitted. We will reach out to you." notificationIcon="fa-solid fa-circle-check h-5 w-5 text-green-400"></ToastNotification>
  <ToastNotification v-if="failed" notificationTitle="Failed!" notificationText="Please check your entries again." notificationIcon="fa-solid fa-circle-xmark h-5 w-5 text-red-400"></ToastNotification>

</template>

<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

const agreed = ref(false)
</script>

<script>
import emailjs from '@emailjs/browser';

import ToastNotification from '@/components/ToastNotification.vue'

export default {
  data() {
    return {
      disabled: false,
      success: false,
      failed: false
    }
  },
  components: {
    ToastNotification
  },
  methods: {
    sendEmail() {
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
      if(!this.agreed)
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
      emailjs.sendForm(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_CONTACT_TEMPLATE_ID, this.$refs.form, process.env.VUE_APP_PUBLIC_KEY)
        .then((result) => {
            // console.log('SUCCESS!', result.text);
            this.success = true;
            setTimeout(() => {
              this.success = false;
              this.disabled = false;
            }, 2000);
        }, (error) => {
            // console.log('FAILED...', error.text);
            this.failed = true;
            setTimeout(() => {
              this.failed= false;
              this.disabled = false;
            }, 2000);
        }).finally(() => {
          this.agreed = false
        });
    }
  }
}
</script>