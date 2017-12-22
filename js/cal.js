
define(function(require,exports) {
    var fun=require("./qkyFunH5.js");//函数总成

    var myDate = new Date();
    var toy=myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var tom=myDate.getMonth();       //获取当前月份(0-11,0代表1月)
    var tod=myDate.getDate();        //获取当前日(1-31)
    var sy,sm,sd,ey,ed,em;

exports.xlDraw=function (s,e,fg,id,sjdata){
    var moons=howMoon(s,e,fg)+1;
    var sa=s.split(fg);
    var ea=e.split(fg);
    sy=Number(sa[0]),sm=Number(sa[1]),sd=Number(sa[2]);
    ey=Number(ea[0]),em=Number(ea[1]),ed=Number(ea[2]);
    var y=Number(sa[0]),m=Number(sa[1]),d=Number(sa[2]);
    for(var i=0;i<moons;i++){
        if(m>12){ m=1;y=y+1;}
        calendar(y,m,d,id,i);
        m++;
    }

    //渲染学期校历后进行周数的排列，使用的是指定newday和kong样式的判断，所以样式不能轻易换
    $(".newday").parents("tr").addClass("newtr");
	var t=0;
	$(".newtr").each(function(i) {
		if($(this).find("td a").eq(0).hasClass("kong")&&i!=0)t=t;else t++;
        $(this).find(".show-week").html("第"+t+"周");
    });

    //事件数据插入
    var ids="";
    for(var i=0;i<sjdata.length;i++){
        var d=sjdata[i];
        var thisdates=fun.getAll(d.startTime,d.endTime);//获取数据来的开始日期和结束日期间有什么日期
        console.log(thisdates);
        for(var ti=0;ti<thisdates.length;ti++){
            $(".newday[date='"+thisdates[ti]+"']").attr("href","index_info.html?date="+thisdates[ti]).addClass("hasevent")
            //.append('<b id="'+id.id+'" title="'+id.cont+'"></b>')
        }
    }
}

    function calendar(y,m,d,id,eq){
        var weekHtml="<tr>";
        var moomHtml="";
        md=DayNumOfMonth(y,m);//获取当前月天数
        var dates=new Date(y,m-1,1);
        var mfd=dates.getDay();//获取第一天星期几，0为星期天
        //获取此月周数
        var forweek=Math.ceil((md+mfd)/7);
        
        id.append("<tr><td class='show-week'></td><td class='show-moon' colspan ='7'>"+y+"年"+m+"月</td></tr>");
        for(var i=0;i<forweek;i++){
                weekHtml+="<td class='show-week'></td>";
            for(var j=0;j<7;j++){
                //j+(i*7)为加了前空白期的循环下标
                if((j+(i*7))<mfd){
                weekHtml+='<td><a class="kong">&nbsp;</a></td>';
                }else{
                    var thisday=j+(i*7)-mfd+1;
                    //(j+(i*7))-mfd+1为真正日数，即几号；
                    if(thisday>md){
                        weekHtml+='<td><a class="kong">&nbsp;</a></td>';
                    }else {
                        var dss='';if(thisday<10)dss="0"+thisday;else dss=thisday;
                        var mss='';if(m<10)mss="0"+m;else mss=m;
                        var other="";

                        if(thisday==tod&&y==toy&&m==tom+1){
                            if(tod<sd&&toy<=sy&&(tom+1)<=sm&&tod>ed&&toy>=ey&&(tom+1)>=em)
                            other='class="today oldday" title="今天"';
                            else
                            other='class="today newday" title="今天"';
                        }else if(thisday<sd&&y<=sy&&m<=sm){
                            other='class="oldday"';
                        }else if(thisday>ed&&y>=ey&&m>=em){
                            other='class="oldday"';
                        }else if(thisday==sd&&y==sy&&m==sm){
                            other='class="xqStartday newday"';
                        }else{
                            other='class="newday"';
                        }
                        weekHtml+='<td><a date="'+y+'-'+mss+'-'+dss+'"  '+other+'><span>'+dss+'</span></a></td>';
                    }
                }
            }
            moomHtml+=weekHtml+"</tr>";
            weekHtml="<tr>";
        }
        id.append(moomHtml);	
    }
    //获取指定年月的天数
    function DayNumOfMonth(Year,Month){
        var d = new Date(Year,Month,0);
        return d.getDate();
    }
    //计算两个日期的相差多少个月
    function howMoon(s,e,fg){
        var ms;
        var sa=s.split(fg);
        var ea=e.split(fg);
        var yi=ea[0]-sa[0];
        var mi=ea[1]-sa[1];	
        if(yi>0){
            if(mi<0) ms=(12+mi)+12*(yi-1);
            if(mi>=0) ms=mi+12*yi;
        }else if(yi<0){
            ms= -1;
        }else{
            if(mi<0) ms= -1;
            if(mi>=0) ms=mi;
        }
        return ms;
    }

});
