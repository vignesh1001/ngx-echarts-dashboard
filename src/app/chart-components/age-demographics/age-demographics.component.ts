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
        // formatter: params => {
        //   return '<div style="width:300px; height: 400px">working</div>';
        // },
        formatter: this.getTooltipFormatter(),
        confine: true
      },
      xAxis: {
        data: xAxisData
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          barCategoryGap: '0%',
          data: data1
        },
        {
          type: 'bar',
          barCategoryGap: '0%',
          data: data2
        }
      ]
    };
  }
}
