import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div>
        <div *ngIf="childSelectedMeal">
          <h3>{{childSelectedMeal.Name}}</h3>
          <hr>
          <h3>Edit Meal</h3>
          <label>Enter Meal Name:</label>
          <input [(ngModel)]="childSelectedMeal.name">

          <label>Enter Meal Details:</label>
          <input [(ngModel)]="childSelectedMeal.details">

          <label>Enter Meal Calories:</label>
          <input [(ngModel)]="childSelectedMeal.calories">

          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditMealComponent {

  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
