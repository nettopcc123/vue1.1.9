import Vue from 'vue'
import Router from 'vue-router'
//import Index from '@/components/Index'
//import newlists from '@/components/newlists' 
// import newsMore from '@/components/newsMore' 
// import lotts from '@/components/lotts' 
// import lottsmore from '@/components/lottsmore'
// import user from '@/components/user'
// import feedback from '@/components/feedback'
// import disclaimer from '@/components/disclaimer'
// import message from '@/components/message'
// import favorites from '@/components/favorites'

//路由懶加载
const Index = r => require.ensure([],() => r(require('@/components/Index8')), 'Index');
const Index1 = r => require.ensure([],() => r(require('@/components/Index1')), 'Index1');
const news = r => require.ensure([],() => r(require('@/components/news02')), 'news');
const newlists = r => require.ensure([],() => r(require('@/components/newlists.vue')), 'newlists');

const newlists1 = r => require.ensure([],() => r(require('@/components/newlists1')), 'newlists1');
const newlists2 = r => require.ensure([],() => r(require('@/components/newlists2')), 'newlists2');
const newlists3 = r => require.ensure([],() => r(require('@/components/newlists3')), 'newlists3');

const newlists4 = r => require.ensure([],() => r(require('@/components/newlists4')), 'newlists4');
const newlists5 = r => require.ensure([],() => r(require('@/components/newlists5')), 'newlists5');
const newlists6 = r => require.ensure([],() => r(require('@/components/newlists6')), 'newlists6');
const newlists7 = r => require.ensure([],() => r(require('@/components/newlists7')), 'newlists7_t');
const newlists8 = r => require.ensure([],() => r(require('@/components/newlists8')), 'newlists8');

const letto = r => require.ensure([],() => r(require('@/components/letto')), 'letto');
const letto1 = r => require.ensure([],() => r(require('@/components/letto1')), 'letto1');
const letto2 = r => require.ensure([],() => r(require('@/components/letto2')), 'letto2');
const letto3 = r => require.ensure([],() => r(require('@/components/letto3')), 'letto3');
const letto4 = r => require.ensure([],() => r(require('@/components/letto4')), 'letto4');

