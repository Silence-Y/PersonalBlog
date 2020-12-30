import Vue from 'vue'
import Router from 'vue-router'

const index = resolve => require(['@/pages/front/index'], resolve)
const home = resolve => require(['@/pages/front/home'], resolve)
const about = resolve => require(['@/pages/front/about'], resolve)
const map = resolve => require(['@/pages/front/map'], resolve)
const blogDetail = resolve => require(['@/pages/front/blogDetail'], resolve)
const message = resolve => require(['@/pages/front/message'], resolve)

const login = resolve => require(['@/pages/back/login'], resolve)
const admin = resolve => require(['@/pages/back/admin'], resolve)
const posts = resolve => require(['@/pages/back/posts'], resolve)
const editBlog = resolve => require(['@/pages/back/editBlog'], resolve)
const everyDay = resolve => require(['@/pages/back/everyDay'], resolve)



Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // 前台页面
    {
      path: '/',
      redirect: '/home',
      component: index,
      children: [{
          path: '/home',
          name: 'home',
          component: home,
          meta: {
            title: '博客首页'
          },
        },
        {
          path: '/map',
          name: 'map',
          component: map,
          meta: {
            title: '地图'
          }
        }, {
          path: '/about',
          name: 'about',
          component: about,
          meta: {
            title: '关于'
          }
        }, {
          path: '/message',
          name: 'message',
          component: message,
          meta: {
            title: '留言'
          }
        },
        {
          path: '/blogDetail',
          name: 'blogDetail',
          component: blogDetail,
          meta: {
            title: '博客详情页'
          }
        }
      ]
    },
    // 登录注册页面
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录页面'
      }
    },
    // 后台页面
    // {
    //   path: '/admin',
    //   redirect: '/posts'
    // },
    {
      path: '/admin',
      redirect: '/admin/posts',
      component: admin,
      meta: {
        requireAuth: true,
        title: '头部和侧边栏'
      },
      children: [{
          path: 'posts',
          name: 'posts',
          component: posts,
          meta: {
            requireAuth: true,
            title: '博客文章'
          }
        },
        {
          path: 'editBlog',
          name: 'editBlog',
          component: editBlog,
          meta: {
            requireAuth: true,
            title: '编辑文章'
          }
        },
        {
          path: 'everyDay',
          name: 'everyDay',
          component: everyDay,
          meta: {
            requireAuth: true,
            title: '每日一句'
          }
        },
      ]
    }
  ]
})
