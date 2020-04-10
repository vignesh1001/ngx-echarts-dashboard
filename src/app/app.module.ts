import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgeDemographics } from './chart-components/age-demographics/age-demographics.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxEchartsModule, MatTooltipModule,
  BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, AgeDemographics ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
