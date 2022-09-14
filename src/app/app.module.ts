import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {MatFormFieldModule} from '@angular/material/form-field'
import { ViewUsersComponent } from './dashboard/components/ViewUsers/ViewUsers.component';
import { HttpClientModule } from '@angular/common/http';
import {ViewRoomsComponent} from './dashboard/components/ViewRooms/ViewRooms.component';
import { ViewPlanComponent } from './dashboard/components/ViewPlan/ViewPlan.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewUsersComponent,
    ViewRoomsComponent,
    ViewPlanComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
