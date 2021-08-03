<template>
	<div class="upload-image">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
			<el-form-item label="活动名称" prop="name">
				<el-input v-model="ruleForm.name" style="width: 300px"></el-input>
			</el-form-item>
			<el-form-item label="上传图片" ref="uploadElement" prop="imageUrl">
				<el-upload action="#" list-type="picture-card" :before-upload="beforeUpload" 
					:on-change="handleChange" :auto-upload="false"  :on-success='successHandler' :on-preview="previewHandler" :file-list="imageUrl"
					:on-remove="handleRemove">

					<i class="el-icon-plus" />
					<!-- 	<template v-if="ruleForm.imageUrl.length>0">
						<template v-for=' (item,index) in ruleForm.imageUrl'> -->

					<!-- </div> -->
					<!-- 		</template>
					</template>
					<i v-if='ruleForm.imageUrl.length<3' class="el-icon-plus avatar-uploader-icon"></i> -->
				</el-upload>
				<el-dialog :visible.sync="dialogVisible">
					<img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default {

		data() {
			return {
				dialogImageUrl: '',
				dialogVisible: false,
				disabled: false,
				ruleForm: {
					name: '',
					imageUrl: [],
				},
				imageUrl: [],
				rules: {
					name: [{
						required: true,
						message: '请输入活动名称',
						trigger: 'blur'
					}, ],
					imageUrl: [{
						required: true,
						message: '请上传图片',
						trigger: 'blur'
					}, ],
				}
			}
		},
		methods: {
			submitForm(formName) {
				let vm = this;
				this.$refs[formName].validate((valid) => {
					if (valid) {
						vm.$refs.upload.submit();
					} else {
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
				this.ruleForm.imageUrl = [];
			},

			handleChange(file, fileList) {
				  this.getBase64(file.raw).then(res => {
				      console.log(res)
				      });

				console.log(URL.createObjectURL(file.raw))
				this.ruleForm.imageUrl.push(URL.createObjectURL(file.raw))
			},

			beforeUpload(file) {
				return true;
			},
			successHandler(resp, file, fileList) {
				console.log(resp)
				console.log(file)
				console.log(fileList)
				// if (fileList.indexOf(file) > 0) {
				//   fileList.splice(0, 1)
				// }
				if (resp.meta.success) {
					let img = resp.data[0]
					// this.tProductOfficeEditForm.productItem += img.path + '/' + img.destName + ';'
				} else {
					this.$message.error('上传失败')
				}
			},
			handleRemove(file) {
				console.log(file)
				this.ruleForm.imageUrl
				// let imageUrl = this.ruleForm.imageUrl
				// imageUrl.splice(index, 1)
				// this.$nextTick(function() {
				// 	this.ruleForm.imageUrl = imageUrl
				// 	console.log(this.ruleForm.imageUrl)
				// })

			},
			previewHandler(file) {
				console.log(file)
				this.dialogImageUrl = file.url
				this.dialogVisible = true;
			},
			handleDownload(file, index) {
				console.log(file);
			},
			
			 getBase64(file) {
			      return new Promise(function(resolve, reject) {
			        let reader = new FileReader();
			        let imgResult = "";
			        reader.readAsDataURL(file);
			        reader.onload = function() {
			          imgResult = reader.result;
			        };
			        reader.onerror = function(error) {
			          reject(error);
			        };
			        reader.onloadend = function() {
			          resolve(imgResult);
			        };
			      });
			}
		
		}
	}
</script>

<style>
	input[type="file"] {
		display: none;
	}

	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
