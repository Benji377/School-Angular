import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StationValley } from 'src/shared/station-valley';
import { WeatherService } from 'src/shared/weather-service';
import { Station } from 'src/shared/station';

interface StationTableData {
  name: string;
  measurement: string;
}

@Component({
  selector: 'ua-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.scss']
})
export class StationDetailComponent implements OnInit {
  station?: StationValley;
  displayedColumns!: string[];
  dataSource!: StationTableData[];

  constructor(
    private route: ActivatedRoute,
    private ws: WeatherService,
    private router: Router,
   ) { }

  ngOnInit() {
    const code: string = this.route.snapshot.params.code;
    this.ws.get(code).subscribe(res => {
      this.station = res;
      this.displayedColumns = ['name', 'measurement'];
      this.dataSource = [
        {name: Station.descriptions.t, measurement: `${this.station.t.toString()} ${Station.units.t}`},
        {name: Station.descriptions.rh, measurement: `${this.station.rh.toString()} ${Station.units.rh}`},
        {name: Station.descriptions.p, measurement: `${this.station.p.toString()} ${Station.units.p}`},
        {name: Station.descriptions.n, measurement: `${this.station.n.toString()} ${Station.units.n}`},
        {name: Station.descriptions.dd, measurement: this.station.dd.toString()},
        {name: Station.descriptions.ff, measurement: `${this.station.ff.toString()} ${Station.units.ff}`},
        {name: Station.descriptions.sd, measurement: `${this.station.sd.toString()} ${Station.units.sd}`},
        {name: Station.descriptions.gs, measurement: `${this.station.gs.toString()} ${Station.units.gs}`}
      ];
    });
  }

  backToStations() {
    this.router.navigate(['/stations']);
    }

}
