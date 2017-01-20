import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h3>Here are all the meals entered!</h3>
  <food-lsit></food-list>
  `
})

export class AppComponent {

}
