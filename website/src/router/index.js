import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/404.vue')
  },
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/home',
    name: 'home',
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/career',
    name: 'career',
    component: function () {
      return import('../views/CareerView.vue')
    }
  },
  {
    path: '/career/apply/personal-information',
    name: 'application-personal-information',
    component: function () {
      return import('../views/apply/PersonalInformationView.vue')
    }
  },
  {
    path: '/career/apply/contact-information',
    name: 'application-contact-information',
    component: function () {
      return import('../views/apply/ContactInformationView.vue')
    }
  },
  {
    path: '/career/apply/confirmation',
    name: 'application-confirmation',
    component: function () {
      return import('../views/apply/ConfirmationView.vue')
    }
  },
  {
    path: '/career/apply/success',
    name: 'application-success',
    component: function () {
      return import('../views/apply/SuccessView.vue')
    }
  },
  {
    path: '/locations',
    name: 'locations',
    component: function () {
      return import('../views/LocationsView.vue')
    }
  },
  {
    path: '/locations/berlin',
    name: 'locations-berlin',
    component: function () {
      return import('../views/locations/BerlinView.vue')
    }
  },
  {
    path: '/locations/frankfurt',
    name: 'locations-frankfurt',
    component: function () {
      return import('../views/locations/FrankfurtView.vue')
    }
  },
  {
    path: '/locations/granada',
    name: 'locations-granada',
    component: function () {
      return import('../views/locations/GranadaView.vue')
    }
  },
  {
    path: '/locations/hamburg',
    name: 'locations-hamburg',
    component: function () {
      return import('../views/locations/HamburgView.vue')
    }
  },
  {
    path: '/locations/hanover',
    name: 'locations-hanover',
    component: function () {
      return import('../views/locations/HanoverView.vue')
    }
  },
  {
    path: '/locations/karlsruhe',
    name: 'locations-karlsruhe',
    component: function () {
      return import('../views/locations/KarlsruheView.vue')
    }
  },
  {
    path: '/locations/leinfelden-echterdingen',
    name: 'locations-leinfeldenechterdingen',
    component: function () {
      return import('../views/locations/LeinfeldenEchterdingenView.vue')
    }
  },
  {
    path: '/locations/munich',
    name: 'locations-munich',
    component: function () {
      return import('../views/locations/MunichView.vue')
    }
  },
  {
    path: '/locations/zweibruecken',
    name: 'locations-zweibruecken',
    component: function () {
      return import('../views/locations/ZweibrueckenView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
