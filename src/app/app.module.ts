import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from './app.component';

import { AgeDemographics } from './chart-components/age-demographics/age-demographics.component';
import { AgeByDay } from './chart-components/age-by-day/age-by-day.component';
import { GenderDemographics } from './chart-components/gender-demographics/gender-demographics.component';
import { LocationDemographics } from './chart-components/location-demographics/location-demographics.component';
import { ConfirmedCases } from './chart-components/confirmed-cases/confirmed-cases.component';


@NgModule({
  declarations: [
    AppComponent, AgeDemographics,AgeByDay,GenderDemographics,LocationDemographics,ConfirmedCases
  ],
  imports: [
    BrowserModule, NgxEchartsModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
