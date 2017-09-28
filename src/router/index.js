import Vue from 'vue'
import Router from 'vue-router'
import messagecontent from '../components/messagecontent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/messagecontent', name: 'messagecontent', component: messagecontent}
  ]
})
