import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ThemeDialogComponent } from '../theme-dialog/theme-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../shared/note';
import { User } from '../shared/user';
import { db } from './../shared/database';
import { Theme } from '../shared/theme';
import { Location } from '@angular/common';

@Component({
  selector: 'no-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {
  editForm!: FormGroup;
  public note: Note = Note.empty();
  public themes: Theme[] = [];
  public id = null;

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private location: Location,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    const user: User = User.emptySepp();
    db.getThemesByDescription().then(data => this.themes = data);
    this.editForm = this.fb.group({
      title: [this.note.title, Validators.required],
      theme: [this.note.theme?.description, Validators.required],
      text: [this.note.text, Validators.required]
    });
    if (this.route.snapshot.params.id) {
      this.id = this.route.snapshot.params.id;
      db.getNotesById(this.route.snapshot.params.id).then(result => {
        if(result) {
          this.note = result;
          this.editForm.patchValue(this.note);
          this.editForm.controls.theme.setValue(this.note.theme?.description as String);
        }
      });
    }
  }

  public back() {
    this.location.back();
  }

  public async delete() {
    await db.deleteNote(this.note);
    this.back();
  }

  public addTheme() {
    const dialogRef = this.dialog.open(ThemeDialogComponent, {
      data: {
        data: null,
        editing: false
      }
    });
    dialogRef.afterClosed().subscribe(async data => {
      const theme = Theme.empty();
      theme.description = data.data;
      await db.addTheme(theme);
      db.getThemesByDescription().then(data => this.themes = data);
      this.editForm.controls.theme.setValue(theme.description);
    });
  }

  public async submit() {
    if(!this.id) {
      const note = Note.empty();
      note.user = User.emptySepp();
      const theme = await db.getThemeByDescription(this.editForm.controls.theme.value);
      note.theme = theme;
      note.text = this.editForm.controls.text.value;
      note.title = this.editForm.controls.title.value;
      await db.addNote(note);
    } else {
      const theme = await db.getThemeByDescription(this.editForm.controls.theme.value);
      this.note.theme = theme;
      this.note.text = this.editForm.controls.text.value;
      this.note.title = this.editForm.controls.title.value;
      await db.updateNote(this.note);
    }
    this.editForm.reset(Note.empty());
    this.back();
  }

}
