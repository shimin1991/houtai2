<template>
	<div>
		<tables :tblOpts='listTable' ></tables>
	</div>
</template>

<script>
	import tables from '../components/table.vue'
	export default {
		data() {
			return {
				listTable: {
					data: [{
						registTime: '2016-05-02',
						usr: '王小虎',
						company: '情节人',
						email: "8w949893@qq.com ",
						address: '上海市普陀区金沙江路 1518 弄',
						status: 1
					}, {
						registTime: '2016-05-03',
						usr: '王小虎',
						company: '情节人',
						email: "8w949893@qq.com ",
						address: '上海市普陀区金沙江路 1518 弄',
						status: 1
					}, {
						registTime: '2016-05-04',
						usr: '王小虎',
						company: '情节人',
						email: "8w949893@qq.com ",
						address: '上海市普陀区金沙江路 1518 弄',
						status: 1
					}, {
						registTime: '2016-05-05',
						usr: '王小虎',
						company: '情节人',
						email: "8w949893@qq.com ",
						address: '上海市普陀区金沙江路 1518 弄',
						status: 2
					}],
					label: [{
							label: '用户名',
							param: 'usr',
							align: 'center',
							sortable: true
						},
						{
							label: '公司名称',
							param: 'company',
							align: 'center'
						},
						{
							label: '办公邮箱',
							param: 'email',
							align: 'center',
							width: '200'
						},
						{
							label: '注册时间',
							param: 'registTime',
							align: 'center',
							sortable: true
						},
						{
							label: '审核状态',
							param: 'status',
							align: 'center',
							sortable: true,
							render: (row) => {
								if (row.status === 0) {
									return '未审核'
								} else if (row.status === 1) {
									return '审核通过'
								} else if (row.status === 2) {
									return '审核不通过'
								} else {
									return '禁用'
								}
							}
						}
					],
					tableOption: {
						label: '操作',
						width: '200',
						options: [{
								label: '预览',
								type: 'primary',
								icon: 'el-icon-view',
								methods: 'preview'
							},
							{
								label: '审核',
								type: 'primary',
								icon: 'el-icon-upload2',
								methods: 'audit'
							},
						]
					}

				},
				tableData: [{
					registTime: '2016-05-02',
					usr: '王小虎',
					company: '情节人',
					email: "8w949893@qq.com ",
					address: '上海市普陀区金沙江路 1518 弄',
					status: 1
				}, {
					registTime: '2016-05-03',
					usr: '王小虎',
					company: '情节人',
					email: "8w949893@qq.com ",
					address: '上海市普陀区金沙江路 1518 弄',
					status: 1
				}, {
					registTime: '2016-05-04',
					usr: '王小虎',
					company: '情节人',
					email: "8w949893@qq.com ",
					address: '上海市普陀区金沙江路 1518 弄',
					status: 1
				}, {
					registTime: '2016-05-05',
					usr: '王小虎',
					company: '情节人',
					email: "8w949893@qq.com ",
					address: '上海市普陀区金沙江路 1518 弄',
					status: 2
				}],
				tableLabel: [{
						label: '用户名',
						param: 'usr',
						align: 'center',
						sortable: true
					},
					{
						label: '公司名称',
						param: 'company',
						align: 'center'
					},
					{
						label: '办公邮箱',
						param: 'email',
						align: 'center',
						width: '200'
					},
					{
						label: '注册时间',
						param: 'registTime',
						align: 'center',
						sortable: true
					},
					{
						label: '审核状态',
						param: 'status',
						align: 'center',
						sortable: true,
						render: (row) => {
							if (row.status === 0) {
								return '未审核'
							} else if (row.status === 1) {
								return '审核通过'
							} else if (row.status === 2) {
								return '审核不通过'
							} else {
								return '禁用'
							}
						}
					}
				],
				tableOption: {
					label: '操作',
					width: '200',
					options: [{
							label: '预览',
							type: 'primary',
							icon: 'el-icon-view',
							methods: 'preview'
						},
						{
							label: '审核',
							type: 'primary',
							icon: 'el-icon-upload2',
							methods: 'audit'
						},
					]
				}
			}
		},
		components: {
			tables
		}


	}
</script>

<style>
</style>
