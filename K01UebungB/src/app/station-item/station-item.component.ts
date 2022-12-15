import { StationValley } from 'src/shared/station-valley';
import { Component, OnInit, Input } from '@angular/core';
import { InvokeFunctionExpr } from '@angular/compiler';


@Component({
  selector: 'app-station-item',
  templateUrl: './station-item.component.html',
  styleUrls: ['./station-item.component.scss']
})
export class StationItemComponent implements OnInit {
  @Input() station!: StationValley;

  constructor() { }

  ngOnInit(): void {
  }

}
