import { Component, OnInit } from "@angular/core";
import { AjoutCollegue } from "../models";

@Component({
  selector: "app-nouveau-collegue",
  templateUrl: "./nouveau-collegue.component.html",
  styleUrls: ["./nouveau-collegue.component.css"]
})
export class NouveauCollegueComponent implements OnInit {
  ajoutCollegue: AjoutCollegue = new AjoutCollegue();

  constructor() {}

  ngOnInit() {}

  traiterAjout() {
    console.log(this.ajoutCollegue);
  }
}
