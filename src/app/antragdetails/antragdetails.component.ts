import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiModel } from '../Models/api.model';
import { AntragService } from '../Services/antrag.service';

interface Art {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-antragdetails',
  templateUrl: './antragdetails.component.html',
  styleUrls: ['./antragdetails.component.css']
})
export class AntragdetailsComponent implements OnInit, OnDestroy  {
  private subscription: Subscription;
  id: number;
  Antrag: ApiModel.Urlaubsantrag;
  Arten: Art[] = [
    {value: null, viewValue: 'Wählen Sie eine Urlaubsart aus'},
    {value: 'Urlaub', viewValue: 'Urlaub'},
    {value: 'Sonderurlaub', viewValue: 'Sonderurlaub'}
  ];
  Gruende: string[] = ['Umzug', 'Hochzeit', 'Geburt', 'Sonstiges'];

  constructor(private router: Router, private route: ActivatedRoute, private antragService: AntragService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.antragService.getAntragById(this.id).subscribe(antrag => (this.Antrag = antrag));
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}