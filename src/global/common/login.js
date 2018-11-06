!function (){
	if(Xiaoma.platform.weixin){
		/*if(Xiaoma.getEnvironmentType(window.location.href)=="pro"){
			Xiaoma.setWXType("eline");
		}*/
		openid = Xiaoma.getSession(" ") || Xiaoma.getSession("openid");
		memberCode=Xiaoma.getSession("memberCode");
		if (!openid||!memberCode) {
            Xiaoma.toLogin(window.location.href);
			// window.location = Xiaoma.getConfig().wx_openapi.serverAddr + "api/weixinlogin.jhtml?"+(Xiaoma.getWXType()?"wxType="+Xiaoma.getWXType()+"&":"")+"isRedirectLogin=0&callbackurl=" + encodeURIComponent(window.location.href);
			return ;
		}
	}else if(!Xiaoma.getSession("memberCode")){
		Xiaoma.delAllSession();
        Xiaoma.toLogin(window.location.href);
		// window.location.href=Xiaoma.getConfig().ma_wireless.serverAddr+"member/login.html?callbackurl="+encodeURIComponent(window.location.href);
	}else{
		bcp_wireless.healthcheck({
			data:{
				terminalCode : 'ABC',
				terminalVersion : '10.2',
				merchantCode:"201212345611111111111111",
				memberCode:Xiaoma.getSession("memberCode"),
				token:Xiaoma.getSession("token"),
				memberTokenMode:Xiaoma.getSession("memberTokenMode")
			},
			failure:function (data){
				debugger;
				Xiaoma.delAllSession();
				Xiaoma.toast("正在跳转登录中...");
                Xiaoma.toLogin(window.location.href);
				//	window.location.href=Xiaoma.getConfig().ma_wireless.serverAddr+"member/login.html?callbackurl="+encodeURIComponent(window.location.href);
				return true;
			},
			error:function (){
                debugger;
				Xiaoma.delAllSession();
                Xiaoma.toLogin(window.location.href);
				//	window.location.href=Xiaoma.getConfig().ma_wireless.serverAddr+"member/login.html?callbackurl="+encodeURIComponent(window.location.href);
				return true;
			}
		});
	}
}();

