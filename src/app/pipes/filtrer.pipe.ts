import { Pipe, PipeTransform } from "@angular/core";
import { Collegue } from "../models";

@Pipe({
  name: "filtrerCollegues"
})
export class FiltrerPipe implements PipeTransform {
  transform(value: Collegue[], args: string): Collegue[] {
    console.log(args)
    if (value == null || value == [] || args == null ) {return value};
    return value.filter((col: Collegue) => col.pseudo.includes(args));
  }
}
