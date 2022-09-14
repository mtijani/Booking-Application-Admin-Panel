import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import swal from 'sweetalert';


export interface AuthData{
  email:string;
  password:string;

}
export interface AuthResponse{
  token:string;
  expiration:Date;
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token:string ;
  private name:string;
  private isAuthenticatedd=false;
  private expirationTokenKey:string ='token-expiration';
  private authStatusListener = new Subject<boolean>()


  private apiServer = "http://localhost:3000/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient,private router:Router) { }

  getUsers():Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiServer +'users');

  }
  getPlans():Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiServer+'plantarifs')
  }
  deletePlan(id:any){
    return this.httpClient.delete(this.apiServer+'plantarifs/'+id)
  }
  deleteUser (id : any){
    return this.httpClient.delete(this.apiServer +'users/'+id);
  }

  getRooms():Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiServer+'rooms')
  }

  deleteRooms (id : any){
    return this.httpClient.delete(this.apiServer +'rooms/'+id);
  }
  login(email: string,password:string){
    const authData: AuthData= {email:email,password:password};
    this.httpClient.post<{token,name}>("http://localhost:3000/Alogin",authData)
    .subscribe(response =>{
      const token = response.token;
      const name = response.name;
      this.token =token;
       this.saveAuthData(token,name);
      if(token){
        this.isAuthenticatedd=true;
        this.authStatusListener.next(true);
        swal("Welcome !",  "Connected Successfully","success");

        this.router.navigate(['/Admin/dashboard']);
      }

    })

  }
  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }
  isAuthenticated():boolean{
    return true;
  }
  logout(){
    this.token = null;
    this.isAuthenticatedd=false;
    this.authStatusListener.next(false);
    this.clearAuthData();
  }
  private saveAuthData(token: string, name:string){
    localStorage.setItem('token',token);
    localStorage.setItem('name',name)
  }

  private clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("name");
  }

}
