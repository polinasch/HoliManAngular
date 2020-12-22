import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ArgumentOutOfRangeError } from 'rxjs';
import { ApiModel } from '../Models/api.model';
import { AntragService } from '../Services/antrag.service';
import { BenutzerService } from '../Services/benutzer.service';

interface Art {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-antrag',
  templateUrl: './antrag.component.html',
  styleUrls: ['./antrag.component.css']
})
export class AntragComponent implements OnInit {
  Antrag: ApiModel.Urlaubsantrag = new ApiModel.Urlaubsantrag();
  alleBenutzer: ApiModel.Benutzer[];
  Arten: Art[] = [
    {value: null, viewValue: 'Wählen Sie eine Urlaubsart aus'},
    {value: 'Urlaub', viewValue: 'Urlaub'},
    {value: 'Sonderurlaub', viewValue: 'Sonderurlaub'}
  ];
  Gruende: string[] = ['Umzug', 'Hochzeit', 'Geburt', 'Sonstiges'];
  minAnfang: Date;

  constructor(private router: Router, private benutzerService: BenutzerService, private antragService: AntragService) { 
    const datum = new Date();
    const datum_heute = new Date(datum.getFullYear(), datum.getMonth(), datum.getDate());
    this.minAnfang = new Date(datum_heute);
    this.minAnfang.setDate(this.minAnfang.getDate()+ 1)
  }

  ngOnInit(): void {
    this.Antrag.benutzer = new ApiModel.Benutzer();
    this.getBenutzer();
    this.Antrag.Status = "Erstellt";
    this.Antrag.informiert = false;
  }

  getBenutzer(): void {
    this.benutzerService.getBenutzer().subscribe(benutzer => (this.alleBenutzer = benutzer));
  }

  addAntrag(): void {
    this.antragService
      .createAntrag(this.Antrag)
      .toPromise()
      .then((value: ApiModel.Urlaubsantrag) => {
        this.router.navigate(['']);
      })
      .catch((reason: any) => {
        console.error(reason);
      })
      .finally(() => {
        // do something on finally
      });
  }

}
