import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'location-demographics',
  templateUrl: './location-demographics.component.html',
  styleUrls: ['./location-demographics.component.css']
})
export class LocationDemographics implements OnInit, DoCheck {
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
    this.options = {
      title: {
        text: 'Demographics by Location',
        left: 'center',
    },
      tooltip: {
        formatter: this.getTooltipFormatter(),
        confine: true
      },
      legend:{
        show:false,
        orient: 'vertical',
        formatter: 'are {name} cases',
        bottom :0,
      },
      series: [{
        name: 'Age Demographics',
        type: 'pie',
        center: ['40%', '40%'],
        radius: ['40%', '55%'],
        hoverOffset: 3,
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
          {value: 30, name: 'County 1'},
          {value: 35, name: 'County 2'},
          {value: 35, name: 'County 3'},
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
