import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Collegue, Avis, Vote } from "../models";
import { CollegueService } from "../services/collegue.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-collegue",
  templateUrl: "./collegue.component.html",
  styleUrls: ["./collegue.component.css"]
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  aimable: boolean;
  detestable: boolean;

  constructor(private cService: CollegueService, private router: Router) {}

  ngOnInit() {
    this.aimable = this.collegue.score >= 1000;
    this.detestable = this.collegue.score <= -1000;
  }
  traiterAvis(avis: Avis) {
    this.cService.donnerUnAvis(this.collegue, avis).subscribe(
      nCol => {
        this.collegue = nCol;
        this.aimable = this.collegue.score >= 1000;
        this.detestable = this.collegue.score <= -1000;
        this.cService.vote.next(new Vote(
          new Collegue(
            this.collegue.matricule,
            this.collegue.score,
            this.collegue.pseudo,
            this.collegue.photo,
            this.collegue.nom,
            this.collegue.prenom,
            this.collegue.email,
            this.collegue.adresse
          ),
          avis
        ))

      },
      err => console.log(err)
    );
  }

  redirect() {
    this.router.navigate([`./collegues/${this.collegue.pseudo}`]);
  }
}
