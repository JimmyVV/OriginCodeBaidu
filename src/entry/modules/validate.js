
var validator = {
    types: {
        isEmail : {//邮箱的验证规则
            validate: function (value) {
                var reg=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
                return reg.test(value);
            },
            instructions: "邮箱格式错误"
        },
        isNonEmpty : {//是否为空的验证规则
            validate: function (value) {
                return !(value==""||value===undefined);
            },
            instructions: "日期不能为空"
        },
        isPassword : {//密码的验证规则
            validate: function (value) {
                if(value.length <6){
                    return false;
                }
                var reg=/^(([a-z]+[\w]*[0-9]+)|([0-9]+[\w]*[a-z]+))[a-z0-9]*$/i;
                return reg.test(value);
            },
            instructions: "密码长度在6-20位，且必须包含数字和字母"
        },
        isNickname:{//验证昵称的规则
            validate: function (value) {
                if(value.length >8 || value ==""){
                    return false;
                }
                return true;
            },
            instructions: "昵称字符长度要在8个以内"
        }
    },
    /*
    * @param: data
    *         @param1: rule,验证规则,比如isNonEmpty
    *         @param2: value,验证内容更
    */  
    val(data) {
        let {rule,value}=data,
            type = this.types[rule];
        if(type.validate(value)){
            return false;
        }else{
            return type.instructions;
        }
        
    }       
};
export { validator};
