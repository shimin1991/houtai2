<template>
	<el-container>
		<el-header>
			<navbar></navbar>
		</el-header>
		<el-container>
			<el-aside :width='asideWidth'>
				<sidebar></sidebar>
			</el-aside>
			<el-main>
				<tagsview></tagsview>
				<appMain></appMain>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import sidebar from './sidebar.vue'
	import navbar from './navbar.vue'
	import appMain from './appMain.vue'
	import tagsview from './tagsview.vue'
		import bus from '../../untils/bus.js'
	export default {
		data() {
			return {
				asideWidth: '240px'
			}
		},
		components: {
			sidebar,
			navbar,
			appMain,
			tagsview
		},
		created() {
			bus.$on('collage', msg => {
				if (msg) {
					this.asideWidth = 64 + 'px'
				} else {
					this.asideWidth = 240 + 'px'
				}
				console.log(66)
			})
		}
	}
</script>

<style>
	.el-container {
		height: 100%;
		width: 100%;
		overflow: auto;
	}

	.el-main {
		padding: 0;
		overflow: hidden;
	}
</style>
