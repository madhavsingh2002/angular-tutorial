import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../app.component';

@Component({
  selector: 'app-expensie-entry',
  templateUrl: './expensie-entry.component.html',
  styleUrls: ['./expensie-entry.component.css']
})
export class ExpensieEntryComponent implements OnInit {
  title:string ="Expense Entry";
  expenseEntry!: ExpenseEntry; 
  constructor(){}
  ngOnInit() {
    this.title="Expense Entry"
    this.expenseEntry = { 
      id: 1, 
      item: "Pizza", 
      amount: 21, 
      category: "Food", 
      location: "Zomato", 
      spendOn: new Date(2020, 6, 1, 10, 10, 10), createdOn: new Date(2020, 6, 1, 10, 10, 10), 
   }; 
  }

}
