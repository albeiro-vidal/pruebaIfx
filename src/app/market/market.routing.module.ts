// * Importaciones de Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMarketComponent } from './dashboard-market/dashboard-market.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { InformacionComponent } from './informacion/informacion.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardMarketComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'informacion', component: InformacionComponent }

    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketRoutingModule { }
