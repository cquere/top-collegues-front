import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Collegue, Avis, Vote } from "../models";

@Component({
  selector: "app-collegue",
  templateUrl: "./collegue.component.html",
  styleUrls: ["./collegue.component.css"]
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  @Output() nouveauVote: EventEmitter<Vote>= new EventEmitter<Vote>();
aimable:boolean;
detestable:boolean;

  constructor() {}

  ngOnInit() {
    this.aimable= (this.collegue.score >=1000)
    this.detestable= (this.collegue.score <= -1000)

  }
  traiterAvis(avis: Avis) {
    if (avis == Avis.AIMER) this.collegue.score++;
    else if (avis == Avis.DETESTER) this.collegue.score--;
    this.aimable= (this.collegue.score >=1000)
    this.detestable= (this.collegue.score <= -1000)
    this.nouveauVote.emit(new Vote(new Collegue(this.collegue.score,this.collegue.pseudo,this.collegue.photo), avis));
  }
}
