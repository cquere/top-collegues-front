import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Avis } from "../models";

@Component({
  selector: "app-avis",
  templateUrl: "./avis.component.html",
  styleUrls: ["./avis.component.css"]
})
export class AvisComponent implements OnInit {
  @Input() score: number;
  @Output() avisEvent: EventEmitter<Avis> = new EventEmitter<Avis>();
  constructor() {}

  ngOnInit() {}

  aimer() {
    this.avisEvent.emit(Avis.AIMER);
  }
  detester() {
    this.avisEvent.emit(Avis.DETESTER);
  }
}
