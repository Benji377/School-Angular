import { StationListComponent } from './station-list/station-list.component';
import { StationItemComponent } from './station-item/station-item.component';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherService } from 'src/shared/weather-service';
import {MatTableModule} from '@angular/material/table';
import { MeasurementItemComponent } from './measurement-item/measurement-item.component';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { SearchTermComponent } from './search-term/search-term.component';

@NgModule({
  declarations: [
    AppComponent,
    StationItemComponent,
    StationListComponent,
    MeasurementItemComponent,
    SearchTermComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
