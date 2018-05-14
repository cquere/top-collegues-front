export enum Avis {
  AIMER = "AIMER",
  DETESTER = "DETESTER"
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
