import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { ApiModel } from '../Models/api.model';
import { AntragService } from '../Services/antrag.service';
import { BenutzerService } from '../Services/benutzer.service';

@Component({
  selector: 'app-list-antraege',
  templateUrl: './list-antraege.component.html',
  styleUrls: ['./list-antraege.component.css']
})
export class ListAntraegeComponent implements OnInit {
  alleBenutzer: ApiModel.Benutzer[];
  Benutzer: ApiModel.Benutzer;
  Antraege: ApiModel.Urlaubsantrag[];
  

  columns: ITdDataTableColumn[] = [
    { name: 'Urlaubsart', label: 'Urlaubsart', sortable: false },
    { name: 'Urlaubstage', label: 'Urlaubstage', sortable: true },
    { name: 'von', label: 'Anfang', sortable: true },
    { name: 'bis', label: 'Ende', sortable: true },
    { name: 'Status', label: 'Status', sortable: false },
    { name: 'Aktionen', label: 'Aktionen', sortable: false }
  ];

  constructor(private benutzerService: BenutzerService, private router: Router, private antragService: AntragService) { }

  ngOnInit(): void {
    this.getBenutzer();
    this.Benutzer = new ApiModel.Benutzer();
  }

  getAntraege(id: number): void {
    this.antragService.getAntraegeByBenutzer(id).subscribe(Antraege => (this.Antraege = Antraege));
  }

  getBenutzer(): void {
    this.benutzerService.getBenutzer().subscribe(Benutzer => (this.alleBenutzer = Benutzer));
  }

  deleteAntrag(id: number): void {
    this.antragService
      .deleteAntrag(id)
      .toPromise()
      .then(() => {
        this.Antraege = this.Antraege.filter((antrag: ApiModel.Urlaubsantrag) => {
          return antrag.AntragID !== id;
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
