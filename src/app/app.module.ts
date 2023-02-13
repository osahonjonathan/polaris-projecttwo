import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './App/portal/layout/components/navbar/navbar.component';
import { SidebarComponent } from './App/portal/layout/components/sidebar/sidebar.component';
import { AccountSummaryComponent } from './App/portal/dashboard/component/account-summary/account-summary.component';
import { ActionComponent } from './App/portal/dashboard/component/action/action.component';
import { ReportComponent } from './App/portal/dashboard/component/report/report.component';
import { DashboardComponent } from './App/portal/dashboard/dashboard.component';
import { CardComponent } from './App/portal/common/components/card/card.component';
import { CustomerComponent } from './App/portal/customer/customer.component';
import { TableComponent } from './App/portal/customer/component/table/table.component';
import { LoginComponent } from './App/landingpage/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    SidebarComponent,
    AccountSummaryComponent,
    ActionComponent,
    ReportComponent,
    DashboardComponent,
    CardComponent,
    CustomerComponent,
    TableComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
