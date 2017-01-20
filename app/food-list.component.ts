import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'food-list',
  template: `
    <ul>
      <li *ngFor="let currentMeal of meals">{{currentMeal.name}} {{currentMeal.detail}} {{currentMeal.calories}}</li>
    </ul>
  `
})


export class FoodListComponent {
  meals: Meal[] = [
    new Meal('Cookie', 'I wish I was the cookie monster', 320),
    new Meal('Pie', 'Im not a fan of cake so pie is way better!', 211),
    new Meal('Salad', 'Not as good as a steak', 30)
  ];


}
