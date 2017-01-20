import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FoodListComponent }  from './food-list.component';
import { EditMealComponent }  from './edit-meal.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FoodListComponent, EditMealComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