const newsMore = r => require.ensure([],() => r(require('@/components/newsMore')), 'newsMore');
const newsMore1 = r => require.ensure([],() => r(require('@/components/newsMore1')), 'newsMore1');
const lotts = r => require.ensure([],() => r(require('@/components/lotts')), 'lotts');
const lottsmore = r => require.ensure([],() => r(require('@/components/lottsmore')), 'lottsmore');
const user = r => require.ensure([],() => r(require('@/components/user')), 'user');
const feedback = r => require.ensure([],() => r(require('@/components/feedback')), 'feedback');
const disclaimer = r => require.ensure([],() => r(require('@/components/disclaimer')), 'disclaimer');
const message = r => require.ensure([],() => r(require('@/components/message01')), 'message');
const favorites = r => require.ensure([],() => r(require('@/components/favorites')), 'favorites');
const fans = r => require.ensure([],() => r(require('@/components/fans')), 'fans');
const follow = r => require.ensure([],() => r(require('@/components/follow')), 'follow');
const htmlViewSample = r => require.ensure([],() => r(require('@/components/htmlViewSample')), 'htmlViewSample');
const marquee = r => require.ensure([],() => r(require('@/components/marquee')), 'marquee');
const framePict = r => require.ensure([],() => r(require('@/components/framePict')), 'framePict');
const frameNew = r => require.ensure([],() => r(require('@/components/frameNew')), 'frameNew');
const framekj = r => require.ensure([],() => r(require('@/components/framekj')), 'framekj');
const register = r => require.ensure([],() => r(require('@/components/register03')), 'register');
const login = r => require.ensure([],() => r(require('@/components/login01')), 'login');
const member = r => require.ensure([],() => r(require('@/components/member02')), 'member');
const vip = r => require.ensure([],() => r(require('@/components/vip')), 'vip');
const liberty = r => require.ensure([],() => r(require('@/components/liberty')), 'liberty');
const coupon = r => require.ensure([],() => r(require('@/components/coupon')), 'coupon');
const coupon1 = r => require.ensure([],() => r(require('@/components/coupon1')), 'coupon1');
const coupon2 = r => require.ensure([],() => r(require('@/components/coupon2')), 'coupon2');
const coupon3 = r => require.ensure([],() => r(require('@/components/coupon3')), 'coupon3');
const exch = r => require.ensure([],() => r(require('@/components/exch')), 'exch');
const shoper = r => require.ensure([],() => r(require('@/components/shoper')), 'shoper');
const profile = r => require.ensure([],() => r(require('@/components/profile')), 'profile');
const messageshow = r => require.ensure([],() => r(require('@/components/message_show')), 'messageshow');




Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/newlists',
      name: 'newlists',
      component: newlists
    },
    {
      path: '/framePict',
      name: 'framePict',
      component: framePict
    },
    {
      path: '/exch',
      name: 'exch',
      component: exch
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/member',
      name: 'member',
      component: member,
      meta: {
        requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/shoper',
      name: 'shoper',
      component: shoper,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/liberty',
      name: 'liberty',
      component: liberty
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: coupon,
      redirect: '/coupon1',
      children: [
        {
          path: '/coupon1',
          name: 'coupon1',
          component: coupon1
        },
        {
          path: '/coupon2',
          name: 'coupon2',
          component: coupon2
        },
        {
          path: '/coupon3',
          name: 'coupon3',
          component: coupon3
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/frameNew',
      name: 'frameNew',
      component: frameNew
    },
    {
      path: '/framekj',
      name: 'framekj',
      component: framekj
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/letto',
      name: 'letto',
      component: letto,
      redirect: '/letto2',
      children: [
        {
          path: '/letto1',
          name: 'letto1',
          component: letto1
        },
        {
          path: '/letto2',
          name: 'letto2',
          component: letto2
        },
        {
          path: '/letto3',
          name: 'letto3',
          component: letto3
        },
        {
          path: '/letto4',
          name: 'letto4',
          component: letto4
        }
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      // redirect: '/newlists4',
      // children: [
      //   {
      //     path: '/newlists1',
      //     name: 'newlists1',
      //     component: newlists1
      //   },
      //   {
      //     path: '/newlists2',
      //     name: 'newlists2',
      //     component: newlists2
      //   },
      //   {
      //     path: '/newlists3',
      //     name: 'newlists3',
      //     component: newlists3
      //   },
      //   {
      //     path: '/newlists4',
      //     name: 'newlists4',
      //     component: newlists4
      //   },
      //   {
      //     path: '/newlists5',
      //     name: 'newlists5',
      //     component: newlists5
      //   },
      //   {
      //     path: '/newlists6',
      //     name: 'newlists6',
      //     component: newlists6
      //   },
      //   {
      //     path: '/newlists7',
      //     name: 'newlists7',
      //     component: newlists7
      //   }
      // ]
    },{
      path: '/newlists1',
      name: 'newlists1',
      component: newlists1
    },{
      path: '/newlists2',
      name: 'newlists2',
      component: newlists2
    },{
      path: '/newlists3',
      name: 'newlists3',
      component: newlists3
    },{
      path: '/newlists4',
      name: 'newlists4',
      component: newlists4
    },{
      path: '/newlists5',
      name: 'newlists5',
      component: newlists5
    },{
      path: '/newlists6',
      name: 'newlists6',
      component: newlists6
    },{
      path: '/newlists7',
      name: 'newlists7',
      component: newlists7
    },{
      path: '/newlists8',
      name: 'newlists8',
      component: newlists8
    },
    {
      path: '/newsMore',
      name: 'newsMore',
      component: newsMore
    },
    {
      path: '/newsMore1',
      name: 'newsMore1',
      component: newsMore1
    },
    {
      path: '/lotts',
      name: 'lotts',
      component: lotts
    },{
      path:'/lottsmore',
      name:'lottsmore',
      component:lottsmore
    },{
      path:'/user',
      name:'user',
      component:user
    },{
      path:'/feedback',
      name:'feedback',
      component:feedback,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },{
      path:'/disclaimer',
      name:'disclaimer',
      component:disclaimer,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },{
      path:'/message',
      name:'message',
      component:message,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path:'/messageshow',
      name:'messageshow',
      component:messageshow,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path:'/favorites',
      name:'favorites',
      component:favorites,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },{
      path:'/fans',
      name:'fans',
      component:fans,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },{
      path:'/follow',
      name:'follow',
      component:follow,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    }
    ,{
      path:'/',
      name:'Index1',
      component:Index1
    }
    ,{
      path:'/htmlViewSample',
      name:'htmlViewSample',
      component:htmlViewSample
    }
    ,{
      path:'/marquee',
      name:'marquee',
      component:marquee
    },{
      path:'/profile',
      name:'profile',
      component:profile
    }
  ]
})