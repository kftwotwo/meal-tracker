import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'food-list',
  template: `
    <ul>
      <li *ngFor="let currentMeal of childMealList">{{currentMeal.name}} {{currentMeal.details}} {{currentMeal.calories}} <button (click)="editButtonHasBeenClicked(currentMeal)">Edit!</button></li>
    </ul>
  `
})


export class FoodListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealEdit: Meal) {
    this.clickSender.emit(mealEdit);
  }
}
