import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiModel } from '../Models/api.model';
import { BenutzerService } from '../Services/benutzer.service';
import { BundeslandService } from '../Services/bundesland.service';

@Component({
  selector: 'app-benutzer',
  templateUrl: './benutzer.component.html',
  styleUrls: ['./benutzer.component.css']
})
export class BenutzerComponent implements OnInit {
  model: ApiModel.Benutzer = new ApiModel.Benutzer();
  bundeslaender: ApiModel.Bundesland[];
  vorgesetzten: ApiModel.Benutzer[];
  maxEintritt: Date;
  maxGeburtstag: Date;

  constructor(private router: Router, private benutzerService: BenutzerService, private bundeslandService: BundeslandService) {
    const datum = new Date();
    const datum_heute = new Date(datum.getFullYear(), datum.getMonth(), datum.getDate());
    this.maxEintritt = new Date(datum_heute);

    this.maxGeburtstag = new Date(datum_heute);
    this.maxGeburtstag.setFullYear(this.maxGeburtstag.getFullYear()-14);
   }

  ngOnInit(): void {
    this.model.bundesland = new ApiModel.Bundesland();
    this.getVorgesetzten();
    this.getBundeslaender();
}

  getVorgesetzten(): void {
    this.benutzerService.getVorgesetzten().subscribe(vorgesetzten => (this.vorgesetzten = vorgesetzten));
  }

  getBundeslaender(): void {
    this.bundeslandService.getBundeslaender().subscribe(bundeslaender => (this.bundeslaender = bundeslaender));
  }

  addBenutzer(): void {
    this.benutzerService
      .createBenutzer(this.model)
      .toPromise()
      .then((value: ApiModel.Benutzer) => {
        this.router.navigate(['/benutzerverwaltung']);
      })
      .catch((reason: any) => {
        console.error(reason);
      })
      .finally(() => {
        // do something on finally
      });
  }
}