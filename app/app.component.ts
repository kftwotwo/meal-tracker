import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h3>Here are all the meals entered!</h3>
  <food-list [childMealList]="masterMeals"></food-list>
  `
})

export class AppComponent {
  masterMeals: Meal[] = [
    new Meal('Cookie', 'I wish I was the cookie monster', 320),
    new Meal('Pie', 'Im not a fan of cake so pie is way better!', 211),
    new Meal('Salad', 'Not as good as a steak', 30)
  ];

}
