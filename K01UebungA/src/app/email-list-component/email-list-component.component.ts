import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ua-email-list-component',
  templateUrl: './email-list-component.component.html',
  styleUrls: ['./email-list-component.component.scss']
})
export class EmailListComponentComponent implements OnInit {
  @Input() emails!:Array<String>;

  constructor() { }

  ngOnInit(): void {

  }

}
