import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-UpdateUser',
  templateUrl: './UpdateUser.component.html',
  styleUrls: ['./UpdateUser.component.css']
})
export class UpdateUserComponent implements OnInit {
  id = 1;
  data:any;

  form :FormGroup;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient,private router:Router, private formBuilder:FormBuilder,   private actRoute: ActivatedRoute
    ) {

      // §GET THE ID THROUGH THE URL§
    this.id = this.actRoute.snapshot.params.id;


   }
   hide=true;


  ngOnInit() {this.form = this.formBuilder.group ({
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

  this.http.get<any[]>('http://127.0.0.1:3000/users/'+ this.id , this.httpOptions).subscribe((res: any)=>{
    this.data= res;
    // console.log(this.data);
    this.form.patchValue({
      name: this.data.name,
      Lastname:this.data.Lastname,
      email:this.data.email,
      PhoneNumber:this.data.PhoneNumber,
      Password:this.data.password,
      Gender:this.data.Gender,
      DateOfBirth:this.data.DateOfBirth

    });
  });



}
OnlyNumberAllower(event):boolean{
  const charCode = (event.which)?event.which: event.keyCode;

  if(charCode>31 && (charCode<48 || charCode>57))
  {
    // console.log('Char code restricted is '+charCode)
    return false;
  }

  return true;

  }
  submitForm(value: string,value2: string,value3: string,value4: string, value5:string, value6: string, value7:Date) {





const body = { name: value,  Lastname :value2 , email :value3, PhoneNumber :value4, password:value5, Gender: this.form.value.Gender,DateOfBirth:value7}

// console.log(body);
  this.http.put('http://127.0.0.1:3000/users/'+ this.id , body , this.httpOptions).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)

  )
  // alert("client updated");
  this.router.navigate(['/Users']);
  return false;

}

}
