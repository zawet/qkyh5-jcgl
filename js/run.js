define(function(require,exports) {//dedine闭包
	var Data=require("./Data.js");//数据总成
	var qkyselect=require("./qkySelect.js");//下拉选择总成
	var fun=require("./qkyFunH5.js");//函数总成
	var dc=require("./dc.js");//日历总成
	var weekname = new Array("周日","周一","周二","周三","周四","周五","周六");  
    var myDate = new Date();
    var toy=myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var tom=myDate.getMonth();       //获取当前月份(0-11,0代表1月)
	var tod=myDate.getDate();        //获取当前日(1-31)
	

	//订餐须知点击事件
	$(".dc-know-tips").click(function(){
		$(".dc-know-info").toggleClass("open");
		$(this).find("i").toggleClass("r180");
	});
	$(document).not($(".dc-know-info")).click(function(){
		$(".dc-know-info").removeClass("open");
		$(".dc-know-tips").find("i").removeClass("r180");
	});
	/*防止事件冒泡*/
	$(".dc-know-info").click(function(event){
		event.stopPropagation();
	});
	
	exports.index=function(){
		//头部下拉
		$(".qkyh5_header_main").qkySelect({
			values:Data.childinfo.values,
			valuesActive:Data.childinfo.valuesActive,
		});
		
		//列表渲染
		dc.dcdist(toy,tom+1,tod);

		//周转换事件
		$(".tcweek-i").click(function(){
            var types="";
            if($(this).hasClass("left")) types="prv"; else types="next";
            var tsd=dc.getShowDate();
            var csd=dc.changeweek(Number(tsd[0]),Number(tsd[1]),Number(tsd[2]),types);
            dc.dcdist(Number(csd[0]),Number(csd[1]),Number(csd[2]));            
		}); 
		dc.listbox(); 	
		
	}

	exports.dc=function(){
		//列表渲染
		dc.dcdist(toy,tom+1,tod);
		dc.listbox();
		$(".dc-tcbox").on("click",".dc-listbox.new .cdul li",function(){
            $(this).toggleClass("active").siblings().removeClass("active");
		});
		$(".surechoose").click(function(){
			$(".popup").addClass("open");
			$(".popup-mask").fadeIn(200);
           $(".dc-motc").html("");
            $(".dc-listbox.new").each(function(){
                var weekd=$(this).find(".dc-week-date span em").html()+"<br/>"+$(this).find(".dc-week-date span b").html();
                var lt=$(this).find("ul.lunch li.active .cdname").html();
                var dt=$(this).find("ul.dinner li.active .cdname").html();
                if(fun.isNull(lt)=="kong") lt="未订餐";
                if(fun.isNull(dt)=="kong") dt="未订餐";
                $(".dc-motc").append('<tr><td>'+weekd+'</td><td>'+lt+'</td><td>'+dt+'</td></tr>');
            });
		});
		$(".popup-close").click(function(){
			$(this).parents(".popup").removeClass("open");
			$(".popup-mask").fadeOut(200);
		})	 
	}

	exports.jl=function(){
		$("#man").qkySelect({
			values:Data.childinfo.values,
			valuesActive:Data.childinfo.valuesActive,
		});
		$("#year").qkySelect({
			values:Data.year.values,
			valuesActive:Data.year.valuesActive
		});
		$("#moon").qkySelect({
			values:Data.moon.values,
			valuesActive:Data.moon.valuesActive
		});
	}

	exports.jy=function(){
		$(".jy-sxbut").click(function(){
			$(this).toggleClass("open")
			$("#shaixuan").toggleClass("open");
			$(".popup-mask").fadeToggle(200);
		});
		$(".cj").click(function(){
			$("#tips1").addClass("open");
			$(".popup-mask").fadeIn(200);
		});
		$(".allcj").click(function(){
			$("#tips2").addClass("open");
			$(".popup-mask").fadeIn(200);
		});
		$(".popup-close").click(function(){
			$(this).parents(".popup").removeClass("open");
			$(".popup-mask").fadeOut(200);
			$(".jy-sxbut").removeClass("open");
		});
		$("body").on("click",".radio-box-choose a",function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
	}
	
});