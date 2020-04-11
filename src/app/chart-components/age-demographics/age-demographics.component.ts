import { Component, OnInit, DoCheck } from '@angular/core';

import { getDefaultPieChartOptions } from '../chartUtil';

@Component({
  selector: 'age-demographics',
  templateUrl: './age-demographics.component.html',
  styleUrls: ['./age-demographics.component.css']
})
export class AgeDemographics implements OnInit, DoCheck {
  options: any;
  ngDoCheck(): void {
    console.log('doCheck');
  }

  ngOnInit() {
    const pieChartData = [
      {value: 75, name: '50-70 Years Old',color:'#facd07'},
      {value: 25, name: '30-50 Years Old',color:'#a988d8'},
    ];
    this.options = getDefaultPieChartOptions({pieChartData,titleText:'Age Demographics',seriesName:'Age Demographics'});
  }
}
