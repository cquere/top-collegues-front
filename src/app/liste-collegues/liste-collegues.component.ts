import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Collegue, Vote } from "../models";

@Component({
  selector: "app-liste-collegues",
  templateUrl: "./liste-collegues.component.html",
  styleUrls: ["./liste-collegues.component.css"]
})
export class ListeColleguesComponent implements OnInit {
  @Input() collegues: Collegue[];
  saisiePseudo:string;

  constructor() {
    this.saisiePseudo = "";
  }

  ngOnInit() {}

}
