import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addAdmin',
  templateUrl: './addAdmin.component.html',
  styleUrls: ['./addAdmin.component.css']
})
export class AddAdminComponent implements OnInit {


  constructor(private router:Router, private formBuilder:FormBuilder) { }


  form : FormGroup;
  ngOnInit() {
    this.form = this.formBuilder.group ({
      name:['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      lastName:['', {
        Validators: [Validators.required]
      }],
      toppings:['', {
        Validators: [Validators.required]
      }],



    });

  }


  saveChanges(){
    //this.onSaveChanges.emit(this.form.value);

  }

  getErrorMessageFieldName(){
    const field = this.form.get('name');
    if (field.hasError('required')){

     return 'The name field is required';
    }
     if (field.hasError('minLength')){
       return 'The minimum length is required';
     }

   return '' ;
         }

}
