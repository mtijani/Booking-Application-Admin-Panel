import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/app.service';
import { DatePipe } from '@angular/common'
import swal from 'sweetalert';

export interface Elements {
  RoomName: string,
  Type: string,
  Price: number,
  Description: string,
  ImageUrls:[],
  From:Date,
  To:Date


}



@Component({
  selector: 'app-ViewRooms',
  templateUrl: './ViewRooms.component.html',
  styleUrls: ['./ViewRooms.component.css']
})
export class ViewRoomsComponent implements OnInit {
  displayedColumns: string[] = [ 'RoomName', 'Type', 'Price','Description','ImageUrls','From','To', 'actions'];
  dataSource = new MatTableDataSource<Elements>();
  RoomsList=[];
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private restApiService: ApiService,   public router: Router) { }

  ngOnInit() {
    this.loadRooms();

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  loadRooms(){
    this.restApiService.getRooms().subscribe((res: any[])=>{
      this.RoomsList= res;
      this.dataSource= new MatTableDataSource<Elements>(this.RoomsList);
      this.dataSource.paginator = this.paginator;

    })
  }


  deleteRoom(id:any){

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Room !",
      icon: "warning",

      dangerMode: true,
      buttons: ["Cancel", "I'm sure!"],
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Room has been deleted successfuly ! ", {
          icon: "success",
        });
        this.restApiService.deleteRooms(id).subscribe(()=>{
          this.loadRooms();
        });
      } else {
        swal("Room is safe!");
      }
    });

  }

}
