import { Injectable } from "@angular/core";
import { Collegue, Avis } from "../models";
import { environment } from "../../environments/environment";
import { HttpClientModule, HttpClient } from "@angular/common/http";

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: "root"
})
export class CollegueService {
  constructor(private _http: HttpClient) {}

  listerCollegues(): Promise<Collegue[]> {
    return this._http.get<Collegue[]>(`${URL_BACKEND}/collegues`).toPromise();
    // récupérer la liste des collègues côté serveur
  }

  recupererCollegues(pseudo:string): Promise<Collegue>{
    return this._http.get<Collegue>(`${URL_BACKEND}/collegues/${pseudo}`).toPromise();
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    return this._http
      .patch<Collegue>(`${URL_BACKEND}/collegues/${unCollegue.pseudo}`, {
        action: avis.valueOf()
      })
      .toPromise();
  }
}
