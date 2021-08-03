<template>
	<div>
		<h1 @click='login'>登录</h1>
		
	</div>
</template>

<script>
	
	import session from'../untils/session.js'
	export default{
		data(){
			return{
				
			}
		},
	created() {
	    
	 },
	 methods:{
		 login(){
			 let  demoRoute={
			 						path:'/upload',
			 						name:'uplaod',
			 						component: resolve => require(['@/views/layout/index'], resolve),
			 						meta:{
			 							 title:'上传',
										 url:'layout/index'
			 						},
			 						children:[{
			 							path:'/uploadDemo',
			 							name:'uploadDemo',
			 							component:resolve =>require(['@/views/upload'],resolve),
			 							meta:{
			 								title:'上传demo',
											url:'upload'
			 							}
			 						}]
			 						
			 					}
								 let that=this
		        this.$store.dispatch('addMenus',demoRoute).then(res => {
					console.log(res)
					  session.set('token','44444')
					  that.$router.push('/')
				})
			 					 
		 }
	 }
	}
</script>

<style>
</style>
