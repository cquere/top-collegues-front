import { Component, OnInit } from "@angular/core";
import { Avis, Collegue, Vote } from "../models";
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html",
  styleUrls: ["./accueil.component.css"]
})
export class AccueilComponent implements OnInit {
  collegues: Collegue[];
  historiqueVote: Vote[];
  constructor(private cService: CollegueService) {}

  ngOnInit() {
    this.historiqueVote = [];
    this.cService.listerCollegues().then((liste: Collegue[]) => {
      this.collegues = liste;
    }).catch(err => console.log(err));

    //    this.collegues = [];
    //    this.collegues.push(new Collegue( 5,"Mehdi", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
    //    this.collegues.push(new Collegue( 1000,"Cyril", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
    //    this.collegues.push(new Collegue( -5,"Maxime", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
    //    this.collegues.push(new Collegue(-1000,"Julien", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
    //    this.collegues.push(new Collegue( 0,"Clement", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
    //    this.collegues.push(new Collegue( 105,"Alexis", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
    //    this.collegues.push(new Collegue( 42,"Fabien", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
  }

  traiterVote(vote: Vote) {
    this.historiqueVote.push(vote);
  }
}
