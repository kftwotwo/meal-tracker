import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h3>New Meal</h3>
    <div>
     <label>Enter Meal Name:</label>
     <input #newName>

     <label>Enter Meal Details:</label>
     <input #newDetials>

     <label>Enter Meal Calories:</label>
     <input #newCalories>

      <button (click)="submitForm(newName.value, newDetials.value, newCalories.value); newName.value=''; newDetials.value=''; newCalories.value='';">Add</button>
   </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
   var newMealToAdd: Meal = new Meal(name, details, calories);
   this.newMealSender.emit(newMealToAdd);
 }

}
