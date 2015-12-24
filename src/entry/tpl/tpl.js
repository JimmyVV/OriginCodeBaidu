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
	},
	showDate({type,start,end,startNum,endNum,increaseNum}){
		return `  <h2 id="courseTypes">${type}</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th class="startDate">${start}</th>
                        <th class="endDate">${end}</th>
                        <th class="increase">新增</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>课程数</th>
                        <td id="startNum">${startNum}</td>
                        <td id="endNum">${endNum}</td>
                        <td id="increaseNum">${increaseNum}</td>
                    </tr>
                </tbody>
            </table>`
	}
}
export {temp};