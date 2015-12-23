import $ from 'jquery';
let http = new Object(),
	Pathurl = {
	getType:"/getType"  //获取课程分类的路由
}
/*
* @method get
* @param data-order
* @result html
*/
http.getType = function(order){
	var url = `${Pathurl.getType}?order=${order}`;
	return $.ajax({
		url:url,
		type:"GET"
	})
}
export {http};