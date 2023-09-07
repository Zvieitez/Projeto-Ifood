import { Route, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ClienteComponent } from "./components/cliente/cliente.component";
import { ClientesCreateComponent } from "./components/clientes-create/clientes-create.component";
import { ClientesUpdateComponent } from "./components/clientes-update/clientes-update.component";

const routes: Routes = [
    {
        path: '',
        component:ClienteComponent
    },

    {
        path: 'criar',
        component:ClientesCreateComponent
    },

    {
        path: 'editar/:id',
        component:ClientesUpdateComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    })

    export class ClientesRoutingModule {}