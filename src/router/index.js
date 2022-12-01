import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/homes/GuestHome.vue";

const routes = [
  /* ERROR PAGES */
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/404',
    meta: { fullPage: true }
  },
  { 
    path: '/404',
    name: 'page-not-found',
    component: () => import('../views/errors/PageNotFound.vue'),
    meta: { fullPage: true }
  },
  /* DEFAULT PAGES */
  {
    path: '/',
    name: 'home',
    alias: '/home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    alias: '/more',
    component: function () {
      return import('../views/other/AboutView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/other/ContactView.vue')
    }
  },
  /* LEGAL PAGES */
  {
    path: '/imprint',
    name: 'imprint',
    component: function () {
      return import('../views/legal/ImprintView.vue')
    }
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: function () {
      return import('../views/legal/PrivacyPolicyView.vue')
    }
  },
  {
    path: '/cookie-policy',
    name: 'cookies',
    alias: '/cookies',
    component: function () {
      return import('../views/legal/CookiePolicyView.vue')
    }
  },
  /* CAREER PAGES */
  {
    path: '/career',
    name: 'career',
    alias: '/apply',
    component: function () {
      return import('../views/career/CareerView.vue')
    },
  },
  {
    path: '/career/apply/:id',
    name: 'apply-at-novatec',
    component: () => import('@/views/career/Apply.vue'),
    children: [
      {
        path: '/career/apply/:id/personal-information',
        name: 'application-personal-information',
        component: () => import('../views/career/apply/PersonalInformationView.vue')
      }, 
      {
        path: '/career/apply/:id/contact-information',
        name: 'application-contact-information',
        component: () => import('../views/career/apply/ContactInformationView.vue')
      },
      {
        path: '/career/apply/:id/response',
        name: 'application-response',
        component: () => import('../views/career/apply/ResponseView.vue')
      },
    ]
  },
  /* LOCATION PAGES */
  {
    path: '/sites',
    name: 'locations',
    component: function () {
      return import('../views/locations/SiteView.vue')
    }
  },
  {
    path: '/sites/berlin',
    name: 'locations-berlin',
    alias: '/berlin',
    component: function () {
      return import('../views/locations/sites/BerlinView.vue')
    }
  },
  {
    path: '/sites/frankfurt',
    name: 'locations-frankfurt',
    alias: '/frankfurt',
    component: function () {
      return import('../views/locations/sites/FrankfurtView.vue')
    }
  },
  {
    path: '/sites/granada',
    name: 'locations-granada',
    alias: '/granada',
    component: function () {
      return import('../views/locations/sites/GranadaView.vue')
    }
  },
  {
    path: '/sites/hamburg',
    name: 'locations-hamburg',
    alias: '/hamburg',
    component: function () {
      return import('../views/locations/sites/HamburgView.vue')
    }
  },
  {
    path: '/sites/hanover',
    name: 'locations-hanover',
    alias: '/hanover',
    component: function () {
      return import('../views/locations/sites/HanoverView.vue')
    }
  },
  {
    path: '/sites/karlsruhe',
    name: 'locations-karlsruhe',
    alias: '/karlsruhe',
    component: function () {
      return import('../views/locations/sites/KarlsruheView.vue')
    }
  },
  {
    path: '/sites/leinfelden-echterdingen',
    name: 'locations-leinfeldenechterdingen',
    alias: '/leinfelden-echterdingen',
    component: function () {
      return import('../views/locations/sites/LeinfeldenEchterdingenView.vue')
    }
  },
  {
    path: '/sites/munich',
    name: 'locations-munich',
    alias: '/munich',
    component: function () {
      return import('../views/locations/sites/MunichView.vue')
    }
  },
  {
    path: '/sites/zweibruecken',
    name: 'locations-zweibruecken',
    alias: '/zweibruecken',
    component: function () {
      return import('../views/locations/sites/ZweibrueckenView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
