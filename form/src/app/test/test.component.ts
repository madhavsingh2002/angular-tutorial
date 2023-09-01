import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl ,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  /*  userName: string="";
  formdata!: FormGroup;
  
  ngOnInit(): void{
    this.formdata =new FormGroup({
      userName: new FormControl("Tutorialspoint")
    });

  }
  onClickSubmit() {
    this.userName = this.formdata.value.userName;
  }
  */

/*  Create FormGroup
  requiredForm!: FormGroup;
  constructor(private fb: FormBuilder){
    this.myForm();
  }
  // Create required Field validator for name
  myForm(){
    this.requiredForm = this.fb.group({
      name:['',Validators.required]
    })
  }
  ngOnInit(): void {
    
  }
  */

  /* PATTERN VALIDATOR*/ 
  requiredForm!: FormGroup;
   constructor(private fb: FormBuilder) {
      this.myForm();
   }

   myForm() {
      this.requiredForm = this.fb.group({
      email: ['', [Validators.required, 
         Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ]
      });
   }

   ngOnInit()
   {

   }
//   onClickSubmit(result: { username: string; }) {
//     console.log("You have entered : " + result.username); 
//  }
}
