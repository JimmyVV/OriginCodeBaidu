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

let getTypes = {
    title: $('.t-left'),
    panel: $('.t-panel'), //获取panel
    categ: $('.categ_m'), //获取目录节点
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
                type = $target.html(), //获取类型;
                start = $('#startDate').val(), //搜索的开始日期
                end = $('#endDate').val(), //搜索的结束日期
                conf1 = validator.val({value:start,rule:"isNonEmpty"}),  //验证开始日期是否为空
                conf2 = validator.val({value:end,rule:"isNonEmpty"}); //验证结束日期是否为空
            //判断日期是否为空
            if(conf1){
            	alert(conf1);  //输出非空信息
            	return;
            }else if(conf2){
            	alert(conf2);  //输出非空信息
            	return;
            }
            console.log("ok")
            http.getDetail({ //发送请求,获取某一课程的详细信息
                    type: type,
                    start: start,
                    end: end
                })
                .then((data) => {
                    var {
                        startNum, endNum
                    } = data,
                    increase = endNum - startNum,
                        html = temp.showDate({ //填入模板
                            type: type,
                            start: start,
                            end:end,
                            startNum: startNum,
                            endNum: endNum,
                            increaseNum: increase
                        });
                        this.detail.html(html);
                })
        })
    },
    //当首次点击时，添加查询时间选项并添加课程类型,第二次时,直接改变课程类型
    classify(data) { //data是获得的参数
        if (getTypes.flag === 0) {
            getTypes.panel.html(`${temp.setTime()}
        					 ${temp.setClassify(data)}`);
            getTypes.lag++;
        } else {
            getTypes.categ.html(temp.setClassify(data));
        }
    }
}
getTypes.init();
