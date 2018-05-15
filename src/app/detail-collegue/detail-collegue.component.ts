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
  collegue: Collegue = new Collegue(0,"","","","","","");
  aimable: boolean;
  detestable: boolean;

  constructor(
    private _route: ActivatedRoute,
    private cService: CollegueService
  ) {
  }

  ngOnInit() {
    this.cService
      .recupererCollegues(this._route.snapshot.paramMap.get("pseudo"))
      .then((col: Collegue) => {this.collegue = col})
      .catch(err => console.log(err));
  }


  traiterAvis(avis: Avis) {
    this.cService
      .donnerUnAvis(this.collegue, avis)
      .then(nCol => {
        this.collegue = nCol;
        this.aimable = this.collegue.score >= 1000;
        this.detestable = this.collegue.score <= -1000;
      })
      .catch(err => console.log(err));
  }
}
