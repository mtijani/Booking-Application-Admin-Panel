import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import swal from 'sweetalert';

export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})


export class InfoComponent implements OnInit {
  constructor(private http: HttpClient,private router:Router, private formBuilder:FormBuilder) { }
  form : FormGroup;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group ({
      Plan:['', {
        validators: [Validators.required]
      }],
      Prix:['', {
        validators: [Validators.required]
      }]
    })

  }
  OnlyNumberAllower(event):boolean{
    const charCode = (event.which)?event.which: event.keyCode;

    if(charCode>31 && (charCode<48 || charCode>57))
    {
      console.log('Char code restricted is '+charCode)
      return false;
    }

    return true;

    }

    saveValues() {
      const body = { Plan : this.form.value.Plan ,  Prix :  this.form.value.Prix }

      // console.log(body);
      this.http.post('http://localhost:3000/plantarifs', body , this.httpOptions).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)

    )
    // alert("welcome new member!");
    swal("Done!", "User has been added successfuly to the data base!", "success", {
      buttons: [ "Aww yiss!","okay"],
    });

    this.router.navigate(['/Plans']);
    // console.log(this.form.value);


  }

}
