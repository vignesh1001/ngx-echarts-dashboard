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
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#eee',
          borderColor: '#aaa',
          borderWidth: 1,
          borderRadius: 4,
          // shadowBlur:3,
          // shadowOffsetX: 2,
          // shadowOffsetY: 2,
          // shadowColor: '#999',
          // padding: [0, 7],
          rich: {
            a: {
              color: '#999',
              lineHeight: 22,
              align: 'center'
            },
            abg: {
              backgroundColor: '#333',
              width: '100%',
              align: 'right',
              height: 22,
              borderRadius: [4, 4, 0, 0]
            },
            hr: {
              borderColor: '#aaa',
              width: '100%',
              borderWidth: 0.5,
              height: 0
            },
            b: {
              fontSize: 16,
              lineHeight: 33
            },
            per: {
              color: '#eee',
              backgroundColor: '#334455',
              padding: [2, 4],
              borderRadius: 2
            }
          }
        },
        data: [
          {value: 75, name: '25%'},
          {value: 25, name: '75%'},
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
