import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  // ngIfElse directive
  isLogIn: boolean = true;
  isLogOut: boolean = false;
  // ngFor directive
  list = [1, 2, 3, 4, 5];
  //trackByData()
  studentArr: any[] = [ { 
    "id": 1, 
    "name": "student1" 
 }, 
 { 
    "id": 2,
    "name": "student2" 
 }, 
 { 
    "id": 3, 
    "name": "student3"
 },
 { 
    "id": 4, 
    "name": "student4" 
 } 
 ]; 
 trackByData(index:number, studentArr:any): number { 
    return studentArr.id; 
 }
//  NgSwitch directive
logInName = 'admin';
  ngOnInit(): void {}
}
