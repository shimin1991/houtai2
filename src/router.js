import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import session from './untils/session.js'
import tools from './untils/tools.js'

let routes = [{
		path: '/',
		name: 'dashboard',
		redirect: '/home1',
		component: resolve => require(['@/views/layout/index'], resolve),
		meta: {
			title: '首页',
			hidden: false,
			url:'layout/index'
		},
		children: [{
			path: '/home1',
			name: 'dashboard1',
			component: resolve => require(['@/views/cascader'], resolve),
			meta: {
				title: '首页dd',
				childen: false,
				url:'cascader'
			}
		}]
	},
	{
		path: '/radio',
		name: 'radio',
		component: resolve => require(['@/views/layout/index'], resolve),
		meta: {
			title: '选框',
			url:'layout/index'
		},
		children: [{
			path: '/radioDemo',
			name: 'radioDemo',
			component: resolve => require(['@/views/radio'], resolve),
			meta: {
				title: '选择框demo',
				url:'radio'
			}
		}]

	},
	// {
	// 	path:'/upload',
	// 	name:'uplaod',
	// 	component: resolve => require(['@/views/layout/index'], resolve),
	// 	meta:{
	// 		 title:'上传'
	// 	},
	// 	children:[{
	// 		path:'/uploadDemo',
	// 		name:'uploadDemo',
	// 		component:resolve =>require(['@/views/upload'],resolve),
	// 		meta:{
	// 			title:'上传demo'
	// 		}
	// 	}]

	// },
	{
		path: '/table',
		name: 'table',
		component: resolve => require(['@/views/layout/index'], resolve),
		meta: {
			title: '表格中',
			hidden: false,
			url:'layout/index'
		},
		children: [{
				path: '/home',
				name: 'dashboards',
				component: resolve => require(['@/views/cascader'], resolve),
				meta: {
					title: '选择器',
					childen: false,
					url:'cascader'
				}
			},
			{

				path: '/biaoge',
				name: 'biaoge',
				component: resolve => require(['@/views/biaoge'], resolve),
				meta: {
					title: '表格',
					url:'biaoge'
				}

			},
			{
			
				path: '/biaoge3',
				name: 'biaoge3',
				component: resolve => require(['@/views/biaoge3'], resolve),
				meta: {
					title: '表格封装',
					url:'biaoge3'
				}
			
			},
			{


				path: '/biaodan',
				name: 'biaodan',
				component: resolve => require(['@/views/biaodan'], resolve),
				meta: {
					title: '表单demo',
					url:'biaodan'
				}

			},
			{
				path: '/table/merge',
				name: 'he',
				component: resolve => require(['@/views/anli'], resolve),
				meta: {
					title: '合并表单',
					url:'anli'
				},
				children: [{
						path: '/table/merge/hebing',
						name: 'hebing',
						component: resolve => require(['@/views/biaogehebing'], resolve),
						meta: {
							title: '合并',
							url:'biaogehebing'
						}
					},
					{
						path: '/table/merge/from',
						name: 'from',
						component: resolve => require(['@/views/from'], resolve),
						meta: {
							title: '表单',
							url:'from'
						}
					}
				]
			},
			{
				path: '/tabs',
				name: 'tabs',
				component: resolve => require(['@/views/anli'], resolve),
				meta: {
					title: '标签页',
					url:'anli'
				},
				children: [{
					path: '/tabsDemo',
					name: 'tabsDemo',
					component: resolve => require(['@/views/tabs'], resolve),
					meta: {
						title: '标签demo',
						url:'tabs'
					}
				}]
			}
		]
	},

	{
		path: '/login',
		name: 'login',
		component: resolve => require(['@/views/login'], resolve),
		meta: {
			hidden: true,
			url:'login'
		}
	}
]

console.log(routes)
if (session.get('menus')) {
	  let menus= session.get('menus')
	     tools(menus)
		 console.log(menus)
		 routes=menus
	// console.log(session.get('menus'))
	// routes = session.get('menus')
	// console.log(routes)

}
let router = new VueRouter({
	mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {
	if (to.path == '/login') {
		return next()
	}
	if (!session.get('token')) {
		return next('/login')
	}
	next()
})
export default router
