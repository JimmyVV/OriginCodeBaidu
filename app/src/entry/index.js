// 这里填写发送请求的东西，比如给接口发送
// 点击分类的button,发送请求，并且获得数据
import $ from 'jquery';
import {
    http
}
from './modules/http';
import {
    temp
}
from './tpl/tpl';
import {
    validator
}
from './modules/validate';
import {getDate} from './modules/date';
let getTypes = {
    title: $('.t-left'),
    panel: $('.t-panel'), //获取panel
    detail: $('.t-detail'), //获取详细内容
    flag: 0,
    //获取日期
    dealDate(date) { 
    	return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
	},
    init() {
        this.title.on('click', 'a', (e) => {
            let $target = $(e.target),
                row = $target.data('row'); //获取分类的行号
            http.getType(row) //获取html内容
                .then((data) => {
                    getTypes.classify(data); //获得data之后将分类内容填入
                })
        });
        this.panel.on('click', 'a', (e) => {
            let $target = $(e.target),
                href = $target.data('src'), //获取类型;
                end = getDate(-1),
                type = $target.html(), //获取Html内容
                start = $('#startDate').val(), //搜索的开始日期
                conf1 = validator.val({value:start,rule:"isNonEmpty"});  //验证开始日期是否为空
            //判断日期是否为空
            if(conf1){
            	alert(conf1);  //输出非空信息
            	return;
            }
            http.getDetail({ //发送请求,获取某一课程的详细信息
                    href: href,
                    start: start
                })
                .then((data) => {
                    var {
                    num,increase,decrease,freeCourses,freeIncrease,freeDecrease,VipCourses,VipIncrease,VipDecrease,students
                  		  } = data,
                        html = temp.showDate({ type,start,end,num,increase,decrease,freeCourses,freeIncrease,freeDecrease,VipCourses,VipIncrease,VipDecrease,students});
                        this.detail.html(html);
                })
        })
    },
    //返回昨天的日期
   
    //当首次点击时，添加查询时间选项并添加课程类型,第二次时,直接改变课程类型
    classify(data) { //data是获得的参数
    	
        if (getTypes.flag === 0) {
            getTypes.panel.html(`${temp.setTime()}
        					 ${temp.setClassify(data)}`);
            getTypes.flag++;
        } else {
			$('.categ_m').html(data);
        }
    }
}
getTypes.init();
