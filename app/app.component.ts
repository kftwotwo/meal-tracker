import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h3>Here are all the meals entered!</h3>
  <div class="well">
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
    <food-list [childMealList]="masterMeals" (clickSender)="editMeal($event)"></food-list>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
  </div>
  `
})

export class AppComponent {

  selectedMeal = null;

  masterMeals: Meal[] = [
    new Meal('Cookie', 'I wish I was the cookie monster', 320),
    new Meal('Pie', 'Im not a fan of cake so pie is way better!', 211),
    new Meal('Salad', 'Not as good as a steak', 30)
  ];

  editMeal(clickedMeal) {
   this.selectedMeal = clickedMeal;
 }

 finishedEditing() {
   this.selectedMeal = null;
 }

 addMeal(newMealFromChild: Meal) {
    this.masterMeals.push(newMealFromChild);
  }

}
