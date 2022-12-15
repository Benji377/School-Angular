import { StationValley } from 'src/shared/station-valley';
import { Station } from 'src/shared/station';
import { Component, OnInit, Input } from '@angular/core';
import { InvokeFunctionExpr } from '@angular/compiler';

interface StationTableData {
  name: string;
  measurement: string;
}


@Component({
  selector: 'app-station-item',
  templateUrl: './station-item.component.html',
  styleUrls: ['./station-item.component.scss']
})
export class StationItemComponent implements OnInit {
  @Input() station!: StationValley;
  displayedColumns!: string[]
  dataSource!: StationTableData[]

  constructor() { }

  ngOnInit(): void {
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
  }

}
