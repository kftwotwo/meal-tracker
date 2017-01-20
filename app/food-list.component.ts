import { Component } from '@angular/core';

@Component({
  selector: 'food-list',
  template: `
    <ul>
      <li *ngFor="let currentMeal of meals">{{currentMeal.name}} {{currentMeal.detail}} {{currentMeal.calories}}</li>
    </ul>
  `
})


export class FoodListComponent {

}
