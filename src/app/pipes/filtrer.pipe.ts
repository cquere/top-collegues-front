import { Pipe, PipeTransform } from "@angular/core";
import { Collegue } from "../models";

@Pipe({
  name: "filtrerCollegues"
})
export class FiltrerPipe implements PipeTransform {
  transform(value: Collegue[], args?: any): Collegue[] {
    if (value == null || value == [] || args[0] == null) {return value};
    return value.filter((col: Collegue) => col.pseudo.includes(args[0]));
  }
}
