import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import * as moment from 'moment';
import { ApiModel } from '../Models/api.model';
import { AntragService } from '../Services/antrag.service';
import { BenutzerService } from '../Services/benutzer.service';

@Component({
  selector: 'app-erhaltene-antraege',
  templateUrl: './erhaltene-antraege.component.html',
  styleUrls: ['./erhaltene-antraege.component.css']
})
export class ErhalteneAntraegeComponent implements OnInit {
  Vorgesetzter: ApiModel.Benutzer;
  alleVorgesetzten: ApiModel.Benutzer[];
  Antraege: ApiModel.Urlaubsantrag[];

  columns: ITdDataTableColumn[] = [
    { name: 'AntragID', label: 'Antrag ID', sortable: true },
    { name: 'Vorname', label: 'Vorname', sortable: true },
    { name: 'Nachname', label: 'Nachname', sortable: true },
    { name: 'Urlaubsart', label: 'Urlaubsart', sortable: true },
    { name: 'Urlaubstage', label: 'Urlaubstage', sortable: true },
    { name: 'von', label: 'Anfang', sortable: true },
    { name: 'bis', label: 'Ende', sortable: true },
    { name: 'Aktionen', label: 'Aktionen', sortable: false }
  ];

  constructor(private benutzerService: BenutzerService, private router: Router, private antragService: AntragService) { }

  ngOnInit(): void {
    this.getVorgesetzten();
    this.Vorgesetzter = new ApiModel.Benutzer();
    this.getAntraege();
  }

  getVorgesetzten(): void {
    this.benutzerService.getVorgesetzten().subscribe(vorgesetzten => (this.alleVorgesetzten = vorgesetzten));
  }

  getUrlaubstage(von, bis){
    let tage = moment(bis).diff(moment(von), 'days')+1;
    return tage;
  }

  getFormat(date){
    let formattedDate = moment(date).format("DD.MM.YYYY");
    return formattedDate;
  }

  getAntraege(): void {
    this.antragService.getAntraege().subscribe(anträge => (this.Antraege = anträge));
  }
}