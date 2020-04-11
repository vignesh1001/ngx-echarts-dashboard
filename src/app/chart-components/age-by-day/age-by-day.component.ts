import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'age-by-day',
  templateUrl: './age-by-day.component.html',
  styleUrls: ['./age-by-day.component.css']
})
export class AgeByDay implements OnInit, DoCheck {
  name = 'Angular';

  options: any;

  ngDoCheck(): void {
    console.log('doCheck');
  }

  getTooltipFormatter() {
    return (params) => {
      return '<div style="width:200px; height: 100px">working</div>'
    };
  }

  ngOnInit() {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i <=6; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 + 10) + i / 6) * 5);
    }

    this.options = {title: {
        text: 'Age By Day',
padding: [
  50,
  0,
  0,
  20
],textStyle: {
        color: 'gray',
        shadowBlur: 10,        
        fontWeight:'bold'
    }
    },
    legend: {
        x: '70%',
        y: 'left',
        data:[{
    name: '30 - 50 Years old',
    // compulsorily set icon as a circle
    icon: 'circle',
    // set up the text in red
    textStyle: {
        color: '#a988d8',
        fontWeight:'bold'
    }
},{
    name: '50 - 70 Years old',
    // compulsorily set icon as a circle
    icon: 'circle',
    // set up the text in red
    textStyle: {
        color: '#facd07',
        shadowBlur: 10,        
        fontWeight:'bold'
    }
}],
padding: 0
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '10', '20', '30', '40', '50', '60', '70', '80', '90','100','110'],
            ['30 - 50 Years old', 1000, 2500, 3000, 2000, 1000, 3000, 1000, 2000, 1300.4, 2400,2400],
            ['50 - 70 Years old', 1500, 1220, 1805.7, 1003.1, 1806.5, 1220.1,1500, 1220, 1805.7,1220,2400]
        ]
    },
    xAxis: [
        {type: 'category', gridIndex: 0}
    ],
    yAxis: [
        {gridIndex: 0,splitNumber:3}
    ],
    grid: [
        {top: '25%',bottom: '35%'}
    ],
    series: [
        // These series are in the first grid.
        {type: 'bar', seriesLayoutBy: 'row',color: '#a988d8'},
        {type: 'bar', seriesLayoutBy: 'row',color: '#facd07'},
    ]
};;
  }
}
