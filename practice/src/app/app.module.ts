import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpensieEntryComponent } from './expensie-entry/expensie-entry.component';
import { ExpensiveEntryListComponent } from './expensive-entry-list/expensive-entry-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensieEntryComponent,
    ExpensiveEntryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
