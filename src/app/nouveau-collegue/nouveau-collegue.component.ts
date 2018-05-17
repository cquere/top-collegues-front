import { Component, OnInit } from "@angular/core";
import { AjoutCollegue, Collegue } from "../models";
import { CollegueService } from "../services/collegue.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-nouveau-collegue",
  templateUrl: "./nouveau-collegue.component.html",
  styleUrls: ["./nouveau-collegue.component.css"]
})
export class NouveauCollegueComponent implements OnInit {
  ajoutCollegue: AjoutCollegue = new AjoutCollegue();
  errMessage: any = {
    matricule: "",
    pseudo: ""
  };
  constructor(private cService: CollegueService, private router: Router) {}

  ngOnInit() {
    this.ajoutCollegue.matricule = "";
    this.ajoutCollegue.pseudo = "";
  }

  traiterAjout() {
    this.errMessage.matricule = "";
    this.errMessage.pseudo = "";
    this.cService.nouveauCollegue(this.ajoutCollegue).subscribe(
      (col: Collegue) => {
        this.router.navigate(["/accueil"]);
        console.log(col);
      },
      (err: HttpErrorResponse) => {
        if (
          err.error ==
          "Le matricule spécifié est deja présent dans la base de données"
        ) {
          this.errMessage.matricule = err.error;
        } else if (
          err.error ==
          "Le pseudo spécifié est deja présent dans la base de données"
        ) {
          this.errMessage.pseudo = err.error;
        } else if (err.error == "Le matricule spécifié n'a pas été trouvé") {
          this.errMessage.matricule = err.error;
        }
        // console.log(err);
      }
    );
    console.log(this.errMessage);
  }
}
