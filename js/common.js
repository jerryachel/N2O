(function(){
	$.get('http://back.n2o.gzbige.com/n2oPublic/companyInfo.do',function(res){
            var data = res.model
            var html = template('companyInfo',data);  
            document.getElementById("footer_info").innerHTML = html; 
        })
})()