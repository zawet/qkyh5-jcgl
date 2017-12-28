// JavaScript Document
define({ //dedine闭包
	childinfo: {
		values: [
			["关小女","关小子","关大小"]
		],
		valuesActive: [1] //默认选择第几个
    },
    childinfo2:[
        ["0","关小子"],["1","关小女"],["2","关大子"]
    ],
    year2:[
        ["0","2016"],["1","2017"],["2","2018"]
    ],
    moon2:[
        ["0","1月"],["1","2月"],["2","3月"],["3","4月"],["4","5月"],["5","6月"],["6","7月"],["7","8月"],["8","9月"],["9","10月"],["10","11月"],["11","12月"],
    ],
    year: {
		values: [
			["2016","2017","2018"]
		],
		valuesActive: [1] //默认选择第几个
    },
    moon: {
		values: [
			["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
		],
		valuesActive: [11] //默认选择第几个
	},
	tcdata:{
		"2017-12-8":{
            lunch:[
                {tcname:"糖醋鲤鱼",tcimg:"jc04.png",tcprice:6,isActive:false},
                {tcname:"糖醋鲤鱼",tcimg:"jc05.png",tcprice:6,isActive:false},
                {tcname:"糖醋鲤鱼",tcimg:"jc06.png",tcprice:6,isActive:false}
            ],
            dinner:[
                {tcname:"糖醋鲤鱼",tcimg:"jc07.png",tcprice:6,isActive:false}
            ]
        },
		"2017-12-21":{
            lunch:[
                {tcname:"糖醋鲤鱼",tcimg:"jc04.png",tcprice:6,isActive:true},
				{tcname:"糖醋鲤鱼",tcimg:"jc05.png",tcprice:6,isActive:false},
				{tcname:"糖醋鲤鱼",tcimg:"jc04.png",tcprice:6,isActive:false},
				{tcname:"糖醋鲤鱼",tcimg:"jc05.png",tcprice:6,isActive:false},
				{tcname:"糖醋鲤鱼",tcimg:"jc04.png",tcprice:6,isActive:false},
				{tcname:"糖醋鲤鱼",tcimg:"jc05.png",tcprice:6,isActive:false},
				{tcname:"糖醋鲤鱼",tcimg:"jc04.png",tcprice:6,isActive:false}
			
            ],
            dinner:[
                {tcname:"糖醋鲤鱼",tcimg:"jc07.png",tcprice:6,isActive:false}
            ]
        },
		"2017-12-16":{
            lunch:[
                {tcname:"糖醋鲤鱼",tcimg:"jc04.png",tcprice:6,isActive:true},
                {tcname:"糖醋鲤鱼",tcimg:"jc05.png",tcprice:6,isActive:false},
                {tcname:"糖醋鲤鱼",tcimg:"jc06.png",tcprice:6,isActive:false}
            ],
            dinner:[
				{tcname:"糖醋鲤鱼",tcimg:"jc05.png",tcprice:6,isActive:true},
				{tcname:"糖醋鲤鱼",tcimg:"jc07.png",tcprice:6,isActive:false},
				{tcname:"糖醋鲤鱼",tcimg:"jc09.png",tcprice:6,isActive:false},
				{tcname:"糖醋鲤鱼",tcimg:"jc02.png",tcprice:6,isActive:false},
				{tcname:"糖醋鲤鱼",tcimg:"jc03.png",tcprice:6,isActive:false}
            ]
        },
        "2017-12-22":{
            lunch:[
                {tcname:"糖醋鲤鱼",tcimg:"jc04.png",tcprice:6,isActive:true},
				{tcname:"糖醋鲤鱼",tcimg:"jc01.png",tcprice:6,isActive:false},
				{tcname:"糖醋鲤鱼",tcimg:"jc02.png",tcprice:6,isActive:false},
				{tcname:"糖醋鲤鱼",tcimg:"jc03.png",tcprice:6,isActive:false},
				{tcname:"糖醋鲤鱼",tcimg:"jc09.png",tcprice:6,isActive:false},
                {tcname:"糖醋鲤鱼",tcimg:"jc08.png",tcprice:6,isActive:false}
            ],
            dinner:[
                {tcname:"糖醋鲤鱼",tcimg:"jc07.png",tcprice:6,isActive:true},
                {tcname:"糖醋鲤鱼",tcimg:"jc06.png",tcprice:6,isActive:false}
            ]
		},
		"2017-12-28":{
            lunch:[
                {tcname:"糖醋鲤鱼",tcimg:"jc04.png",tcprice:6,isActive:true},
                {tcname:"糖醋鲤鱼",tcimg:"jc07.png",tcprice:6,isActive:false},
                {tcname:"糖醋鲤鱼",tcimg:"jc06.png",tcprice:6,isActive:false}
            ],
            dinner:[
                {tcname:"糖醋鲤鱼",tcimg:"jc07.png",tcprice:6,isActive:true},
                {tcname:"糖醋鲤鱼",tcimg:"jc06.png",tcprice:6,isActive:false},
                {tcname:"糖醋鲤鱼",tcimg:"jc06.png",tcprice:6,isActive:false}
            ]
        },
        "2017-12-27":{
            lunch:[
                {tcname:"糖醋鲤鱼",tcimg:"jc04.png",tcprice:6,isActive:false},
                {tcname:"糖醋鲤鱼",tcimg:"jc05.png",tcprice:6,isActive:true},
                {tcname:"糖醋鲤鱼",tcimg:"jc06.png",tcprice:6,isActive:false}
            ],
            dinner:[
                {tcname:"糖醋鲤鱼",tcimg:"jc07.png",tcprice:6,isActive:true},
                {tcname:"糖醋鲤鱼",tcimg:"jc08.png",tcprice:6,isActive:false},
                {tcname:"糖醋鲤鱼",tcimg:"jc09.png",tcprice:6,isActive:false}
            ]
        }
    }
	
	

});