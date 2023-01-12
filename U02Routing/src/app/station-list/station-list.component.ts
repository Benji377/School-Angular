import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StationValley } from 'src/shared/station-valley';
import { WeatherService } from 'src/shared/weather-service';

@Component({
  selector: 'ub-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {
  stations: StationValley[] = [];
  constructor(private route: ActivatedRoute, private ws: WeatherService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ws.getAll(params.sortOrder).subscribe(stations=>this.stations=stations);
      });

  }

}
