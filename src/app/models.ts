export enum Avis {
  AIMER = "J'aime",
  DETESTER = "Je déteste"
}

export class Collegue {
  constructor(
    public score: number,
    public pseudo: string,
    public photo: string
  ) {
  }
}

export class Vote {

  constructor(public collegue:Collegue, public avis:Avis){

}

}
