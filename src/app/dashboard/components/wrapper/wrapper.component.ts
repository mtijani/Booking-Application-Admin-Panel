import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  private authListener: Subscription;

  isExpanded: boolean = false;
  userIsAuthenticated = false;



    name='';
  constructor(private authService : ApiService) { }

  ngOnInit(): void {
    this.authListener = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated = isAuthenticated;


    });
    this.name = localStorage.getItem("name");
  }
   onLogout(){
    this.authService.logout();


  }
}
