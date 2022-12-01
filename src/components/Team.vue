<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-8 sm:space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">The Management</h2>
          <p class="text-xl text-gray-500">Our team consists of methodologists and technologists, old hands and young talents as well as generalists and specialists. Our experts all have one thing in common: enthusiasm for IT.</p>
        </div>
        <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4">
              <img class="mx-auto h-800 w-450 rounded-full lg:h-24 lg:w-24 object-cover" :src="person.imageUrl" alt="" />
              <div class="space-y-2">
                <div class="text-xs font-medium lg:text-sm">
                  <h3>{{ person.name }}</h3>
                  <p class="text-gray-500">{{ person.role }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: 'Carlos Barragan',
    role: 'Chief Technologist',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Carlos-Barragan-800x450.jpg',
  },
  {
    name: 'Stefan Bleicher',
    role: 'Operations Manager Business Areas',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Stefan-Bleicher-800x450.jpg',
  },
  {
    name: 'Ruben Burr',
    role: 'Director Digital Product Development',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Mitarbeiterportraits_Ruben-Burr_084_web-800x450.jpg',
  },
  {
    name: 'Marco Dietrich',
    role: 'Head of Finance & Administration',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Marco-Dietrich-800x450.jpg',
  },
  {
    name: 'Rita Ehses',
    role: 'Managing Director',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Rita-Ehses-800x450.jpg',
  },
  {
    name: 'Andreas Falk',
    role: 'Security Expert',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Andreas-Falk-800x450.jpg',
  },
  {
    name: 'Jonas Grundler',
    role: 'Director New Business Development',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Jonas-Grundler-800x450.jpg',
  },
  {
    name: 'Matthias Haeussler',
    role: 'Chief Technologist',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/2018/09/Novatec_Mitarbeiterportraits_Matthias-Haeussler_007_heller-800x450.jpg',
  },
  {
    name: 'Thorsten Jakoby',
    role: 'Director Technology Expertise',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/2018/09/Novatec_Mitarbeiterportraits_Thorsten-Jakoby_040-800x450.jpg',
  },
  {
    name: 'Rolf Knoll',
    role: 'Enterprise Architecture Management Expert',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Rolf-Knoll-800x450.jpg',
  },
  {
    name: 'Lutz Malburg',
    role: 'Agile Organization Expert',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/2018/10/Novatec_Mitarbeiterportraits_Lutz-Malburg_034-800x450.jpg',
  },
  {
    name: 'Dominik Meyer',
    role: 'Managing Director',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Mitarbeiterportraits_Dominik-Meyer_218_WEB-800x450.jpg',
  },
  {
    name: 'Markus Müller',
    role: 'Director Digital Product Development',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Markus-Mueller-800x450.jpg',
  },
  {
    name: 'Georg Rekas',
    role: 'Agile Organization Expert',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Georg-Rekas_235k-800x450.jpg',
  },
  {
    name: 'Markus Scheel',
    role: 'Head of Technical Services & Information Security Officer',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Markus-Scheel-800x450.jpg',
  },
  {
    name: 'Kimia Schneider',
    role: 'Lead Marketing',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Mitarbeiterportraits_Kimia-Faghihi_001-800x450.jpg',
  },
  {
    name: 'Michael Schuchart',
    role: 'Managing Director',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Michael-Schuchart-800x450.jpg',
  },
  {
    name: 'Sabine Sonn',
    role: 'Head of People & Culture',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Mitarbeiterportraets_Sabine-Sonn_150-800x450.jpg',
  },
  {
    name: 'Stephan van de Graaf',
    role: 'Director Technology Expertise',
    imageUrl:
      'https://www.novatec-gmbh.de/wp-content/uploads/Novatec_Mitarbeiterportraets-VandeGraaf-Stephan-066-800x450.webp',
  },
]
</script>