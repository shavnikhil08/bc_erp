import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

 
  registerForm:any= FormGroup;
  submitted  =  false;
  isShown:any = false; 
  username:string ="nikhil@gmail.com";
  passwors:any = 'nikhil@123'
  constructor(private formBuilder: FormBuilder) { }
  

  ngOnInit(): void {
    this.registerForm  =  this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }



  onSubmit() {
    
    this.submitted = true;
  if (this.registerForm.invalid) {
     return;
  }
  
  
  if(this.submitted)
{
  console.log(this.registerForm.value.email)
  
  if(this.registerForm.value.email === this.username){
if(this.registerForm.value.password === this.passwors){  
  alert('connection successfuly')
  this.isShown = true;
}
else{
  alert("password incorrect")
}
  }else{
    alert("Username password not match")
  }
}
}

  

}
