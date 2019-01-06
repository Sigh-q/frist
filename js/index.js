var echartsLeft = echarts.init(document.querySelector(".echarts-left"));

// 指定图表的配置项和数据
var option1 = {
    title: {
        text: '2019年注册人数'
    },
    tooltip: {},
    legend: {
        data:['注册人数','销量']
    },
    xAxis: {
        data: ["一月","二月","三月","四月","五月","六月"]
    },
    yAxis: {},
    series: [{
        name: '注册人数',
        type: 'bar',
        data: [500, 200, 360, 100, 100, 200]
    },{
        name: '销量',
        type: 'line',
        data:[200,346,562,232,593,258]
    }]
};

// 使用刚指定的配置项和数据显示图表。
echartsLeft.setOption(option1);

var echartsRight = echarts.init(document.querySelector(".echarts-right"));

option2 = {
    title : {
        text: '热门品牌销售',
        subtext: '2019.01',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['耐克','361','AJ','特步','阿迪']
    },
    series : [
        {
            name: '品牌热卖',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'耐克'},
                {value:310, name:'361'},
                {value:234, name:'AJ'},
                {value:135, name:'特步'},
                {value:1548, name:'阿迪'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

echartsRight.setOption(option2);