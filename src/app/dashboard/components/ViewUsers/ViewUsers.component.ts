import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/app.service';
import { DatePipe } from '@angular/common'
import swal from 'sweetalert';


export interface Elements {
  name: string;
  Lastname: string;
  email: string;
  PhoneNumber: number;
  Gender:String;
  DateOfBirth:Date;


}



@Component({
  selector: 'app-ViewUsers',
  templateUrl: './ViewUsers.component.html',
  styleUrls: ['./ViewUsers.component.css']
})
export class ViewUsersComponent   implements OnInit{
  displayedColumns: string[] = [ 'name', 'Lastname', 'email','PhoneNumber','Gender','DateOfBirth','actions'];
  // ColumnsForShow:string[]=['name','']
  dataSource = new MatTableDataSource<Elements>();
  UsersList=[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

z


  constructor(private restApiService: ApiService,   public router: Router) { }


  ngOnInit() {
    this.loadUsers();

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadUsers(){
    this.restApiService.getUsers().subscribe((res: any[])=>{
      this.UsersList= res;
      this.dataSource= new MatTableDataSource<Elements>(this.UsersList);
      this.dataSource.paginator = this.paginator;

    })
  }


  deleteUser(id:any){

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user !",
      icon: "warning",

      dangerMode: true,
      buttons: ["Cancel", "I'm sure!"],
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("User has been deleted successfuly ! ", {
          icon: "success",
        });
        this.restApiService.deleteUser(id).subscribe(()=>{
          this.loadUsers();
        });
      } else {
        swal("user is safe!");
      }
    });

  }

}
