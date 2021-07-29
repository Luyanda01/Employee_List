import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeBoardComponent } from './employee-board/employee-board.component';

@NgModule({
  declarations: [
    AppComponent,
    
    EmployeeBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
  ],

  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
