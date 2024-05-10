import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMarketComponent } from './dashboard-market/dashboard-market.component';
import { MarketRoutingModule } from './market.routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {MatCardModule} from '@angular/material/card';
import { UserInfoModalComponentComponent } from './usuarios/user-info-modal-component/user-info-modal-component.component';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    DashboardMarketComponent,
    HeaderComponent,
    UsuariosComponent,
    UserInfoModalComponentComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarketRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,    
    MatButtonModule,
    MatDialogModule,
    MatIconModule  
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MarketModule { }
