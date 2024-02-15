import { createRouter, createWebHistory } from 'vue-router'
import JournalView from '../views/JournalView.vue'
import ContactView from '../views/ContactView.vue'
import ClavierView from '../views/ClavierView.vue'
import FormContactView from '../views/FormContactView.vue'
import CallView from '../views/CallView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'journal',
      component: JournalView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/clavier',
      name: 'clavier',
      component: ClavierView
    },
    {
      path:'/formContact',
      name : 'formContact',
      component : FormContactView
    },
    {
      path:'/call',
      name : 'call',
      component : CallView
    }
  ]
})

export default router
