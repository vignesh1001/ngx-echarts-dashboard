

export const getDefaultPieChartOptions = (defaultOptions) => {

  const {pieChartData,pieChartColors=['#546570','#c23531','#37A2DA','#dd6b66','#293c55','#6e7074'],titleText='',seriesName=''} = defaultOptions;
  const chartColors = [];
  pieChartData.forEach((item,index)=>{
    if(!item.color) {
      item.color = pieChartColors[index];
    }
    chartColors.push(item.color);
  });
  
  return {
        // title: {
        //   text: titleText,
        //   left: 'center',
        //   textStyle:{
        //     fontStyle: 'normal'
        //   }
        // },
        
        grid: [{ top: "30%", bottom: "35%",left:'20%' , containLabel:true}],
        tooltip: {
          // formatter: params => {
          //   console.log(params);
          //   return '<div><span style="color:'+params.color+';border-radius:40px;border:3px solid;"> </span>'+params.name+' '+params.value+'</div>'
          // },
          confine: true
        },
        // legend:{
        //   show:true,
        //   orient: 'vertical',
        //   formatter: 'are {name}',
        //   bottom :0,
        //   data: [{
        //     name: '50-70 Years Old',
        //     icon: 'none',
        //     textStyle: {
        //         color: '#facd07'
        //     }
        //   },{
        //     name: '30-50 Years Old',
        //     icon: 'none',
        //     textStyle: {
        //         color: '#a988d8'
        //     }
        //   }]
        // },
        series: [{
          name: seriesName,
          type: 'pie',
          center: ['50%', '40%'],
          radius: ['30%', '40%'],
          hoverOffset: 3,
          color: chartColors,
          labelLine: {
            length:8,
            length2:10,
            show:false,
          },
          label: {
            formatter: '{per|{c}%}\n{b|{b}}',
            rich: {
              b: {
                fontSize: 12,
                padding:[0,-10]
              },
              per: {
                fontWeight: 'bold',
                fontSize: 14,
                backgroundColor: '#FFF',
                borderRadius: 2,
                padding:[0,-10]
              }
            }
          },
          data:pieChartData,
          emphasis: {
            itemStyle: {
              shadowBlur: 2,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
        }
      ]
    }
  };