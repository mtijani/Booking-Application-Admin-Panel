import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './dashboard/components/Login/Login.component';
const routes: Routes = [
  // lazy loaded dashboard module
  {
    path: 'Admin',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),

  },
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'Login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
