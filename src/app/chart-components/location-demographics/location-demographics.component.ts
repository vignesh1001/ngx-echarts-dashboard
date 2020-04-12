import { Component, OnInit } from '@angular/core';
import { getDefaultPieChartOptions } from '../chartUtil';

@Component({
  selector: 'location-demographics',
  templateUrl: './location-demographics.component.html',
  styleUrls: ['./location-demographics.component.css']
})
export class LocationDemographics implements OnInit {
  options: any;
  locationDemographicData = [];
  constructor() {
    this.locationDemographicData = [
      {dataValue: 30, dataName: 'County 1',confirmedCases:'123',suspectedCases:'345'},
      {dataValue: 35, dataName: 'County 2',confirmedCases:'123',suspectedCases:'345'},
      {dataValue: 35, dataName: 'County 3',confirmedCases:'123',suspectedCases:'345'},
    ]
  }

  ngOnInit() {
    this.options = getDefaultPieChartOptions({
      pieChartData: [
        { value: this.locationDemographicData[0].dataValue, name: this.locationDemographicData[0].dataName },
        { value: this.locationDemographicData[1].dataValue, name: this.locationDemographicData[1].dataName },
        { value: this.locationDemographicData[2].dataValue, name: this.locationDemographicData[2].dataName },
      ],
      pieChartColors:['#546570','#3fd7a4','#c23531'],
      titleText:'Demographics by Location',
      seriesName:'Demographics by Location',
    });
  
  }
}
