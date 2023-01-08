import { Component, Input, OnInit } from '@angular/core';
import { Measurement } from 'src/shared/measurement';

@Component({
  selector: 'ub-measurement-item',
  templateUrl: './measurement-item.component.html',
  styleUrls: ['./measurement-item.component.scss']
})
export class MeasurementItemComponent implements OnInit {
  @Input() measurement!: Measurement;

  constructor() { }

  ngOnInit(): void {
  }

}
