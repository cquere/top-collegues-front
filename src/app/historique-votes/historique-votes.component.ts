import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Vote, Avis } from "../models";
import { ReplaySubject, Subscription } from "rxjs";
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: "app-historique-votes",
  templateUrl: "./historique-votes.component.html",
  styleUrls: ["./historique-votes.component.css"]
})
export class HistoriqueVotesComponent implements OnInit, OnDestroy {
  avisEnum: any = Avis;
  votes: Vote[] = [];
  hsubscription: Subscription;
  constructor(private _cs: CollegueService) {}

  ngOnInit() {
    this.hsubscription = this._cs.histVote.subscribe(
      (hvote: Vote[]) => (this.votes = hvote),
      err => console.log(err),
      () => console.log("Fin des votes")
    );
  }

  supprimer(vote) {
    this.votes.forEach((obj, index) => {
      if (obj === vote) {
        this.votes.splice(index, 1);
      }
    });
    this._cs.histVote.next(this.votes);
  }
  ngOnDestroy() {
    this.hsubscription.unsubscribe();
  }
}
