import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  appName: string ="my first app to learn binding"
  // Event Binding
  showData($event:any){
    console.log('button is clicked!');
    if($event){
      console.log($event.target)
      console.log($event.target.value)
    }
  }
  // Property Binding
  userName:string ="Peter"
  // Class Binding
  myCSSClass:string ="red";
  applyCSSClass:string ="false"
  // Style Binding
  myColor='brown'
  
  ngOnInit(): void {
    
  }
}
