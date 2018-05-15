export enum Avis {
  AIMER = "AIMER",
  DETESTER = "DETESTER"
}

export class Collegue {
  constructor(
    public score: number,
    public pseudo: string,
    public photo: string,
    public nom: string,
    public prenom: string,
    public email: string,
    public adresse: string
  ) {
  }
}

export class Vote {

  constructor(public collegue:Collegue, public avis:Avis){

}

}
