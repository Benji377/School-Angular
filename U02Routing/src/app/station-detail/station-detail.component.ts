import { Component, OnInit } from '@angular/core';
import { StationValley } from 'src/shared/station-valley';
import { WeatherService } from 'src/shared/weather-service';

@Component({
  selector: 'ua-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.scss']
})
export class StationDetailComponent implements OnInit {
  stations: StationValley[] = [];
  filteredStation: StationValley[] = [];

  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.ws.getAll("").subscribe(res => {
      this.stations = res;
      // Es wird nach Name sortiert
      this.stations.sort((s1, s2) => s1.name.localeCompare(s2.name));
      this.filteredStation = this.stations;
    });
  }

  onSearchTermChange(searchTerm: string) {
    console.log(searchTerm);
    this.filteredStation = this.stations.filter(s => s.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
  }

}
