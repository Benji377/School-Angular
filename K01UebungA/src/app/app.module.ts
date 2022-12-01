import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonListComponentComponent } from './person-list-component/person-list-component.component';
import { PersonItemComponentComponent } from './person-item-component/person-item-component.component';
import { EmailListComponentComponent } from './email-list-component/email-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponentComponent,
    PersonItemComponentComponent,
    EmailListComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
