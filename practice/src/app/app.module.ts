import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpensieEntryComponent } from './expensie-entry/expensie-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensieEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
