import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonListComponentComponent } from './person-list-component/person-list-component.component';
import { PersonItemComponentComponent } from './person-item-component/person-item-component.component';
import { EmailListComponentComponent } from './email-list-component/email-list-component.component';
import { CarListComponentComponent } from './car-list-component/car-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponentComponent,
    PersonItemComponentComponent,
    EmailListComponentComponent,
    CarListComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
