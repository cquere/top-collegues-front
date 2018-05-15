import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "score"
})
export class ScorePipe implements PipeTransform {
  constructor() {}
  transform(value: number, args?: any): String {
    let formattedValue: string;

    if (value < 0) {
      formattedValue = `<span class="text-danger h3">${value}</span>`
    } else if (value > 0) {
      formattedValue = `<span class="text-success h3">+${value}</span>`
    } else {
      formattedValue = `<span class="text-primary h3">${value}</span>`
    }
    return formattedValue;
  }
}
