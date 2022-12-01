<!--
  TODO: Add skeleton loading animation
-->
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Sites</h2>
      <br>
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="site in totalSites" :key="site.id" :href="site.href" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img :src="site.imageSrc" :alt="site.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ site.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ site.city }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const totalSites = [
  {
    id: 1,
    name: 'Baden-Württemberg, Germany',
    href: '/sites/leinfelden-echterdingen',
    city: 'Leinfelden-Echterdingen',
    imageSrc: 'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Niederlassung_Stuttgart_21.png',
    imageAlt: 'Image of the Head Office in Leinfelden-Echterdingen.',
  },
  {
    id: 2,
    name: 'Andalusien, Spain',
    href: '/sites/granada',
    city: 'Granada',
    imageSrc: 'https://www.novatec-gmbh.de/wp-content/uploads/Bild_Standort_Niederlassung_Engineering_Espana_21.jpg',
    imageAlt: 'Image of the Head Office in Granada.',
  },
  {
    id: 3,
    name: 'Brandenburg, Germany',
    href: '/sites/berlin',
    city: 'Berlin',
    imageSrc: 'https://www.novatec-gmbh.de/wp-content/uploads/Bild_Standort_Niederlassung_Berlin_21.jpg',
    imageAlt: 'Image of the Office in Berlin.',
  },
  {
    id: 4,
    name: 'Hessen, Germany',
    href: '/sites/frankfurt',
    city: 'Frankfurt',
    imageSrc: 'https://www.novatec-gmbh.de/wp-content/uploads/Bild_Standort_Niederlassung_Franfkurt_21.jpg',
    imageAlt: 'Image of the Office in Frankfurt.',
  },
  {
    id: 5,
    name: 'Hessen, Germany',
    href: '/sites/hamburg',
    city: 'Hamburg',
    imageSrc: 'https://www.novatec-gmbh.de/wp-content/uploads/Standort-Hamburg-1-e1533565090808.jpg',
    imageAlt: 'Image of the Office in Hamburg.',
  },
  {
    id: 6,
    name: 'Hessen, Germany',
    href: '/sites/hanover',
    city: 'Hanover',
    imageSrc: 'https://www.novatec-gmbh.de/wp-content/uploads/hannover.jpg',
    imageAlt: 'Image of the Office in Hanover.',
  },
  {
    id: 7,
    name: 'Hessen, Germany',
    href: '/sites/karlsruhe',
    city: 'Karlsruhe',
    imageSrc: 'https://www.novatec-gmbh.de/wp-content/uploads/karlsruheswnew.webp',
    imageAlt: 'Image of the Office in Karlsruhe.',
  },
  {
    id: 8,
    name: 'Bavaria, Germany',
    href: '/sites/munich',
    city: 'Munich',
    imageSrc: 'https://www.novatec-gmbh.de/wp-content/uploads/Standort-Muenchen_21.jpg',
    imageAlt: 'Image of the Office in Munich.',
  },
  {
    id: 9,
    name: 'Hessen, Germany',
    href: '/sites/zweibruecken',
    city: 'Zweibrücken',
    imageSrc: 'https://www.novatec-gmbh.de/wp-content/uploads/BauWerk_Luft_ZW-s.webp',
    imageAlt: 'Image of the Office in Zweibrücken.',
  },
]
</script>