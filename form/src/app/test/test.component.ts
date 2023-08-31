import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  userName: string="";
  formdata!: FormGroup;
  
  ngOnInit(): void{
    this.formdata =new FormGroup({
      userName: new FormControl("Tutorialspoint")
    });

  }
  onClickSubmit() {
    this.userName = this.formdata.value.userName;
  }
//   onClickSubmit(result: { username: string; }) {
//     console.log("You have entered : " + result.username); 
//  }
}
