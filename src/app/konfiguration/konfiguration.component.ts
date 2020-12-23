import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArbeitstageService } from '../Services/arbeitstage.service';
import { ApiModel } from '../Models/api.model';

@Component({
  selector: 'app-konfiguration',
  templateUrl: './konfiguration.component.html',
  styleUrls: ['./konfiguration.component.css']
})
export class KonfigurationComponent implements OnInit {
  model: ApiModel.Arbeitstage = new ApiModel.Arbeitstage();

  constructor(private router: Router, private arbeitstageService: ArbeitstageService) { }

  ngOnInit(): void {
    this.model.Montag = false;
    this.model.Dienstag = false;
    this.model.Mittwoch = false;
    this.model.Donnerstag = false;
    this.model.Freitag = false;
    this.model.Samstag = false;
    this.model.Sonntag = false;
  }

  addKonfiguration(): void {
    this.arbeitstageService
      .createKonfiguration(this.model)
      .toPromise()
      .then((value: ApiModel.Arbeitstage) => {
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
