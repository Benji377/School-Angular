import { Person } from 'src/shared/person';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ua-car-list-component',
  templateUrl: './car-list-component.component.html',
  styleUrls: ['./car-list-component.component.scss']
})
export class CarListComponentComponent implements OnInit {
  @Input() person!:Person;
  registrationyear!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
