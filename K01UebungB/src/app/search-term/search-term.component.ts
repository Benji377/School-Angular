import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ub-search-term',
  templateUrl: './search-term.component.html',
  styleUrls: ['./search-term.component.scss']
})
export class SearchTermComponent implements OnInit {
  @Output('searchTerm') changeEvent: EventEmitter<string>;

  constructor() {
    this.changeEvent = new EventEmitter<string>();
   }

   emitSearchTermChange(searchTerm: string) {
    this.changeEvent.emit(searchTerm);
    }

  ngOnInit(): void {
  }

}
