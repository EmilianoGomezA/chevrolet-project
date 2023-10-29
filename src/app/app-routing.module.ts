import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { RegistrarVehiculoComponent } from './pages/registrar-vehiculo/registrar-vehiculo.component';

const routes: Routes = [
  {path: '', title: 'Chevrolet', component: HomeComponent},
  {path: 'vehiculos', title: 'Chevrolet | Vehículos', component: VehiculosComponent},
  {path: 'registrar-vehiculo', title: 'Chevrolet | Registro de vehículo', component: RegistrarVehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
