import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { db } from '../shared/database';
import { Note } from '../shared/note';

@Component({
  selector: 'no-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes_arr!: Note[];
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      console.log(param.sort);
      switch (param.sort) {
        case "title":
          db.getNotesByTitle().then(data => this.notes_arr = data);
          break;
        
        case "theme":
          db.getNotesByTheme().then(data => this.notes_arr = data);
          break;
        
        case "date":
          db.getNotesByDate().then(data => this.notes_arr = data);
          break;
      
        default:
          db.getNotesByTitle().then(data => this.notes_arr = data);
          break;
      }
    })
  }

}
