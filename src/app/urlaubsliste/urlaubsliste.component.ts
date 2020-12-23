import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { ApiModel } from '../Models/api.model';
import { AntragService } from '../Services/antrag.service';
import { BenutzerService } from '../Services/benutzer.service';
import * as moment from 'moment';

@Component({
  selector: 'app-urlaubsliste',
  templateUrl: './urlaubsliste.component.html',
  styleUrls: ['./urlaubsliste.component.css']
})
export class UrlaubslisteComponent implements OnInit {
  alleAntraege: ApiModel.Urlaubsantrag[];

  columns: ITdDataTableColumn[] = [
    { name: 'BenutzerID', label: 'Benutzer ID', sortable: true },
    { name: 'Nachname', label: 'Nachname', sortable: true },
    { name: 'Vorname', label: 'Vorname', sortable: true },
    { name: 'Urlaubstage', label: 'Urlaubstage', sortable: true },
    { name: 'von', label: 'Anfang', sortable: true },
    { name: 'bis', label: 'Ende', sortable: true }
  ];

  constructor(private antragService: AntragService, private benutzerService: BenutzerService, private router: Router) { }

  ngOnInit(): void {
    this.getAntraege();
  }

  getAntraege(): void {
    this.antragService.getAntraege().subscribe(anträge => (this.alleAntraege = anträge));
  }

  getUrlaubstage(von, bis){
    let tage = moment(bis).diff(moment(von), 'days')+1;
    return tage;
  }

  getFormat(date){
    let formattedDate = moment(date).format("DD.MM.YYYY");
    return formattedDate;
  }
  
}
