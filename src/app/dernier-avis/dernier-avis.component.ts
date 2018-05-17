import { Component, OnInit, OnDestroy } from "@angular/core";
import { CollegueService } from "../services/collegue.service";
import { Vote, Avis } from "../models";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dernier-avis",
  templateUrl: "./dernier-avis.component.html",
  styleUrls: ["./dernier-avis.component.css"]
})
export class DernierAvisComponent implements OnInit, OnDestroy {
  avis: any = Avis;
  lastVote: Vote;
  vSubscription: Subscription;
  constructor(private _cs: CollegueService) {}

  ngOnInit() {
    this.lastVote = undefined;
    this.vSubscription = this._cs.vote.subscribe(
      (vote: Vote) => (this.lastVote = vote),
      err => console.log(err),
      () => console.log("Fin des votes")
    );
  }

  ngOnDestroy() {
    this.vSubscription.unsubscribe();
  }
}
