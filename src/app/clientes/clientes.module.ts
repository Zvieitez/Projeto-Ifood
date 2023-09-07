import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesReadComponent } from './components/clientes-read/clientes-read.component';
import { ClientesCreateComponent } from './components/clientes-create/clientes-create.component';
import { ClientesFormComponent } from './components/clientes-form/clientes-form.component';
import { ClientesUpdateComponent } from './components/clientes-update/clientes-update.component';



@NgModule({
  declarations: [
    ClienteComponent,
    ClientesReadComponent,
    ClientesCreateComponent,
    ClientesFormComponent,
    ClientesUpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
