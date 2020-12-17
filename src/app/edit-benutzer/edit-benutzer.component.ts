import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiModel } from '../Models/api.model';
import { BenutzerService } from '../Services/benutzer.service';
import { BundeslandService } from '../Services/bundesland.service';

@Component({
  selector: 'app-edit-benutzer',
  templateUrl: './edit-benutzer.component.html',
  styleUrls: ['./edit-benutzer.component.css']
})
export class EditBenutzerComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  id: number;
  Benutzer: ApiModel.Benutzer;
  bundeslaender: ApiModel.Bundesland[];
  vorgesetzten: ApiModel.Benutzer[];

  constructor(private router: Router, private route: ActivatedRoute, private benutzerService: BenutzerService, private bundeslandService: BundeslandService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.benutzerService.getBenutzerById(this.id).subscribe(benutzer => (this.Benutzer = benutzer));
    });

    this.getVorgesetzten();
    this.getBundeslaender();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getVorgesetzten(): void {
    this.benutzerService.getVorgesetzten().subscribe(vorgesetzten => (this.vorgesetzten = vorgesetzten));
  }

  getBundeslaender(): void {
    this.bundeslandService.getBundeslaender().subscribe(bundeslaender => (this.bundeslaender = bundeslaender));
  }

  updateBenutzer(): void {
    this.benutzerService
      .updateBenutzer(this.Benutzer)
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
