import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenutzerComponent } from './benutzer/benutzer.component';
import { BenutzerverwaltungComponent } from './benutzerverwaltung/benutzerverwaltung.component';
import { EditBenutzerComponent } from './edit-benutzer/edit-benutzer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'benutzerverwaltung', component: BenutzerverwaltungComponent },
  { path: 'benutzer', component: BenutzerComponent},
  { path: 'editBenutzer/:id', component: EditBenutzerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
