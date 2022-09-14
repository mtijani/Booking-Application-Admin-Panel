import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/app.service';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router, private formBuilder:FormBuilder, private ApiService :ApiService) { }
  form : FormGroup;
  hide=true;
  ngOnInit(): void {
    this.form = this.formBuilder.group ({
      email:['', {
        validators: [Validators.required, Validators.email]
      }],
      Password:['',{
        Validators:[Validators.min(2),Validators.max(15),Validators.required]
      }],

    });

  }

  onLogin(email :string,password:string){
    this.ApiService.login(email=this.form.value.email,password= this.form.value.Password)
    // console.log(this.form.value.email);
    // this.router.navigate["/Admin/Plans"];



  }

  saveChanges(){

  }
  getErrorName(){
    const field = this.form.get('email');
    const field2 = this.form.get('Password')
    if (field.hasError('required')){

      return 'Field Required';
     }
      if (field2.hasError('min')){
        return 'Enter a longer Password';
      }
      if (field2.hasError('max')){
        return 'Password has reached maximum'
      }
      if (field2.hasError('required')){
        return 'Password is Required'
      }


    return '' ;
          }
   }
