import { Component, OnInit, Input } from '@angular/core';
import { Vote, Avis } from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  public avisEnum:any= Avis;

  @Input() votes:Vote[];

  constructor() { }

  ngOnInit() {
  }

  supprimer(vote){
    this.votes.forEach((obj, index) => {
      if (obj === vote){
        this.votes.splice(index, 1);
      }
    })
  }
}
