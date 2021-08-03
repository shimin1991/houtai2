<template>
	<!-- <div class='tags-content'> -->


	<div class='tags-view'>
		<div class='tags-box' ref="tagsView" @mousewheel="scrollHandler" @DOMMouseScroll="scrollHandler">
			<div class='tags-handle'>
				<el-dropdown>
					<span class="el-dropdown-link">
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="closeOts">关闭其他</el-dropdown-item>
						<el-dropdown-item command="closeAll">关闭所有</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div class='tags-list' ref="tagsScroll" :style="{ left: tagsScrollLeft + 'px' }">
				<el-tag ref="tag" v-for="(tag,index) in tagsList" :key="tag.name" closable
					@close="handleClose(index,tag)" type="success" :class='curTagName==tag.name?"el-tag-active":""'
					@click.native='jumpRouter(tag)'>
					{{tag.meta.title}}
				</el-tag>
			</div>
		</div>
		<!-- </div> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tags: [{
						name: '标签',
						type: ''
					},
					{
						name: '标签',
						type: 'success'
					},
					{
						name: '标签',
						type: 'info'
					},
					{
						name: '标签',
						type: 'warning'
					},
					{
						name: '标签',
						type: 'danger'
					}
				],
				curTagName: '',
				tagsScrollLeft: 0
			}

		},
		computed: {
			tagsList() {
				console.log(this.$store.state.visited)
				return this.$store.state.visited
			}
		},
		methods: {
			closeOts() {

			},
			closeAll() {

			},
			addTags(e) {
				console.log(e)
				this.curTagName = e.name
				if (this.tagsList.some((item) => item.name === e.name)) return
				this.$store.dispatch('addVisited', e)
			},
			handleClose(index, item) {
				if(this.tagsList.length==1){
					  this.$message({
					          message: '不能再关闭了',
					          type: 'warning'
					        });
					return
				}
				
				let preItem
				let nextItem
				if (item.name == this.curTagName) {
					preItem = this.tagsList[index + 1]
					if (!preItem) {
						nextItem = this.tagsList[index - 1]
					}
				}
				if (preItem) {
					this.$router.push({
						'name': preItem.name
					})
				} else if (nextItem) {
					this.$router.push({
						'name': nextItem.name
					})
				}
				this.tagsList.splice(index, 1)
				if (this.tagsList.length == 0) {
					this.$router.push({
						'name': 'dashboard'
					})
				}
				this.$store.dispatch('deletedVisited', this.tagsList)
			},
			jumpRouter(e) {
				if(e.name== this.$route.name) return
				
				this.$router.push({
					'name': e.name
				})
			},
			moveToView(tagEle) {

				console.log(tagEle.offsetLeft) //激活标签盒子到左边的距离
				console.log(this.$refs.tagsView.offsetWidth) //整个tag盒子的宽度
				if (tagEle.offsetLeft < -this.tagsScrollLeft) {
					this.tagsScrollLeft = -tagEle.offsetLeft + 10
					console.log(this.tagsScrollLeft)
				} else if (tagEle.offsetLeft + 10 > -this.tagsScrollLeft && tagEle.offsetLeft + tagEle.offsetWidth < -this
					.tagsScrollLeft + this.$refs.tagsView.offsetWidth - 100) {
					this.tagsScrollLeft = Math.min(0, this.$refs.tagsView.offsetWidth - 100 - tagEle.offsetWidth - tagEle
						.offsetLeft - 20)
					console.log(this.tagsScrollLeft)
				} else {
					this.tagsScrollLeft = -(tagEle.offsetLeft - (this.$refs.tagsView.offsetWidth - 100 - tagEle
						.offsetWidth) + 15)
					console.log(this.tagsScrollLeft)
				}
			},
			scrollHandler(event) {
				console.log(event)
				let type = event.type
				// console.log(type)
				let delta = 0
				if (type === 'DOMMouseScroll' || type === 'mousewheel') {
					delta = event.wheelDelta ? event.wheelDelta : -(event.detail || 0) * 40
				}
				console.log(delta)
				let left = 0
				if (delta > 0) {
					left = Math.min(0, this.tagsScrollLeft + delta)
					console.log(left)
				} else {
					console.log(this.$refs.tagsView.offsetWidth)
					console.log(this.$refs.tagsScroll.offsetWidth)
					if (this.$refs.tagsView.offsetWidth - 100 < this.$refs.tagsScroll.offsetWidth) {
						if (this.tagsScrollLeft < -(this.$refs.tagsScroll.offsetWidth - this.$refs.tagsView.offsetWidth +
								100)) {
							left = this.tagsScrollLeft
						} else {
							left = Math.max(this.tagsScrollLeft + delta, this.$refs.tagsView.offsetWidth - this.$refs
								.tagsScroll.offsetWidth - 100)
						}
					} else {
						this.tagsScrollLeft = 0
					}
				}
				this.tagsScrollLeft = left
				console.log(this.tagsScrollLeft)

			}
		},
		created() {
			console.log(this.$route)
			this.curTagName = this.$route.name

		},
		mounted() {
			setTimeout(() => {
				let curTagInd = null
				this.tagsList.forEach((view, ind) => {
					return view.name === this.$route.name ? (curTagInd = ind) : null
				})
				console.log(this.tagsList)
				if (curTagInd) {
					this.moveToView(this.$refs.tag[curTagInd].$el)
				}
			}, 1)
		},
		watch: {
			$route: {
				handler(newVal, oldVal) {
					this.addTags(newVal)
				},
				immediate: true
			}
			// $route(newVal, oldVal) {
			// 	this.addTags(newVal)
			// }
		}
	}
</script>

<style scoped>
	.tags-content {
		position: fixed;
		top: 60px;
		background: #fff;
		z-index: 5;
	}

	.tags-view {
		height: 50px;
		line-height: 50px;
		position: relative;
		z-index: 2;
		background: #fff;
		/* width: 100%; */
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
		border-top: 1px solid #e6e6e6;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tags-box {
		width: 100%;
		height: 100%;
		position: relative;
		box-sizing: border-box;
		padding-right: 120px;
	}

	.tags-handle {
		position: absolute;
		top: 0;
		right: 0;
		width: 32px;
		height: 100%;
		box-sizing: border-box;
		text-align: center;
		background: white;
		box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
		z-index: 10;
	}

	.tags-list {
		/* width: 110%; */
		position: absolute;
		overflow: visible;
		white-space: nowrap;
		box-sizing: border-box;
		transition: left 0.3 ease;
	}

	.tags-list .el-tag:first-child {
		margin-left: 15px;
	}

	.tags-list .el-tag {
		margin-right: 10px;
		cursor: pointer;
		transition: all .3s;
	}

	.tags-list .el-tag-active {
		background-color: #32b177 !important;
		color: #fff;
	}
</style>
