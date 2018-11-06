(function($){
	 /*Xiaoma.setConfig({
		bcp_openapi:{
			serverAddr:'http://10.7.10.157:8888/bcp-openapi/',
			key:'b796fda9b24b40d7aaa88792865acd5b',
			isSign:false
		}
	});*/

	var bcp_wireless=window.bcp_wireless||function(){
		return new bcp_wireless.fn.init();
	};
	bcp_wireless.fn=bcp_wireless.prototype={
			/**
			 * 初始化
			 */
		init:function(){
			return this;
		}
	};
	
	bcp_wireless.fn.init.prototype=bcp_wireless.fn;
	window.bcp_wireless=bcp_wireless;
	
	var loadGlobalParams=function(mdata){
		mdata.terminalType = 'WIRELESS';
		mdata.terminalCode = 'ABC';
		mdata.terminalVersion = '1.0.0';
		mdata.version = '1.0';
		mdata.charset = 'UTF-8';
		mdata.language = 'EN';
		mdata.signType = 'MD5';
	};
	
	var ajax=function(url,o,urlType){
		loadGlobalParams(o.data);
		Xiaoma.ajax({
			url:url,
			data:o.data,
			error:o.error,
			async:o.async?true:false,
			ajaxSuccess:o.ajaxSuccess,
			failure:function (data){
				o.failure&&o.failure(data);
				return true;
			},
			success:o.success
		},urlType);
	};
    var ajaxUpfile=function(url,o,urlType){
        /*loadGlobalParams(o.data);*/
        Xiaoma.ajaxUpFile({
            url:url,
            data:o.data,
            error:o.error,
            async:o.async?true:false,
            ajaxSuccess:o.ajaxSuccess,
            failure:function (data){
                o.failure&&o.failure(data);
                return true;
            },
            success:o.success
        },urlType);
    };
    bcp_wireless.addAddress=function(o){
        ajaxUpfile("address/add",o,"bcp_openapi");
	}
	bcp_wireless.healthcheck=function(o){
		ajax("member/token/healthcheck",o,"ma_openapi");
	}
	
	bcp_wireless.addAddress=function(o){
		ajax("address/add",o,"bcp_openapi");
	};
	
	bcp_wireless.queryExpress=function(o){
		ajax("express/query",o,"bcp_openapi");
	};
	
	bcp_wireless.queryInvoice=function(o){
		ajax("invoice/page",o,"bcp_openapi");
	};
	
	bcp_wireless.queryEnableInvoice=function(o){
		ajax("invoice/enable",o,"bcp_openapi");
	};
	
	bcp_wireless.applyInvoice=function(o){
		ajax("invoice/apply",o,"bcp_openapi");
	};
	
	bcp_wireless.addInvoice=function(o){
		ajax("invoice/add",o,"bcp_openapi");
	};
	
	bcp_wireless.queryMemberInvoice=function(o){
		ajax("invoice/member/query",o,"bcp_openapi");
	};
	
	bcp_wireless.allocatePrinter=function (o){
		ajax("allocate/printers",o,"bcp_openapi");
	}
	
	bcp_wireless.queryProduct=function(o){
		ajax("applyOrder/product",o,"bcp_openapi");
	};
	
	bcp_wireless.createApplyOrder=function(o){
		ajax("applyOrder/create",o,"bcp_openapi");
	};
	
	bcp_wireless.confirmApplyOrder=function(o){
		ajax("applyOrder/confirm",o,"bcp_openapi");
	};
	
	bcp_wireless.queryApplyOrder=function(o){
		ajax("applyOrder/detail",o,"bcp_openapi");
	};
	
	bcp_wireless.queryPayApplyOrder=function(o){
		ajax("applyOrder/query",o,"bcp_openapi");
	};
	
	bcp_wireless.bindMobile=function(o){
		ajax("user/mobile/bind",o,"bcp_openapi");
	};
	 
	
	bcp_wireless.queryAddress=function(o){
		ajax("address/query",o,"bcp_openapi");
	};
	
	bcp_wireless.queryPrinter=function(o){
		ajax("printer/query",o,"bcp_openapi");
	};
	
	bcp_wireless.queryPrinters=function(o){
		ajax("printer/querys",o,"bcp_openapi");
	};
	
	bcp_wireless.queryPrintOrder=function(o){
		ajax("printer/list",o,"bcp_openapi");
	};
	
	bcp_wireless.queryRechargeOrder=function(o){
		ajax("recharge/order",o,"bcp_openapi");
	};
	
	bcp_wireless.queryPayRechargeOrder=function(o){
		ajax("recharge/queryorder",o,"bcp_openapi");
	};
	
	bcp_wireless.apply=function(o){
		ajax("recharge/apply",o,"bcp_openapi");
	};
	
	bcp_wireless.repay=function(o){
		ajax("recharge/repay",o,"bcp_openapi");
	};
	
	bcp_wireless.bind=function(o){
		ajax("printer/bind",o,"bcp_openapi");
	};
	
	bcp_wireless.queryUserInfo=function(o){
		ajax("user/query",o,"bcp_openapi");
	};
	
	bcp_wireless.queryOrderCount=function(o){
		ajax("applyOrder/count",o,"bcp_openapi");
	};
	
	bcp_wireless.queryBindPage=function(o){
		ajax("printer/bind/list",o,"bcp_openapi");
	};
	
	bcp_wireless.queryApplyPrintPage=function(o){
		ajax("applyOrder/page",o,"bcp_openapi");
	};
	
	bcp_wireless.queryApplyPrintDetail=function(o){
		ajax("applyOrder/detail",o,"bcp_openapi");
	};
	
	bcp_wireless.sendMessage=function(o){
		ajax("message/send",o,"bcp_openapi");
	};
	
	bcp_wireless.checkMessage=function(o){
		ajax("message/check",o,"bcp_openapi");
	};
	
	bcp_wireless.findPwd=function(o){
		ajax("user/password/find",o,"bcp_openapi");
	};
	
	bcp_wireless.queryActivityProduct=function(o){
		ajax("activity/product",o,"bcp_openapi");
	};
	
	bcp_wireless.queryActivity=function(o){
		ajax("activity/query",o,"bcp_openapi");
	};
	
	bcp_wireless.applyActivity=function(o){
		ajax("activity/pre",o,"bcp_openapi");
	};
	
	bcp_wireless.confirmActivity=function(o){
		ajax("activity/confirm",o,"bcp_openapi");
	};
	
	bcp_wireless.matchActivity=function(o){
		ajax("activity/match",o,"bcp_openapi");
	};
	
	bcp_wireless.activityMemberShare=function(o){
		ajax("activity/memberShare",o,"bcp_openapi");
	};
	
	bcp_wireless.queryPreOrder=function (o){
		ajax("activity/order/query",o,"bcp_openapi");
	};

	bcp_wireless.editAddress=function (o){
        ajax("address/edit",o,"bcp_openapi");
	};

	bcp_wireless.removeAddress=function (o){
        ajax("address/del",o,"bcp_openapi");
	};
    bcp_wireless.openshare=function (o){
        ajax("api/openshare",o,"cs_openapi");
    };
    bcp_wireless.share=function (o){
        ajax("api/share",o,"cs_openapi");
    };
    bcp_wireless.getShareMemberInfo=function (o) {
        ajax("api/getShareMemberInfo",o,"cs_openapi");
    };
    bcp_wireless.activityInfo=function (o) {
        ajax("activity/info",o,"bcp_openapi");
    };
    bcp_wireless.applyOrderProduct=function (o) {
        ajax("applyOrder/product",o,"bcp_openapi");
    }
    bcp_wireless.productSpec=function (o) {
        ajax("product/spec",o,"shop_openapi");
    }
	bcp_wireless.parseDate = function(string) {
		var converted = Date.parse(string);
		var myDate = new Date(converted);
		if (myDate == "Invalid Date") {
			myDate = new Date(string);
		} else if (isNaN(myDate)) {
			var arys = string.split('-');
			myDate = new Date(arys[0], --arys[1], arys[2]);
		}
		if (isNaN(myDate)) {
			throw "not support date";
		}
		return myDate;
	};
	
	bcp_wireless.formateDate = function(date, notNeed) {
		try {
			var myDate = bcp_wireless.parseDate(date);
			if (notNeed) {
				return myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate();
			} else {
				var nowDate = new Date();
				nowDate.setHours(0, 0, 0, 0);
				var off = nowDate.getTime() - myDate.getTime();
				var days = Math.floor(off / (24 * 3600 * 1000));
//				if (days < 0) {
//					return "今天";
//				} else if (days < 1) {
//					return "昨天";
//				} else if (days < 2) {
//					return "前天";
//				} else {
					return myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate();
//				}
			}

		} catch (e) {
			return "";
		}
	};
	
	bcp_wireless.wxPay =function(param) {
		var instArguments = param;
		var req = $.evalJSON(instArguments.req);
		var payPackageInfo = $.evalJSON(instArguments.payPackageInfo);

		if (payPackageInfo.return_code == "FAIL") {
			Xiaoma.toast('微信付款失败:' + res.errorMsg);
			return;
		}

		var mreq = {
			"appId" : req.appId,// 公众号名称，由商户传入
			"timeStamp" : req.timeStamp,// 时间戳，自1970年以来的秒数
			"nonceStr" : req.nonceStr,// 随机串
			"package" : req.mpackage,
			"signType" : req.signType,// 微信签名方式:
			"paySign" : req.paySign
		};
		WeixinJSBridge.invoke('getBrandWCPayRequest', mreq, function(result) {
			if (param.callBackFn && typeof param.callBackFn == 'function') {
				if (result.err_msg == "get_brand_wcpay_request:ok") {
					param.callBackFn.call(result, 'S');
				} else {
					param.callBackFn.call(result, 'F');
				}
			} else {
				//Xiaoma.toast('微信付款完成');
			}
		});
	};
	
	bcp_wireless.numValid=function($num,min,max){
		min=min?min:0;
		if($num.val().length==0){
			$num.val(min);
			return false;
		}
		
		var num=$num.val();
		var reg = new RegExp("^[0-9]*$");
		if (!reg.test(num)) {
			$num.val(($num.val()+"").substr(0,$num.val().length-1));
			return false;
		} else {
			$num.val($num.val()*1);
			if(num<min){
				$num.val(min);
				return false;
			}
			
			if(max&&num>max){
				$num.val(max);
				return false;
			}
		}
		
		return true;
	};
	
	bcp_wireless.countdowner = function(limit, callBack, finallyCallBack) {
		var countdown = function() {
			if (limit > 0) {
				callBack(limit);
				limit--;
			} else if (limit == 0) {
				finallyCallBack();
			}
		}
		return setInterval(countdown, 1000);
	};
	
	bcp_wireless.post=function (url, params) {
		var temp = document.createElement("form");
		temp.action = url;
		temp.enctype = "application/x-www-form-urlencoded";
		temp.method = "post";
		temp.target = "_blank";
		temp.style.display = "none";
		for ( var x in params) {
			var opt = document.createElement("textarea");
			opt.name = x;
			opt.value = params[x];
			temp.appendChild(opt);
		}
		document.body.appendChild(temp);
		temp.submit();
		$(temp).remove();
		return temp;
	};
	
	bcp_wireless.remind=function(o){
		var defaults={
				title:o.title?o.title:"",
			    content:o.content?o.content:"",
			    ok:o.ok?o.ok:{
			    	text:"确定"
			    },
			    cancel:o.cancel?o.cancel:{
			    	text:"取消"
			    }
		};
		
	    var btns=[],cls="";
	    if(o.ok&&o.cancel){
	    	cls="ml";
	    }
	    
	    if(o.ok){
	    	  btns.push('<em class="'+cls+'" id="remind_submit"  style="display:;"> <a href="javascript:void(0)" class="colorbg_green">'+o.ok.text+'</a>  </em>');
	    }
	    
	    if(o.cancel){
	    	 btns.push('<em class="'+cls+' " id="remind_cancel"  style="display:;"> <a href="javascript:void(0)" class="colorbg_grey">'+o.cancel.text+'</a>  </em>');
	    }
	    var rm='<div class="com_popupc" id="remind_window">  <div class="com_popup" id="paymentWindow" style="display:block;"> <header class="title_bar2" style=""> <div class="header_word2">'+defaults.title+'</div> </header> <p class="pay_text"> '+defaults.content+'</p>   <div class="pay_way">'+btns.join("")+' </div></div> </div>  <div id="wx_mask" class="wx_mask"></div>';

		$("body").append(rm);
		$("#remind_submit").on("click",function(){
			$("#remind_window").remove();
			$("#wx_mask").remove();
			if(o.ok&&o.ok.callback){
				o.ok.callback.call();;
			}
		});
		
		$("#remind_cancel").on("click",function(){
			$("#remind_window").remove();
			$("#wx_mask").remove();
			if(o.cancel&&o.cancel.callback){
				o.cancel.callback.call();
			}
		});
	};
	

}(jQuery));

Xiaoma.toast = function(msg, t) {
	t = t || 2065;  //.addClass("wx_mask")
	var mtoast = $('<div><div>').css({
		'position' : 'absolute',
		'top' : '0px',
		'left' : '0px',
		'width' : $(window).width() + 'px',
		'height' : $(window).height() + 'px'
	}).appendTo(document.body).show();
	var mmsg = $('<div class="address_tips" >'+ msg + '</div>').appendTo(document.body);
//	mmsg.css({
//		'position' : 'absolute',
//		'top' : ($(window).height() - mmsg.height()) / 2 + 'px',
//		'left' : ($(window).width() - mmsg.width()) / 2 + 'px'
//	});
	window.setTimeout(function() {
		mtoast.remove();
		mmsg.remove();
	}, t);
};


