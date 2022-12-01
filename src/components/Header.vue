<template>
  <!--
    TODO: Add dark / light mode design
    TODO: Add language selection design
    TODO: Add theme toggle
    TODO: Add language switch
  -->
  <!-- <Alerts v-if="alertsEnabled" /> -->
  <Popover class="relative bg-white z-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <RouterLink to="/home">
            <span class="sr-only">Novatec Consulting GmbH</span>
            <img class="h-8 w-auto sm:h-10" src="@/assets/img/logos/logo-cyan-small.png" alt="" />
          </RouterLink>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
            <span class="sr-only">Open menu</span>
            <i class="fa-solid fa-bars h-5 w-5" aria-hidden="true"></i>
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">

          <RouterLink to="/home" class="text-base font-medium text-gray-500 hover:text-gray-900">{{ $t('navigation.home') }}</RouterLink>
          <RouterLink to="/about" class="text-base font-medium text-gray-500 hover:text-gray-900">{{ $t('navigation.about') }}</RouterLink>
          <RouterLink to="/contact" class="text-base font-medium text-gray-500 hover:text-gray-900">{{ $t('navigation.contact') }}</RouterLink>
          <RouterLink to="/career" class="text-base font-medium text-gray-500 hover:text-gray-900">{{ $t('navigation.career') }}</RouterLink>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2']">
              <span>{{ $t('navigation.sites') }}</span>
              <i :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-3 w-3 group-hover:text-gray-500 fa fa-chevron-down']" aria-hidden="true"></i>
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <RouterLink v-for="mainSiteItem in mainSites" :key="mainSiteItem.name" :to="mainSiteItem.to" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                      <!-- <component :is="mainSiteItem.siteIcon" class="h-6 w-6 flex-shrink-0 text-cyan-600" aria-hidden="true" /> -->
                      <i :class="mainSiteItem.siteIcon"></i>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">{{ mainSiteItem.name }}</p>
                        <p class="mt-1 text-sm text-gray-500">{{ mainSiteItem.description }}</p>
                      </div>
                    </RouterLink>
                  </div>
                  <div class="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                    <div>
                      <h3 class="text-base font-medium text-gray-500">{{ $t('navigation.secondarySites')}}</h3>
                      <ul role="list" class="mt-4 space-y-4">
                        <li v-for="secondarySiteExampleItem in secondarySiteExamples" :key="secondarySiteExampleItem.id" class="truncate text-base">
                          <RouterLink :to="secondarySiteExampleItem.to" class="font-medium text-gray-900 hover:text-gray-700">{{ secondarySiteExampleItem.name }}</RouterLink>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-5 text-sm">
                      <RouterLink to="/sites" class="font-medium text-cyan-600 hover:text-cyan-500">
                        View all Sites
                        <span aria-hidden="true"> &rarr;</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

        </PopoverGroup>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"><i class="fa-solid fa-moon"></i></a> <!-- Theme -->
          <a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700"><i class="fa-solid fa-language"></i></a>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black  ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="@/assets/img/logos/logo-cyan-small.png" alt="Novatec Consulting GmbH" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent">
                  <span class="sr-only">Close menu</span>
                  <i class="fa-solid fa-circle-xmark h-5 w-5" aria-hidden="true"></i>
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a v-for="mobileNavItem in mobileNav" :key="mobileNavItem.name" :href="mobileNavItem.to" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <i :class="mobileNavItem.icon" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">{{ mobileNavItem.name }}</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <!-- <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Docs</a>
              <a v-for="item in mainSites" :key="item.name" :href="item.href" class="text-base font-medium text-gray-900 hover:text-gray-700">{{ item.name }}</a>
            </div> -->
            <div>
              <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700"><i class="fa-solid fa-language"></i></a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                {{ ' ' }}
                <a href="#" class="text-cyan-600 hover:text-cyan-500"><i class="fa-solid fa-moon"></i></a> <!-- Theme -->
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>

import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'

const mobileNav = [
  {
    name: 'Home',
    description: 'Get a better understanding of where your traffic is coming from.',
    to: '/',
    icon: 'fa-solid fa-house h-6 w-6 flex-shrink-0 text-cyan-600',
  },
  {
    name: 'About',
    description: 'Speak directly to your customers in a more meaningful way.',
    to: '/about',
    icon: 'fa-solid fa-user h-6 w-6 flex-shrink-0 text-cyan-600', // CursorArrowRaysIcon
  },
  {
    name: 'Contact',
    description: "Connect with third-party tools that you're already using.",
    to: '/contact',
    icon: 'fa-solid fa-envelope h-6 w-6 flex-shrink-0 text-cyan-600', // Squares2X2Icon
  },
  { 
    name: 'Career',
    description: "Your customers' data will be safe and secure.",
    to: '/career',
    icon: 'fa-solid fa-rocket h-6 w-6 flex-shrink-0 text-cyan-600' }, //ShieldCheckIcon
  {
    name: 'Sites',
    description: 'Build strategic funnels that will drive your customers to convert',
    to: '/sites',
    icon: 'fa-solid fa-map-location h-6 w-6 flex-shrink-0 text-cyan-600', //ShieldCheckIcon
  },
]
const mainSites = [
  {
    name: 'Leinfelden-Echterdingen',
    description: 'Head Office of the Novatec Consulting GmbH',
    to: '/sites/leinfelden-echterdingen',
    siteIcon: 'fa-solid fa-city h-6 w-6 flex-shrink-0 text-cyan-600',
  },
  {
    name: 'Granada',
    description: 'Head Office of the NOVATEC Software Engineering España S.L.',
    to: '/sites/granada',
    siteIcon: 'fa-solid fa-building h-6 w-6 flex-shrink-0 text-cyan-600',
  },
]
const secondarySiteExamples = [
  { id: 1, name: 'Berlin', to: '/sites/berlin' },
  { id: 2, name: 'Frankfurt', to: '/sites/frankfurt' },
  { id: 3, name: 'Hamburg', to: '/sites/hamburg' },
] 
</script>