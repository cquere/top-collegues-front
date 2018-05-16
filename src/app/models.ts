export enum Avis {
  AIMER = "AIMER",
  DETESTER = "DETESTER"
}

export class Collegue {
  constructor(
    public matricule:string,
    public score: number,
    public pseudo: string,
    public photo: string,
    public nom: string,
    public prenom: string,
    public email: string,
    public adresse: string
  ) {}
}

export class Vote {
  constructor(public collegue: Collegue, public avis: Avis) {}
}

export class AjoutCollegue {
  matricule:string;
  pseudo:string;
  urlImage:string;
}
