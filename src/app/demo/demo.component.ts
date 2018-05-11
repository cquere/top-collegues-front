import { Component, OnInit } from '@angular/core';
import { Avis, Collegue, Vote } from "../models";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  collegues:Collegue[];
  historiqueVote:Vote[];
  constructor() {
   }

  ngOnInit() {
    this.historiqueVote=[];
    this.collegues = [];
    this.collegues.push(new Collegue( 5,"Mehdi", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
    this.collegues.push(new Collegue( 15,"Cyril", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
    this.collegues.push(new Collegue( -5,"Maxime", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
    this.collegues.push(new Collegue(-55,"Julien", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
    this.collegues.push(new Collegue( 0,"Clement", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
    this.collegues.push(new Collegue( 105,"Alexis", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
    this.collegues.push(new Collegue( 42,"Fabien", "https://media-cdn.tripadvisor.com/media/photo-s/11/9c/e6/09/img-20170410-wa0011-largejpg.jpg"));
  }


  traiterVote(vote:Vote){
    this.historiqueVote.push(vote);
  }
}
