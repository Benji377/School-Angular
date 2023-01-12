import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StationDetailComponent } from './station-detail/station-detail.component';
import { StationListComponent } from './station-list/station-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'stations', component: StationListComponent},
  { path: 'stations/:sortOrder', component: StationListComponent },
  { path: 'station/:sortOrder/:code', component: StationDetailComponent}
 ];

 @NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
 })
 export class AppRoutingModule { }
