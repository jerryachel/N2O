var baseUrl = 'http://back.n2o-x.cn';
var tel_phone = '';
(function(){
	$.get(baseUrl+'/n2oPublic/companyInfo.do',function(res){
            /*var data = res.model
            var html = template('companyInfo',data);  
            document.getElementById("footer_info").innerHTML = html; */
            $(".tel_phone").text(res.model.telePhone)
            tel_phone = res.model.telePhone
        })
})()