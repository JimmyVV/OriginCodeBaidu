//处理模板文件
let temp = {
	setTime(){
		return ` <h2>请选择查询时间:</h2>
            <p>查询日期:<input type="date" class="startDate" id="startDate"></p>
            <h2>课程类型</h2>`;
              // <p>结束:<input type="date" class="endDate" id="endDate"></p>
	},
	setClassify(data){
		return `  <div class="categ_m">
			${data}
  		 </div>`;
	},
	showDate({type,start,end,num,increase,decrease,freeCourses,freeIncrease,freeDecrease,VipCourses,VipIncrease,VipDecrease,students}){
		return `  <h2 id="courseTypes">${type}</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th class="startDate">${end}</th>
                        <th class="endDate">${start}</th>
                        <th class="increase">新增</th>
                        <th class="increase">下架</th>
                        <th class="increase">正在学习人数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>课程数</th>
                        <td id="startNum"></td>
                        <td id="endNum">${num}</td>
                        <td id="increaseNum">${increase}</td>
                        <td id="increaseNum">${decrease}</td>
                        <td id="increaseNum">${students}</td>
                    </tr>
                     <tr>
                        <th>免费课程</th>
                        <td id="startNum"></td>
                        <td id="endNum">${freeCourses}</td>
                        <td id="increaseNum">${freeIncrease}</td>
                        <td id="increaseNum">${freeDecrease}</td>
                    </tr>
                     <tr>
                        <th>付费课程</th>
                        <td id="startNum"></td>
                        <td id="endNum">${VipCourses}</td>
                        <td id="increaseNum">${VipIncrease}</td>
                        <td id="increaseNum">${VipDecrease}</td>
                    </tr>
                </tbody>
            </table>`
	}
}
export {temp};