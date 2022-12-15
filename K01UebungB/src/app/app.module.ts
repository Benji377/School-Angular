import { StationListComponent } from './station-list/station-list.component';
import { StationItemComponent } from './station-item/station-item.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherService } from 'src/shared/weather-service';
import {MatTableModule} from '@angular/material/table';
import { MeasurementItemComponent } from './measurement-item/measurement-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StationItemComponent,
    StationListComponent,
    MeasurementItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
