import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import swal from 'sweetalert';
@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router, private formBuilder:FormBuilder) { }
  form : FormGroup;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  ngOnInit() {
    this.form = this.formBuilder.group ({
      name:['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      Lastname:['', {
        validators: [Validators.required]
      }],
      email:['', {
        validators: [Validators.required, Validators.email]
      }],
      PhoneNumber:['', {
         validators: [Validators.required, Validators.minLength(8)]
      }],
      Password:['', {
        validators: [Validators.required, Validators.minLength(5)]
      }],
      Gender:['male', {
         validators: [Validators.required]
      }],


      DateOfBirth:['', {
         validators: [Validators.required]
      }],



    });
    this.form.markAllAsTouched();
  }

  saveChanges(){}
  OnlyNumberAllower(event):boolean{
    const charCode = (event.which)?event.which: event.keyCode;

    if(charCode>31 && (charCode<48 || charCode>57))
    {
      // console.log('Char code restricted is '+charCode)
      return false;
    }

    return true;

    }

    onsaveChanges(){

    }

    getErrorDateOFB(){
      const field6 = this.form.get('DateOfBirth');
      if(field6.hasError('required')){
        return 'Date of birth is required';
      }
      return '';
    }
    getErrorPhoneNumber(){
      const field4 = this.form.get('PhoneNumber');
      if(field4.hasError('required')){
        return 'Phone Number is required'
      }
      if(field4.hasError('minLength')){
        return 'Must be 8 digits'
      }
      return '';
    }
    getErrorGender(){
      const field5 = this.form.get('Gender');
      if(field5.hasError('Gender')){
        return 'Pleaser Select your gender'
      }
      return '';
    }

    getErrorEmail(){
      const field3 = this.form.get('email');
      if(field3.hasError('email')){
        return 'Invalid email form';
      }
      if(field3.hasError('required')){
        return 'Email is required';
      }
      return '';
    }

    getErrorPassword(){
      const field = this.form.get('Password')
      if (field.hasError('minLength')){
        return ' Password must have 5 characters at least';
      }
      if(field.hasError('required')){
        return 'Password is required';
      }
      return '';
    }
    getErrorName(){
      const field = this.form.get('name');
      if (field.hasError('required')){

        return 'First Name is Required';
       }
       if (field.hasError('MinLength')){
        return 'Min Length is 3';

       }


      return '' ;
    }

    getErrorLastName(){
      const field2 = this.form.get('Lastname');
      if (field2.hasError('required')){
           return 'Last Name is Required'
         }


         return '' ;
    }


    submitForm(value: string,value2: string,value3: string,value4: string,value5: string, value6 : string, value7:Date) {
      const body = { name : value ,  Lastname : value2 , email : value3, PhoneNumber : value4   ,password : value5 , Gender : this.form.value.Gender, DateOfBirth:value7 }

      // console.log(body);
      this.http.post('http://localhost:3000/users', body , this.httpOptions).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)

    )
    // alert("welcome new member!");
    swal("Done!", "User has been added successfuly to the data base!", "success", {
      buttons: [ "Aww yiss!","okay"],
    });

    this.router.navigate(['/Admin/Users']);
    // console.log(this.form.value);


  }
    }


