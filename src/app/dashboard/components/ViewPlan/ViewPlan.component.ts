import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/app.service';
import { DatePipe } from '@angular/common'
import swal from 'sweetalert';

export interface Elements {
  Plan: string;
  Prix: string;



}

@Component({
  selector: 'app-ViewPlan',
  templateUrl: './ViewPlan.component.html',
  styleUrls: ['./ViewPlan.component.css']
})

export class ViewPlanComponent implements OnInit {
  displayedColumns: string[] = [ 'Plan', 'Prix', 'actions'];
  dataSource = new MatTableDataSource<Elements>();
  PlanList=[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private restApiService: ApiService,   public router: Router) { }

  ngOnInit() {
    this.loadPlans();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loadPlans(){
    this.restApiService.getPlans().subscribe((res: any[])=>{
      this.PlanList= res;
      this.dataSource= new MatTableDataSource<Elements>(this.PlanList);
      this.dataSource.paginator = this.paginator;

    })
  }
  deletePlan(id:any){

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
        this.restApiService.deletePlan(id).subscribe(()=>{
          this.loadPlans();
        });
      } else {
        swal("user is safe!");
      }
    });

  }


}
