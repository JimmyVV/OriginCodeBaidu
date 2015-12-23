//处理模板文件
let temp = {
	setTime(){
		return ` <h2>请选择查询时间:</h2>
            <p>开始:<input type="date" class="startDate" id="startDate"></p>
            <p>结束:<input type="date" class="endDate" id="endDate"></p>
            <h2>课程类型</h2>`;
	},
	setClassify(data){
		return `  <div class="categ_m">
			${data}
  		 </div>`;
	}
}
export {temp};