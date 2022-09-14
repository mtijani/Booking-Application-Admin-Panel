import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatRadioModule} from '@angular/material/radio';

import {MatPaginatorModule} from '@angular/material/paginator';

import {MatSidenavModule} from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';

import {MatTabsModule} from '@angular/material/tabs'
import {MatCardModule} from '@angular/material/card';

import {} from '@angular/material/form-field'
@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatListModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule




  ],
  imports: [
    CommonModule

  ]
})
export class MaterialModule { }
