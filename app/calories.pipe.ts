import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "filter",
  pure: false
})


export class CaloriesPipe implements PipeTransform {

  transform(input: Meal[], desiredCaloreies) {
    var output: Meal[] = [];
    if (desiredCaloreies === ">500") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCaloreies === "<500") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
