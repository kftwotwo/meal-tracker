import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'food-list',
  template: `
  <div class="row">
    <div class="col-md-6">
      <select (change)="onChange($event.target.value)">
         <option value="all">All</option>
         <option value=">500"> > 500 Calories</option>
         <option value="<500"> < 500 Calories</option>
       </select>

        <ul>
          <li *ngFor="let currentTask of childTaskList | filter:filterByCalories"><h3>{{currentMeal.name}}</h3><br> <p>{{currentMeal.details}}</p><br> <p>{{currentMeal.calories}}</p> Calorires<button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentMeal)">Edit!</button></li>
        </ul>
      </div>
    </div>
  `
})


export class FoodListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealEdit: Meal) {
    this.clickSender.emit(mealEdit);
  }

  filterByCalories: string = "all";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}
