import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsuariosComponent } from "./usuarios/usuarios.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "mantenimientos",
    },
    children: [
      {
        path: "",
        redirectTo: "usuarios",
      },
      {
        path: "usuarios",
        component: UsuariosComponent,
        data: {
          title: "usuarios",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientosRoutingModule {}
