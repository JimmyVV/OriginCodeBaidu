import $ from 'jquery';
let http = new Object(),
	Pathurl = {
	getType:"/getType",  //获取课程分类的路由
	getDetail:"/getDetail"  //获取课程详细信息
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
http.getDetail = function({start,href}){
	return $.ajax({
		url:Pathurl.getDetail,
		type:'POST',
		contentType:"application/json",
		dataType:"JSON",
		data:JSON.stringify({
			start:start,
			href:href
		})
	})
}
export {http};