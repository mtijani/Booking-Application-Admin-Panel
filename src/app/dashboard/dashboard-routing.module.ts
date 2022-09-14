import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { UpdateRoomComponent } from './components/UpdateRoom/UpdateRoom.component';
import { AddRoomComponent } from './components/addRoom/addRoom.component';
import { LoginComponent } from './components/Login/Login.component';
import { AddAdminComponent } from './components/addAdmin/addAdmin.component';
import { AddUserComponent } from './components/addUser/addUser.component';
import { ViewUsersComponent } from './components/ViewUsers/ViewUsers.component';
import { UpdateUserComponent } from './components/UpdateUser/UpdateUser.component';
import { ViewRoomsComponent } from './components/ViewRooms/ViewRooms.component';
import { ViewPlanComponent } from './components/ViewPlan/ViewPlan.component';
const routes: Routes = [
  {
  path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'AddPlan',
        component: InfoComponent
      },
      {
        path: 'Plans',
        component: ViewPlanComponent
      },
      {
        path: 'roomsz',
        component: DashboardComponent
      },
      {
        path: 'Updaterooms/:id',
        component: UpdateRoomComponent
      },
      {
        path: 'Addrooms',
        component: AddRoomComponent
      },
      {
        path: 'Rooms',
        component: ViewRoomsComponent
      },

      {
        path:'Login',
        component:LoginComponent
      },
      {
        path:'AddAdmin',
        component:AddAdminComponent
      },
      {
        path:'AddUser',
        component:AddUserComponent
      },
      {
        path:'Users',
        component:ViewUsersComponent
      },
      {
        path:'UpdateUser/:id',
        component:UpdateUserComponent
      }


    ]
  },



  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
