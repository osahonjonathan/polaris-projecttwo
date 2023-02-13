import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './App/portal/dashboard/dashboard.component';
import { CustomerComponent } from './App/portal/customer/customer.component';
import { LoginComponent } from './App/landingpage/login/login.component';
import { AuthGuard } from './App/landingpage/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login',  component: LoginComponent,  },

  { path: 'dashboard',  component: DashboardComponent,  },
 
 { path: 'customer', component: CustomerComponent,  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
