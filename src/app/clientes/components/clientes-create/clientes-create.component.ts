import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClientesService } from '../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent {

  btnText = "Salvar";

  constructor(
    private clienteservice: ClientesService,
    private router: Router
  ){}

  criar(cliente: Cliente){
    this.clienteservice.criar(cliente).subscribe(() =>{
      this.router.navigate(['/clientes']);

    })
  }

}
