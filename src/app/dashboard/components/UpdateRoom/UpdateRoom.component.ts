import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/app.service';
import { FilestackService } from '@filestack/angular';
import { TransformOptions } from 'filestack-js';
export interface Elements {
  ImageUrl: string;
  ImageUrl2: string;
  ImageUrl3: string;



}

@Component({
  selector: 'app-UpdateRoom',
  templateUrl: './UpdateRoom.component.html',
  styleUrls: ['./UpdateRoom.component.css']
})
export class UpdateRoomComponent implements OnInit {
  id = 1;
  data:any;
  displayedColumns: string[] = [ 'MainImage', 'SecondImage', 'ThirdImage','actions'];
  dataSource = new MatTableDataSource<Elements>();
   Image1: string;
   Image2: string;
   Image3: string;
  selectedValue: string;
  selectedCar: string;
  transformOptions: TransformOptions;

  file: any;
  apiKey :string;
  // url:string;
  // url2:string;
  // url3:string;
  form :FormGroup;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private restApiService: ApiService,private router:Router, private formBuilder:FormBuilder,   private actRoute: ActivatedRoute, private filestackService: FilestackService
    ) {

      // §GET THE ID THROUGH THE URL§
    this.id = this.actRoute.snapshot.params.id;


   }

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
      ImageUrl2: '',
      ImageUrl3:''
    });
    this.apiKey="AUVuQKgXRS1udQ7iMkUdxz";

    this.http.get<any[]>('http://localhost:3000/rooms/'+ this.id , this.httpOptions).subscribe((res: any)=>{
      this.data= res;
      // console.log(this.data);
      this.form.patchValue({
        RoomName: this.data.RoomName,
        Price:this.data.Price,
        Type:this.data.Type,
        From:this.data.From,
        To:this.data.To,
        Description:this.data.Description,
        ImageUrl:this.data.ImageUrl,
        ImageUrl2:this.data.ImageUrl2,
        ImageUrl3: this.data.ImageUrl3

      });
    });
    this.loadRooms();



}

loadRooms(){
  this.http.get<any[]>('http://localhost:3000/rooms/'+ this.id , this.httpOptions).subscribe((res: any)=>{
    this.Image1= res['ImageUrl'];
    this.Image2= res['ImageUrl2'];
    this.Image3= res['ImageUrl3'];

    // console.log(this.Image1 +' '+this.Image2 + '   ' + '     ' + this.Image3);
  })
}

////////////////////////////////////////////////////////////////////////////////////



fileChanged(e) {
this.file = e.target.files[0];
}
onUploadSuccess(res: Object) {
console.log('###uploadSuccess', res['filesUploaded']);


 var result =  res['filesUploaded'];

 console.log(result[0].url);
 this.Image1=result[0].url;



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
 this.Image2=result[0].url;



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
console.log('###uploadSuccess', res['filesUploaded']);


 var result =  res['filesUploaded'];

 console.log(result[0].url);
 this.Image3=result[0].url;



}
uploadFile2() {
this.filestackService.upload(this.file)
  .subscribe(res => console.log(res));
}

onUploadError2(err: any) {
console.log('###uploadError', err);
}









///////////////////////////////////////////////////////////////////////////////////////


  submitForm(value: string,value2: number,value3: string,value4: Date, value5:Date, value6: string) {

    const body = { RoomName: value,  Price :value2 , Type :value3, From :value4, To:value5, Description: value6, ImageUrl:this.Image1, ImageUrl2: this.Image2, ImageUrl3 : this.Image3}

    // console.log(body);
        this.http.put('http://localhost:3000/rooms/'+ this.id , body , this.httpOptions).subscribe(
       (response) => console.log(response),
        (error) => console.log(error)

      )
     // alert("client updated");
     this.router.navigate(['/Admin/Rooms']);
     return false;

   }


}
