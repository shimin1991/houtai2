<template>
	<div>
	<!-- 	<template v-for='item in menus' v-if='menus.length>0 && !item.meta.hidden'>
			<el-menu-item :index="item.path" v-if='!item.children '>
				<template slot="title">
					<i class="el-icon-setting"></i>
					<span slot="title">{{item.meta.title}}88</span>
				</template>
			</el-menu-item>

			<el-submenu :index="item.path" v-else>
				<template slot="title">
					<i class="el-icon-setting"></i>
					<span slot="title">{{item.meta.title}}1</span>
				</template>
				<template v-for='child in item.children'>
					<sidebarItem :menus='[child]' ></sidebarItem>	
				</template>
			</el-submenu>

		</template> -->
	<!-- <template v-if='!menus.children'>
	   	<el-menu-item :index="menus.path">
	   		<template slot="title">
	   			<i class="el-icon-setting"></i>
	   			<span slot="title">{{menus.meta.title}}</span>
	   		</template>
	   	</el-menu-item>
	   </template> -->
	   	<template v-if='hasoneChild(menus.children,menus)  &&  !onlyItem.children'>

			<el-menu-item :index="onlyItem.path" >
				<!-- <template slot="title"> -->
					<i class="el-icon-setting"></i>
					<span slot="title">{{onlyItem.meta.title}}1</span>
				<!-- </template> -->
			</el-menu-item>


		</template>

		<el-submenu :index="menus.path" v-else>
			<template slot="title">
				<i class="el-icon-setting"></i>
				<span slot="title">{{menus.meta.title}}2</span>
			</template>
			 <sidebarItem v-for="route in menus.children" :isOne='true' :key="route.path" :menus='route' />

		</el-submenu>

	</div>
</template>

<script>
	export default {
		name: 'sidebarItem',
		data() {
			return {
				onlyItem: null
			}
		},
		props:['menus','isOne'],
	
		methods: {
			hasoneChild(item,oneItem) {
				if(this.isOne){
					  this.onlyItem=oneItem
					  return true
				}
				if(!item) return false
				
				if (item.length == 1) {
					this.onlyItem = item[0]
					console.log(this.onlyItem)
					return true
				} else {
			
					return false
				}
			},
			hassonchild(item){
			
			}
		},
		created() {
			console.log(this.menus)

		}
	}
</script>

<style>
</style>
