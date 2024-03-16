import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';


import {  HttpClientModule } from '@angular/common/http';
import { AutocompleteInputComponent } from './autocomplete-input/autocomplete-input.component';



@NgModule({
  declarations: [
    AppComponent,
    AutocompleteInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
