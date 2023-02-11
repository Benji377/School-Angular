import { ArtikelFormComponent } from './artikel-form/artikel-form.component';
import { CreateAllComponent } from './create-all/create-all.component';
import { DeleteAllComponent } from './delete-all/delete-all.component';
import { ArtikellisteComponent } from './artikelliste/artikelliste.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ArtikellisteComponent, pathMatch: 'full' },
  { path: 'home', component: ArtikellisteComponent },
  { path: 'articles', component: ArtikellisteComponent },
  { path: 'add-article', component: ArtikelFormComponent },
  { path: 'remove-all', component: DeleteAllComponent },
  { path: 'add-all', component: CreateAllComponent },
  {
    path: 'article', component: ArtikelFormComponent,
    children: [
      { path: ':code', component: ArtikelFormComponent },
      { path: '', redirectTo: '/articles', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
