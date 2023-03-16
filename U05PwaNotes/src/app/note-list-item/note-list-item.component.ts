import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../shared/note';

@Component({
  selector: 'no-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.scss']
})
export class NoteListItemComponent implements OnInit {
  @Input() note!: Note;

  constructor() { }

  ngOnInit(): void {
  }

}
