import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//iconos de material
import { MatIconModule } from '@angular/material/icon';

//componentes a exportar
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMaterialComponent } from './dashboard-material/dashboard-material.component';
import { PruebaComponent } from './prueba/prueba.component';


//angular material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DasboardNuevoComponent } from './dasboard-nuevo/dasboard-nuevo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';


//libreria de toastr
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';



@NgModule({
  declarations: [ DashboardComponent, DashboardMaterialComponent, PruebaComponent, DasboardNuevoComponent, LoginComponent, RegisterComponent ],
  imports: [
    CommonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    ToastContainerModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    })
  ],
  exports: [
    DashboardComponent,
    PruebaComponent,
    DashboardMaterialComponent,
    DasboardNuevoComponent
    
  ]
})
export class ComponentsModule { }
