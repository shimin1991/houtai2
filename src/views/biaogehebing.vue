<template>
    <div>
        <el-table ref="multipleTable" border :span-method="objectSpanMethod"   :row-class-name="tableRowClassName" :cell-class-name="cell"  :data="tableData"
		 
		   @cell-mouse-leave="cellMouseLeave" @cell-mouse-enter="cellMouseEnter"  style="width: 80%;margin:0 auto;">
            <el-table-column label="商品类别" align="center">
                <template slot-scope="scope" width="160">
                    <div>{{scope.row.productType}}</div>
                </template>
            </el-table-column>
            <el-table-column label="商品价格" align="center">
                <template slot-scope="scope">
                    <p>{{scope.row.price}}</p>
                </template>
            </el-table-column>
            
            <el-table-column label="商品名称" width="180px" align="center">
                <template slot-scope="scope">
                    <p>{{scope.row.productName}}</p>
                </template>
            </el-table-column>
            <el-table-column label="操作人员" align="center">
                <template slot-scope="scope">
                    <p>{{scope.row.operator}}</p>
                </template>
            </el-table-column>
            <el-table-column prop="updateTime" label="更新时间" align="center">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    productType: "纺织品",
                    price: 123,
                    productName: '男装上衣',
                    amount: 20,
                    operate_number: "20180831142020",
                    price: "36.00",
                    updateTime: "2018-08-31",
                    operator: "小he"
                }, {
                    productType: "纺织品",
                    price: 123,
                    productName: '男装裤子',
                    amount: 20,
                    operate_number: "20180831142020",
                    price: "36.00",
                    updateTime: "2018-08-31",
                    operator: "小吴"
                }, {
                    productType: "饮料",
                    price: 123,
                    productName: '康师傅冰红茶',
                    amount: 20,
                    operate_number: "20180823142020",
                    price: "36.00",
                    updateTime: "2018-08-31",
                    operator: "小he"
                }, {
                    productType: "纺织品",
                    price: 223,
                    productName: '男装裤子',
                    amount: 10,
                    operate_number: "20180821142020",
                    price: "36.00",
                    updateTime: "2018-08-31",
                    operator: "小王"
                }, {
                    productType: "绸缎",
                    price: 888,
                    productName: '旗袍',
                    amount: 200,
                    operate_number: "20180821142020",
                    price: "36.00",
                    updateTime: "2018-08-31",
                    operator: "小he"
                }, {
                    productType: "绸缎",
                    price: 123,
                    productName: '席子',
                    amount: 20,
                    operate_number: "20180821142020",
                    price: "36.00",
                    updateTime: "2018-08-31",
                    operator: "小he"
                }, ],
                rowIndex: '-1',
                OrderIndexArr: [],
                hoverOrderArr: []
            }
        },
        methods: {
			  cell({row, column, rowIndex, columnIndex}) {
			      //第八列添加 red 类
			        if(columnIndex == 3){
			          return 'red'
			        }
			        //某一行其中的一个变量applies值如果大于0，并且在第六列，即确定一个具体的单元格需要确定行和列
			        if(parseFloat(row.applies) >0 && columnIndex == 2){
			          return 'red'
			        }
			       },
			
            // 获取相同编号的数组
            getOrderNumber() {
                let OrderObj = {}
                this.tableData.forEach((val,index) => {
					val.rowIndex = index
					console.log(val)
					  if(OrderObj[val.operate_number]){
						   OrderObj[val.operate_number].push(index)
					  }else{
						  OrderObj[val.operate_number]=[]
						  OrderObj[val.operate_number].push(index)
					  }
				})
				console.log(OrderObj)
				for( let k in OrderObj){
					  if(OrderObj[k].length>1){
						   this.OrderIndexArr.push(OrderObj[k])
					  }
				}
				console.log(this.OrderIndexArr)
            },
            // 合并单元格
            objectSpanMethod({
                row,
                column,
                rowIndex,
                columnIndex
            }) {
                if (columnIndex === 0 || columnIndex === 3 || columnIndex === 4) {
                    for(let i =0; i<this.OrderIndexArr.length;i++){
						 let element=this.OrderIndexArr[i]
						  for(let j=0;j<element.length;j++){
							  let item=element[j]
							   if(rowIndex==item){
								   if(j==0){
									    return{
											rowspan:element.length,
											colspan:1
										}
								   }else{
									 return{
										 rowspan:0,
										 colspan:0
									 }   
								   }
							   }
						  }
					}
                }
            },



            tableRowClassName({
                row,
                rowIndex
            }) {
                let arr = this.hoverOrderArr
				// console.log(this.hoverOrderArr)
                for (let i = 0; i < arr.length; i++) {
                    if (rowIndex == arr[i]) {
                        return 'hovered-row'
                    }
                }
            },


            cellMouseEnter(row, column, cell, event) {
                this.rowIndex = row.rowIndex;
                this.hoverOrderArr = [];
                this.OrderIndexArr.forEach(element => {
					// console.log(element)
					//  				console.log(this.rowIndex)
					 // includes
                    if (element.indexOf(this.rowIndex) >= 0) {
                        this.hoverOrderArr = element
                    }
                })
            },

            cellMouseLeave(row, column, cell, event) {
                this.rowIndex = '-1'
                this.hoverOrderArr = [];
            }
        },
        created() {
            this.getOrderNumber()
        }
    }
</script>

<style>
	
   .red{color:red;}
     .el-table .hovered-row{
         background: #f5f7fa !important;
       }
    .el-table__header tr>th {
       background: #f5f7fa !important;
     }
  
     .el-checkbox__input.is-checked .el-checkbox__inner {
      /* background-color: #dcdfe6;
       border-color: #dcdfe6; */
     }
  
     .el-checkbox__input.is-focus .el-checkbox__inner {
    /*   background-color: #dcdfe6;
       border-color: #dcdfe6; */
     }

</style>
