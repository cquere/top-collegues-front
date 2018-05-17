import { Injectable, OnDestroy } from "@angular/core";
import { Collegue, Avis, AjoutCollegue, Vote } from "../models";
import { environment } from "../../environments/environment";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable, ReplaySubject, BehaviorSubject, Subject, Subscription } from "rxjs";
import { tap } from "rxjs/operators";

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: "root"
})
export class CollegueService implements OnDestroy {
  vote: BehaviorSubject<Vote> = new BehaviorSubject<Vote>(undefined);
  histVote: BehaviorSubject<Vote[]> = new BehaviorSubject<Vote[]>([]);
  private _hv: Vote[] = [];
  vSubscription: Subscription;

  constructor(private _http: HttpClient) {
    this.vSubscription = this.vote.subscribe(
      v => {
        this._hv.unshift(v);
        this.histVote.next(this._hv);
      },
      err => console.log(err),
      () => console.log("Fin des votes")
    );
  }

  listerCollegues(): Observable<Collegue[]> {
    return this._http.get<Collegue[]>(`${URL_BACKEND}/collegues`);
    // récupérer la liste des collègues côté serveur
  }

  recupererCollegues(pseudo: string): Observable<Collegue> {
    return this._http.get<Collegue>(`${URL_BACKEND}/collegues/${pseudo}`);
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Observable<Collegue> {
    return this._http.patch<Collegue>(
      `${URL_BACKEND}/collegues/${unCollegue.pseudo}`,
      {
        action: avis.valueOf()
      }
    );
  }
  nouveauCollegue(ajoutCollegue: AjoutCollegue): Observable<Collegue> {
    return this._http.post<Collegue>(
      `${URL_BACKEND}/collegues/nouveau`,
      ajoutCollegue
    );
  }

  ngOnDestroy() {
    this.vSubscription.unsubscribe();
}
}
