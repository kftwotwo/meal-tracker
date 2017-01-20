import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h3>Here are all the meals entered!</h3>
  <food-lsit></food-list>
  `
})

export class AppComponent {

}

export class Meal {
  constructor(public name: string, public details: string, public calories: number) { }
}
