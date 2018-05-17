import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Collegue, Avis, Vote } from "../models";
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: "app-detail-collegue",
  templateUrl: "./detail-collegue.component.html",
  styleUrls: ["./detail-collegue.component.css"]
})
export class DetailCollegueComponent implements OnInit {
  collegue: Collegue = new Collegue("", 0, "", "", "", "", "", "");
  aimable: boolean;
  detestable: boolean;

  constructor(
    private _route: ActivatedRoute,
    private cService: CollegueService
  ) {}

  ngOnInit() {
    this.cService
      .recupererCollegues(this._route.snapshot.paramMap.get("pseudo"))
      .subscribe(
        (col: Collegue) => {
          this.collegue = col;
        },
        err => console.log(err)
      );
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
}
