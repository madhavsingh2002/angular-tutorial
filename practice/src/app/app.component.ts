import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expense Manager';
}
export interface ExpenseEntry {
  id:number;
  item:string;
  amount:number;
  category:string;
  location:string;
  spendOn:Date;
  createdOn:Date;
}