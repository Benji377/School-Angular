import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/shared/person';

@Component({
  selector: 'ua-person-item-component',
  templateUrl: './person-item-component.component.html',
  styleUrls: ['./person-item-component.component.scss']
})
export class PersonItemComponentComponent implements OnInit {
  @Input() person!:Person;

  constructor() {}

  ngOnInit(): void {
  }

}
