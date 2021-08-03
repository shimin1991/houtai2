<template>
	<div class='tools'>
		 <template v-for='item in privileges'>
			  <el-button type="primary" size='mini' @click='emitEventHandle(item.icon)' :icon='"el-icon-"+item.icon'>{{item.content}}</el-button>
		 </template>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['privileges'],
		methods:{
			 emitEventHandle(e){
				 this.$emit('on-'+e,5555)
			 }
		}
	}
</script>

<style>
</style>
