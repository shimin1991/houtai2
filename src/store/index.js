import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import session from '../untils/session.js'
Vue.use(Vuex)
const setVisited =visitedViews => {
  session.set('visitedView',visitedViews)
}
const store =new Vuex.Store({
	  state:{
		  visited:session.get('visitedView')|| [],
		  menus:session.get('menus') || []
	  },
	  
	  mutations:{
		  addVisited(state,route){
			  console.log(route)
			   let visitedItem={
				    name:route.name,
					meta:route.meta,
					path:route.path
			   }
			   state.visited.push(visitedItem)
			   setVisited(state.visited)
			   console.log(state.visited)
		  },
		  deletedVisited(state,route){
			      state.visible=route
				  setVisited(route)
		  },
		  addMenus(state,route){
			  console.log(route)
			   
			   let option=router.options.routes
			   console.log(option)
			   let flag =  option.some(val => val ==route.path)
			   if(flag){
				   return
			   }else{
				   option.push(route)
				   state.menus=option
				   session.set('menus',state.menus)
				   router.addRoutes([route])
				   console.log(router)
			   }
			 
		  }
	  },
	  getters:{
		  
	  },
	  actions:{
		  addVisited({commit},route){
			   return new Promise(resolve => {
				   commit('addVisited',route)
				   resolve()
			   })
		  },
		  deletedVisited({commit},route){
			   return new Promise(resolve => {
				    commit('deletedVisited',route)
			   })
		  },
		  addMenus({commit},route){
			   return new Promise(resolve =>{
				    commit('addMenus',route)
					  resolve()
			   })
		  }
	  }
})
export default store