Date.prototype.DateAdd = function(strInterval, Number) 
{ 
var dtTmp = this; 
switch (strInterval) { 
case 's' :return new Date(Date.parse(dtTmp) + (1000 * Number)); 
case 'n' :return new Date(Date.parse(dtTmp) + (60000 * Number)); 
case 'h' :return new Date(Date.parse(dtTmp) + (3600000 * Number)); 
case 'd' :return new Date(Date.parse(dtTmp) + (86400000 * Number)); 
case 'w' :return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number)); 
case 'q' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number*3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds()); 
case 'm' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds()); 
case 'y' :return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds()); 
} 
} 

function GetDateStr2(AddDayCount) 
{ 
var dd = new Date(); 
var ddd = dd.DateAdd('d',AddDayCount); //得到指定日期数
var y = ddd.getFullYear(); 
var m = ddd.getMonth()+1;//获取当前月 
var d = ddd.getDate(); 
return y+"-"+m+"-"+d; 
} 
export {GetDateStr2 as getDate};