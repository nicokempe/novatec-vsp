<template>
    <footer class="bg-white">
      <div class="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div v-for="navigationItem in navigation.main" :key="navigationItem.name" class="px-5 py-2">
            <RouterLink :to="navigationItem.to" class="text-base text-gray-500 hover:text-gray-900">{{ navigationItem.name }}</RouterLink>
          </div>
        </nav>
        <div class="mt-8 flex justify-center space-x-6">
          <a v-for="navigationItem in navigation.social" :key="navigationItem.name" :href="navigationItem.href" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">{{ navigationItem.name }}</span>
            <i :class="navigationItem.iconClass" aria-hidden="true" ></i>
          </a>
        </div>
        <p class="mt-8 text-center text-base text-gray-400">&copy; {{ new Date().getFullYear() }} Nico Kempe. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  
  const navigation = {
    main: [
      { name: 'About', to: '/about' },
      { name: 'Jobs', to: '/career' },
      { name: 'Imprint', to: '/imprint' },
      { name: 'Privacy Policy', to: '/privacy-policy' },
      { name: 'Cookie Policy', to: '/cookie-policy' },
    ],
    social: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/novatec.holding',
        iconClass: 'fa-brands fa-facebook h-6 w-6',
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/novatecgmbh/',
        iconClass: 'fa-brands fa-instagram h-6 w-6',
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/novatecgmbh',
        iconClass: 'fa-brands fa-twitter h-6 w-6',
      },
      {
        name: 'GitHub',
        href: 'https://github.com/NovatecConsulting',
        iconClass: 'fa-brands fa-github h-6 w-6',
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/@novatecgmbh',
        iconClass: 'fa-brands fa-youtube h-6 w-6',
      },
    ],
  }
  </script>