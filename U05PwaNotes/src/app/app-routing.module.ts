import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NotesComponent } from './notes/notes.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'home', component: NotesComponent },
  { path: 'themes', component: ThemesComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'notes/:sort', component: NotesComponent },
  { path: 'notes/:sort/:code', component: NotesComponent },
  { path: 'addEdit', component: NoteEditComponent },
  { path: 'addEdit/:id', component: NoteEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
