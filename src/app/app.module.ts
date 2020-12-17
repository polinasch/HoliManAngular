import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { BenutzerverwaltungComponent } from './benutzerverwaltung/benutzerverwaltung.component'; 
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { BenutzerComponent } from './benutzer/benutzer.component'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { EditBenutzerComponent } from './edit-benutzer/edit-benutzer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BenutzerverwaltungComponent,
    BenutzerComponent,
    EditBenutzerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    CovalentDataTableModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
