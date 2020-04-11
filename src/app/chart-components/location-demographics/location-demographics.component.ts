import { Component, OnInit, DoCheck } from '@angular/core';
import { getDefaultPieChartOptions } from '../chartUtil';

@Component({
  selector: 'location-demographics',
  templateUrl: './location-demographics.component.html',
  styleUrls: ['./location-demographics.component.css']
})
export class LocationDemographics implements OnInit, DoCheck {
  options: any;

  ngDoCheck(): void {
    console.log('doCheck');
  }

  ngOnInit() {
    this.options = getDefaultPieChartOptions({
      pieChartData:[
        {value: 30, name: 'County 1'},
        {value: 35, name: 'County 2'},
        {value: 35, name: 'County 3'},
      ],
      pieChartColors:['#546570','#3fd7a4','#c23531'],
      titleText:'Demographics by Location',
      seriesName:'Demographics by Location',
    });
  
  }
}
