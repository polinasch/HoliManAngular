import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiModel } from '../Models/api.model';
import { AntragService } from '../Services/antrag.service';
import * as moment from 'moment';

interface Art {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-antrag',
  templateUrl: './edit-antrag.component.html',
  styleUrls: ['./edit-antrag.component.css']
})
export class EditAntragComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  id: number;
  Antrag: ApiModel.Urlaubsantrag;
  Arten: Art[] = [
    {value: null, viewValue: 'Wählen Sie eine Urlaubsart aus'},
    {value: 'Urlaub', viewValue: 'Urlaub'},
    {value: 'Sonderurlaub', viewValue: 'Sonderurlaub'}
  ];
  Gruende: string[] = ['Umzug', 'Hochzeit', 'Geburt', 'Sonstiges'];
  minAnfang: Date;

  constructor(private router: Router, private route: ActivatedRoute, private antragService: AntragService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.antragService.getAntragById(this.id).subscribe(antrag => (this.Antrag = antrag));
    });
    const datum = new Date();
    const datum_heute = new Date(datum.getFullYear(), datum.getMonth(), datum.getDate());
    this.minAnfang = new Date(datum_heute);
    this.minAnfang.setDate(this.minAnfang.getDate()+ 1)
    this.Antrag.Status = "Erstellt";
    this.Antrag.informiert = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUrlaubstage(){
    if (this.Antrag.bis == null || this.Antrag.von == null){
      let tage = 0;
      return tage;
    }
    let urlaubstage = moment(this.Antrag.bis).diff(moment(this.Antrag.von), 'days')+1;
    return urlaubstage;
  }

  updateAntrag(): void {
    this.antragService
      .updateAntrag(this.Antrag)
      .toPromise()
      .then(() => {
        this.router.navigate(['/antraegeliste']);
      })
      .catch((reason: any) => {
        console.error(reason);
      })
      .finally(() => {
        // do something on finally
      });
  }
}