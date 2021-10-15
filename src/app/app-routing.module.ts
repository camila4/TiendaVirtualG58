import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ClientesComponent} from './vistas/clientes/clientes.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { LoginComponent } from './vistas/login/login.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { ProveedoresComponent } from './vistas/proveedores/proveedores.component';
import { ReportesComponent } from './vistas/reportes/reportes.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { VentasComponent } from './vistas/ventas/ventas.component';


const routes: Routes = [

  { path: '', redirectTo:'login', pathMatch:'full' },
  { path: 'login', component:LoginComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'clientes', component:ClientesComponent },
  { path: 'proveedores', component:ProveedoresComponent },
  { path: 'productos', component:ProductosComponent },
  { path: 'reportes', component:ReportesComponent },
  { path: 'usuarios', component:UsuariosComponent },
  { path: 'ventas', component:VentasComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent,DashboardComponent,ClientesComponent,ProveedoresComponent,ProductosComponent,ReportesComponent,UsuariosComponent,VentasComponent]