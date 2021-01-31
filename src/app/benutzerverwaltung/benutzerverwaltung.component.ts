import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { ApiModel } from '../Models/api.model';
import { BenutzerService } from '../Services/benutzer.service';

@Component({
  selector: 'app-benutzerverwaltung',
  templateUrl: './benutzerverwaltung.component.html',
  styleUrls: ['./benutzerverwaltung.component.css']
})
export class BenutzerverwaltungComponent implements OnInit {
  Benutzer: ApiModel.Benutzer[];

  columns: ITdDataTableColumn[] = [
    { name: 'BenutzerID', label: 'Benutzer ID', sortable: true },
    { name: 'Benutzername', label: 'Benutzername', sortable: true },
    { name: 'Vorname', label: 'Vorname', sortable: true },
    { name: 'Nachname', label: 'Nachname', sortable: true },
    { name: 'Email', label: 'Email', sortable: false },
    { name: 'istVorgesetzter', label: 'Vorgesetzter', sortable: false },
    { name: 'istAdmin', label: 'Admin', sortable: false },
    { name: 'Aktionen', label: 'Aktionen', sortable: false }
  ];

  constructor(private benutzerService: BenutzerService, private router: Router) {}

  ngOnInit(): void {
    this.getBenutzer();
  }

  getBenutzer(): void {
    this.benutzerService.getBenutzer().subscribe(Benutzer => (this.Benutzer = Benutzer));
  }

  deleteBenutzer(id: number): void {
    this.benutzerService
      .deleteBenutzer(id)
      .toPromise()
      .then(() => {
        this.Benutzer = this.Benutzer.filter((benutzer: ApiModel.Benutzer) => {
          return benutzer.BenutzerID !== id;
        });
      })
      .catch((reason: any) => {
        console.error(reason);
      })
      .finally(() => {
        // do something on finally
      });
  }
}