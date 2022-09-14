import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {UpdateRoomComponent} from './components/UpdateRoom/UpdateRoom.component'
import { AddRoomComponent } from './components/addRoom/addRoom.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {InputImgComponent} from './components/input-img/input-img.component'
import {MatTabsModule} from '@angular/material/tabs'
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './components/Login/Login.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AddAdminComponent } from './components/addAdmin/addAdmin.component';
import { AddUserComponent } from './components/addUser/addUser.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { UpdateUserComponent } from './components/UpdateUser/UpdateUser.component';
import { FilestackModule } from '@filestack/angular';
import { MatCarouselModule } from 'ng-mat-carousel';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  declarations: [
    WrapperComponent,
    DashboardComponent,
    InfoComponent,
    RoomsComponent,
    UpdateRoomComponent,
    AddRoomComponent,
    InputImgComponent,
    LoginComponent,
    AddAdminComponent,
    AddUserComponent,
    UpdateUserComponent,



  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    FilestackModule,
    MatCarouselModule,
    MatProgressBarModule,
    MatChipsModule



  ]
})
export class DashboardModule { }
