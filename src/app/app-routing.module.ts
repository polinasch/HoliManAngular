import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntragComponent } from './antrag/antrag.component';
import { AntragdetailsComponent } from './antragdetails/antragdetails.component';
import { BenutzerComponent } from './benutzer/benutzer.component';
import { BenutzerverwaltungComponent } from './benutzerverwaltung/benutzerverwaltung.component';
import { EditAntragComponent } from './edit-antrag/edit-antrag.component';
import { EditBenutzerComponent } from './edit-benutzer/edit-benutzer.component';
import { ErhalteneAntraegeComponent } from './erhaltene-antraege/erhaltene-antraege.component';
import { HomeComponent } from './home/home.component';
import { KonfigurationComponent } from './konfiguration/konfiguration.component';
import { ListAntraegeComponent } from './list-antraege/list-antraege.component';
import { UrlaubslisteComponent } from './urlaubsliste/urlaubsliste.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'benutzerverwaltung', component: BenutzerverwaltungComponent },
  { path: 'benutzer', component: BenutzerComponent},
  { path: 'editBenutzer/:id', component: EditBenutzerComponent},
  { path: 'antrag', component: AntragComponent },
  { path: 'antraegeliste', component: ListAntraegeComponent },
  { path: 'editAntrag/:id', component: EditAntragComponent },
  { path: 'urlaubsliste', component: UrlaubslisteComponent },
  { path: 'konfiguration', component: KonfigurationComponent },
  { path: 'erhalteneAnträge', component: ErhalteneAntraegeComponent},
  { path: 'antragdetails/:id', component: AntragdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }