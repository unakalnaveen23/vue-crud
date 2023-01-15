import { createRouter, createWebHistory } from 'vue-router'
import main from "../pages/main.vue"
import login from "../pages/login.vue"
import register from "../pages/register.vue"
import admin from "../pages/admin/admin.vue"
import employee from "../pages/admin/employee.vue"
import employeecreate from "../pages/admin/employeecreate.vue"
import employeeedit from "../pages/admin/employeeedit.vue"

const routes = [
  {
    path: '/',
    name: 'main',
    component: main
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    children:[
      {
        path: 'employee',
        component: employee,
        name: 'employee'
        
      },
      {
        path: 'employee/create',
        component: employeecreate,
        name: 'employeecreate'
      },
      {
        path: 'employee/:id/edit',
        component: employeeedit,
        name: 'employeeedit',
        props: true
      }
    ]
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
