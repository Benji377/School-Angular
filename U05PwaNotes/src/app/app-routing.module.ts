import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  { path: '', component: NotesComponent, pathMatch: 'full' },
  { path: 'home', component: NotesComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'themes', component: ThemesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
