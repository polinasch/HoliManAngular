import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntragComponent } from './antrag/antrag.component';
import { BenutzerComponent } from './benutzer/benutzer.component';
import { BenutzerverwaltungComponent } from './benutzerverwaltung/benutzerverwaltung.component';
import { EditAntragComponent } from './edit-antrag/edit-antrag.component';
import { EditBenutzerComponent } from './edit-benutzer/edit-benutzer.component';
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
  { path: 'konfiguration', component: KonfigurationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
