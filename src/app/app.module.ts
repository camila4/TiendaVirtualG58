import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { ClientesComponent } from './vistas/clientes/clientes.component';
import { ProveedoresComponent } from './vistas/proveedores/proveedores.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { VentasComponent } from './vistas/ventas/ventas.component';
import { ReportesComponent } from './vistas/reportes/reportes.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    UsuariosComponent,
    ClientesComponent,
    ProveedoresComponent,
    ProductosComponent,
    VentasComponent,
    ReportesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
