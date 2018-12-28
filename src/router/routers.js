import Main from '@/components/main'
/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册',
      hideInMenu: true
    },
    component: () => import('@/view/login/register.vue')
  },
  {
    path: '/sendmail',
    name: 'sendmail',
    meta: {
      title: '邮箱验证',
      hideInMenu: true
    },
    component: () => import('@/view/login/sendmail.vue')
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    meta: {
      title: '重置密码',
      hideInMenu: true
    },
    component: () => import('@/view/login/resetpassword.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: false,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/servey/search.vue')
      }
    ]
  },
  {
    path: '/servey',
    name: '问卷管理',
    component: Main,
    meta: {
      title: '文档',
      icon: 'ios-book'
    },
    children: [
      {
        path: 'create',
        name: '创建问卷',
        meta: {
          icon: 'ios-book',
          title: '创建问卷'
        },
        component: () => import('@/view/servey/create.vue')
      },
      {
        path: 'myservey',
        name: '我的问卷',
        meta: {
          icon: 'ios-book',
          title: '我的问卷'
        },
        component: () => import('@/view/servey/myservey.vue')
      },
      {
        path: 'result',
        name: '问卷结果',
        meta: {
          icon: 'ios-book',
          title: '问卷结果'
        },
        component: () => import('@/view/servey/serveyresult.vue')
      },
      {
        path: 'myserveydetail',
        name: '创建的问卷详情',
        meta: {
          icon: 'ios-book',
          title: '创建的问卷详情',
          hideInMenu: true
        },
        component: () => import('@/view/servey/myserveydetail.vue')
      }
    ]
  },
  {
    path: '/user/settings',
    name: '账户设置',
    component: Main,
    meta: {
      title: '账户设置',
      icon: 'ios-hammer'
    },
    children: [
      {
        path: 'info',
        name: '个人信息',
        meta: {
          icon: 'ios-hammer',
          title: '个人信息'
        },
        component: () => import('@/view/user/info.vue')
      },
      {
        path: 'avatar',
        name: '头像设置',
        meta: {
          icon: 'ios-hammer',
          title: '头像设置'
        },
        component: () => import('@/view/user/avatar.vue')
      },
      {
        path: 'resetpassword',
        name: '重置密码',
        meta: {
          icon: 'ios-hammer',
          title: '重置密码'
        },
        component: () => import('@/view/user/resetpassword.vue')
      },
      {
        path: 'security',
        name: '账号安全',
        meta: {
          icon: 'ios-hammer',
          title: '账号安全'
        },
        component: () => import('@/view/user/security.vue')
      }
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
