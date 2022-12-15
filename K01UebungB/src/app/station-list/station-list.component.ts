import { Component, OnInit } from '@angular/core';
import { StationValley } from 'src/shared/station-valley';
import { WeatherService } from 'src/shared/weather-service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {
  stations!: StationValley[];

  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.ws.getAll().subscribe(res => {
      this.stations = res;
      // Es wird nach Name sortiert
      this.stations.sort((s1, s2) => s1.name.localeCompare(s2.name));
      // Es werden nur jene Stationen angezeigt die mit S beginnen
      // this.stations = this.stations.filter(s => s.name.startsWith('S'));
  });
  }
 }

