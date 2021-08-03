<template>
	 <el-table
	      ref="table"
	      element-loading-text="Loading"
	      :data="tblOpts.data"
	      border
	      tooltip-effect="dark"
	      style="width:100%">
	      <el-table-column v-for="(item,index) in tblOpts.label"   :width="item.width ? item.width : ''" :key="index" :align="item.align" :label="item.label" :prop="item.param" :sortable="item.sortable ? 'custom' : false">
	        <template slot-scope="scope">
	          <span v-if="item.render">
	            {{item.render(scope.row)}}
	          </span>
	          <span v-else>{{scope.row[item.param]}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column v-if="tblOpts.tableOption.label" :width="tblOpts.tableOption.width" :label="tblOpts.tableOption.label" align="center" class-name="small-padding fixed-width">
	        <template slot-scope="scope">
	          <el-button  v-for="(item,index) in tblOpts.tableOption.options" :key="index" :type="item.type" :icon="item.icon" @click="handleButton(item.methods,scope.row,scope.row)" size="mini">			  
	            {{item.label}}
	          </el-button>
	        </template>
	      </el-table-column>s
	    </el-table>
</template>

<script>
	export default {
	  props:{
		  tblOpts:{
			  type:Object,
			  default:()=>{
				  return{
					   data:[],
					   label:[],
					   tableOption:{}
				  }
			  }
		  },
	    // tableData:{
	    //   type:Object
	    
	    // },
	    // tableLabel:{
	    //   type:Array,
	    //   default: () => {
	    //     return []
	    //   }
	    // },
	    // tableOption:{
	    //   type:Object,
	    //   default: () => {
	    //     return {}
	    //   }
	    // }
	  },
	  components:{},
	  methods: {
	 
	  }
	}
</script>

<style>
</style>
