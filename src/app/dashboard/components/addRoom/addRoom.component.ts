import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import swal from 'sweetalert';
import { FilestackService } from '@filestack/angular';
import { TransformOptions } from 'filestack-js';
import { ApiService } from 'src/app/app.service';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-addRoom',
  templateUrl: './addRoom.component.html',
  styleUrls: ['./addRoom.component.css']
})
export class AddRoomComponent implements OnInit {

////////////////////////////////////
selectedToppings;

 selectedValue: string;
  selectedCar: string;
  transformOptions: TransformOptions;


  foods: Food[] = [
    {value: 'Double', viewValue: 'Double'},
    {value: 'Single', viewValue: 'Single'},
    {value: 'Luxe', viewValue: 'Luxe'},
  ];




///////////////////////////////////////

  constructor(private router:Router, private formBuilder:FormBuilder, private http:HttpClient, private filestackService: FilestackService, private restApiService: ApiService, ) { }
  form : FormGroup;
  file: any;
  apiKey :string;
  url:string;
  url2:string;
  url3:string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  toppingList
  list=[];
  ngOnInit(): void {
    this.form = this.formBuilder.group ({
      RoomName:['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      Price:['',{
        Validators:[Validators.min(2),Validators.max(5)]
      }],
      Type:'Double',
      From :'',
      To :'',
      Description :'',
      ImageUrl:'',
      toppings:''
    });


    this.apiKey="AUVuQKgXRS1udQ7iMkUdxz";
    // this.onSuccess = (res) => console.log('###onSuccess', res);
    // this.onError = (err) => console.log('###onErr', err);

    this.transformOptions = {
      resize: {
        width: 400
      },
      sepia: {
        tone: 80
      }
    }
    this.loadTarifs();
  }
  loadTarifs(){
    this.restApiService.getPlans().subscribe((res: any[])=>{
      for(let i=0;i<res.length;i++){
       this.list[i]=res[i].Plan;
  }
  console.log(this.list)

    })
  }
  fileChanged(e) {
    this.file = e.target.files[0];
  }
  onUploadSuccess(res: Object) {
    console.log('###uploadSuccess', res['filesUploaded']);


     var result =  res['filesUploaded'];

     console.log(result[0].url);
     this.url=result[0].url;



  }
  uploadFile() {
    this.filestackService.upload(this.file)
      .subscribe(res => console.log(res));
  }

  onUploadError(err: any) {
    console.log('###uploadError', err);
  }
  //////////////////////////////////////////////////:::

  fileChanged1(e) {
    this.file = e.target.files[0];
  }
  onUploadSuccess1(res: Object) {
    console.log('###uploadSuccess', res['filesUploaded']);


     var result =  res['filesUploaded'];

     console.log(result[0].url);
     this.url2=result[0].url;



  }
  uploadFile1() {
    this.filestackService.upload(this.file)
      .subscribe(res => console.log(res));
  }

  onUploadError1(err: any) {
    console.log('###uploadError', err);
  }









  //////////////////////////////////////////////////////////


  fileChanged2(e) {
    this.file = e.target.files[0];
  }
  onUploadSuccess2(res: Object) {
    // console.log('###uploadSuccess', res['filesUploaded']);


     var result =  res['filesUploaded'];

    //  console.log(result[0].url);
     this.url3=result[0].url;



  }
  uploadFile2() {
    this.filestackService.upload(this.file)
      .subscribe(res => console.log(res));
  }

  onUploadError2(err: any) {
    console.log('###uploadError', err);
  }



  /////////////////////////////////////////////////////////////
  submitForm(value: string,value2: number,value3: string,value4: Date,value5: Date, value6 : string) {
    var formData: any = new FormData();
    formData.append("RoomName", value);
    formData.append("Price", value2);
    formData.append("Type", value3);
    formData.append("From", value4);
    formData.append("To", value5);
    formData.append("Description", value6);
    formData.append("ImageUrl", this.url);
    formData.append("ImageUrl2", this.url2);
    formData.append("ImageUrl3", this.url3);
    formData.append("Plantarif",this.selectedToppings)




    const body = { RoomName : value ,  Price : value2 , Type : this.form.value.Type, From : value4   ,To : value5 , Description : value6, ImageUrl:this.url, ImageUrl2: this.url2, ImageUrl3: this.url3, Plantarif:this.selectedToppings}

    this.http.post('http://localhost:3000/rooms', body , this.httpOptions).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)

  )
  swal("Congratulations!", "new Room has been added successfuly to the data base!", "success", {
    buttons: ["okay"],
  });

  this.router.navigate(['/Admin/rooms']);


}
saveChanges(){
  //this.onSaveChanges.emit(this.form.value);

}
SelectedToopings(top:any){
  console.log(this.selectedToppings);


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

onImageSelected(image){
  this.form.get('picture').setValue(image);
    }
  getErrorMessageFieldName(){
    const field = this.form.get('RoomName');
    if (field.hasError('required')){

      return 'The name field is required';
    }
   if (field.hasError('minLength')){
     return 'The minimum length is required';
   }

    return '' ;
       }
}





