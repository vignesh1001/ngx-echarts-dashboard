import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'age-demographics',
  templateUrl: './age-demographics.component.html',
  styleUrls: ['./age-demographics.component.css']
})
export class AgeDemographics implements OnInit, DoCheck {
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

    for (let i = 0; i < 5; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 + 10) + i / 6) * 5);
    }

    this.options = {
      tooltip: {
        formatter: this.getTooltipFormatter(),
        confine: true
      },
      series: [{
        name: 'Age Demographics',
        type: 'pie',
        radius: ['40%', '55%'],
        hoverOffset: 3,
        color: ['#facd07','#a988d8'],
        label: {
          formatter: '{per|{c}%}\n{b|{b}}',
          rich: {
            b: {
              fontSize: 12,
              lineHeight: 33
            },
            per: {
              color: '#000',
              backgroundColor: '#FFF',
              padding: [2, 4],
              borderRadius: 2
            }
          }
        },
        data: [
          {value: 75, name: '50-70 Years Old'},
          {value: 25, name: '30-50 Years Old'},
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 2,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
      }
    ]
    };
  }
}
