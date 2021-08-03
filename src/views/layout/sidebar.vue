<template>
	<div class='sidebar-container'>
		<el-scrollbar wrapClass='scrollbar-wrapper'>
			<el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#556d84"
			    :collapse="isCollapse"	text-color="#fff" active-text-color="#41B883" :router="true" :unique-opened="true" router>
				<!-- <sidebarItem :menus='$router.options.routes'></sidebarItem> -->
				 <sidebarItem  v-for="route in $router.options.routes" :key="route.path" v-if='!route.meta.hidden' :menus='route'/>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script>
	import sidebarItem from './sidebarItem.vue'
	import  bus from '../../untils/bus.js'
	export default {
		data() {
			return {
                  isCollapse:false
			}
		},
		components: {
			sidebarItem
		},
		methods: {

		},
		created() {
			// console.log(this.$router.options.routes)
			bus.$on('collage',msg => {
				 this.isCollapse=msg
			})
		}
	}
</script>

<style>
	.sidebar-container {
		height: 100%;
	}

	.sidebar-container .el-scrollbar {
		height: 100%;
	}

	.sidebar-container .el-scrollbar__view {
		height: 100%
	}

	.sidebar-container .el-scrollbar__wrap {
		overflow-x: hidden
	}

	.sidebar-container .el-menu {
		height: 100%;
		width: 100% !important;
	}
     #app .sidebar-container .el-menu--collapse .el-submenu .el-submenu__title span {
    	width: 0;
    	height: 0;
    	overflow: hidden;
    	visibility: hidden;
    	display: inline-block;
    }
    
    .el-aside {
    	transition: width .3s;
    	/* overflow: hidden; */
    }
	/* .sidebar-container .el-scrollbar {
		    	height: 100% !important;
		    } */

	/* .el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	} */
</style>
