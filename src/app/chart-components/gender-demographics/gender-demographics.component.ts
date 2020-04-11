import { Component, OnInit, DoCheck } from '@angular/core';
import { getDefaultPieChartOptions } from '../chartUtil';

@Component({
  selector: 'gender-demographics',
  templateUrl: './gender-demographics.component.html',
  styleUrls: ['./gender-demographics.component.css']
})
export class GenderDemographics implements OnInit, DoCheck {
  options: any;

  ngDoCheck(): void {
    console.log('doCheck');
  }

  ngOnInit() {
    this.options = getDefaultPieChartOptions({
      pieChartData:[
          {value: 45, name: 'Female'},
          {value: 55, name: 'Male'},
        ],
      titleText:'Gender Demographics',
      seriesName:'Gender Demographics',
    });
    
    // {
    //   title: {
    //     text: 'Gender Demographics',
    //     left: 'center',
    // },
    //   tooltip: {
    //     formatter: this.getTooltipFormatter(),
    //     confine: true
    //   },
    //   legend:{
    //     show:true,
    //     orient: 'vertical',
    //     formatter: 'are {name} cases',
    //     bottom :0,
    //   },
    //   series: [{
    //     name: 'Age Demographics',
    //     type: 'pie',
    //     radius: ['40%', '55%'],
    //     hoverOffset: 3,
    //     label: {
    //       formatter: '{per|{c}%}\n{b|{b}}',
    //       rich: {
    //         b: {
    //           fontSize: 12,
    //           lineHeight: 33
    //         },
    //         per: {
    //           color: '#000',
    //           backgroundColor: '#FFF',
    //           padding: [2, 4],
    //           borderRadius: 2
    //         }
    //       }
    //     },
    //     data: [
    //       {value: 45, name: 'Female'},
    //       {value: 55, name: 'Male'},
    //     ],
    //     emphasis: {
    //         itemStyle: {
    //             shadowBlur: 2,
    //             shadowOffsetX: 0,
    //             shadowColor: 'rgba(0, 0, 0, 0.5)'
    //         }
    //     }
    //   }
    // ]
    // };
  
  }
}
