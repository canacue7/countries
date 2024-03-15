import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { CommonModule } from '@angular/common';
import { TransactionComponentComponent } from './transaction-component/transaction-component.component';
import { AutocompleteInputComponent } from './autocomplete-input/autocomplete-input.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { TransactionComponentComponent } from './transaction-component/transaction-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    TransactionComponentComponent,
    AutocompleteInputComponent
    // TransactionComponentComponent
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
