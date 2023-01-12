import { StationListComponent } from './station-list/station-list.component';
import { MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherService } from 'src/shared/weather-service';
import { MatTableModule} from '@angular/material/table';
import { MeasurementItemComponent } from './measurement-item/measurement-item.component';
import { MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule} from '@angular/material/divider';
import { SearchTermComponent } from './search-term/search-term.component';
import { AppRoutingModule } from './app-routing.mdule';
import { HomeComponent } from './home/home.component';
import { StationDetailComponent } from './station-detail/station-detail.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { SearchStationComponent } from './search-station/search-station.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    MeasurementItemComponent,
    SearchTermComponent,
    HomeComponent,
    StationDetailComponent,
    SearchStationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
    AppRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatAutocompleteModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
