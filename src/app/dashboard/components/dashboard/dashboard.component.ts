import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  RoomsList=[];
  countRooms:number;
  countUsers:number;
  UsersList=[];


  constructor(private restApiService: ApiService,   public router: Router) { }

  ngOnInit(): void {
    this.loadRooms();
    this.loadUsers();
  }
  loadRooms(){
    this.restApiService.getRooms().subscribe((res: any[])=>{
      this.RoomsList= res;
        this.countRooms = Object.keys(this.RoomsList).length;
      console.log(this.countRooms);
    })
  }

  loadUsers(){
    this.restApiService.getUsers().subscribe((res: any[])=>{
      this.UsersList= res;
      this.countUsers = Object.keys(this.UsersList).length;
      console.log(this.countUsers);
    })
  }

  /////////////////////////////// tarif de base : double et supplement single




}
