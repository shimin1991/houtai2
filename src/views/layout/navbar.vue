<template>
	<div class='navbar-wrapper'>
	  <div class='head-left'>
		  <img src="../../assets/lufei.jpg" alt="">
	  </div>
	  <div class='head-left collapse-btn'@click='collageChange'>
		  	<i v-if='!collage' class="el-icon-s-fold" ></i>
			<i v-else class="el-icon-s-unfold"></i>
	  </div>
	  <div class='head-right'>
		  退出登录
	  </div>
	</div>
	
</template>

<script>
	import bus from '../../untils/bus.js'
	export default{
		data(){
			return{
				 collage:false
			}
		},
		methods:{
			collageChange(){
				this.collage=!this.collage
			    bus.$emit('collage',this.collage)
			}
		}
	}
</script>

<style scoped>
	.navbar-wrapper{
		width: 100%;
		  line-height: 60px;
	}
	  .head-left{
		  float: left;
		 
	  }
	  .head-left img{
		   width:60px;
		   height: auto;
	  }
	  .head-right{
		   float: right;
		   margin-right: 50px;
	  }
	  .collapse-btn i{
		transform:scale(1.5);
	  }
</style>
