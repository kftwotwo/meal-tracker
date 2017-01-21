import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FoodListComponent }  from './food-list.component';
import { EditMealComponent }  from './edit-meal.component';
import { NewMealComponent }  from './new-meal.component';
import { CaloriesPipe }  from './calories.pipe';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FoodListComponent, EditMealComponent, NewMealComponent, CaloriesPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
