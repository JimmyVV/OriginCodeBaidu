// 这里填写发送请求的东西，比如给接口发送
// 点击分类的button,发送请求，并且获得数据
import $ from 'jquery';
import {http} from './modules/http';
import {temp} from './tpl/tpl';

let getTypes = {
    title: $('.t-left'),
    panel:$('.t-panel'),  //获取panel
    categ:$('.categ_m'),  //获取目录节点
    flag: 0,
    init() {
        this.title.on('click', 'a', (e) => {
            let $target = $(e.target),
                row = $target.data('row'); //获取分类的行号
            http.getType(row) //获取html内容
            	.then((data)=>{
            		getTypes.classify(data);  //获得data之后将分类内容填入
            	})
        })
    },
    classify(data) {  //data是获得的参数
        if (getTypes.flag === 0) {
        	getTypes.panel.html(`${temp.setTime()}
        					 ${temp.setClassify(data)}`);
        	getTypes.lag++;
        }else{
        	getTypes.categ.html(temp.setClassify(data));
        }
    }
}
getTypes.init();
