import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Collegue, Vote } from "../models";

@Component({
  selector: "app-liste-collegues",
  templateUrl: "./liste-collegues.component.html",
  styleUrls: ["./liste-collegues.component.css"]
})
export class ListeColleguesComponent implements OnInit {
  @Input() collegues: Collegue[];
  @Output() nouveauVote: EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor() {}

  ngOnInit() {}

  traiterVote(vote:Vote) {
    this.nouveauVote.emit(vote);
  }
}