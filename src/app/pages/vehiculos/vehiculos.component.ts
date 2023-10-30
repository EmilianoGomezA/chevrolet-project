import { Component, OnInit } from '@angular/core';
import { VehiculoSubido } from 'src/app/models/vehiculo.model';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit {
  vehiculos: VehiculoSubido[] = [];
  serverUrl = `${environment.baseUrl}/`;
  idVehiculoAEliminar: any = null;
  nombreVehiculoAEliminar: string = '';
  mostrarModalEliminar = false;

  constructor(private httpRequestService: HttpRequestService) { }

  obtenerVehiculos() {
    this.httpRequestService.obtenerVehiculos().subscribe((vehiculos: any) => this.vehiculos = vehiculos);
  }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  setModal(event: any) {
    this.idVehiculoAEliminar = event.id;
    this.nombreVehiculoAEliminar = event.nombre;
    this.mostrarModalEliminar = true;
  }

  ocultarModalConfirmacion() {
    this.idVehiculoAEliminar = null;
    this.nombreVehiculoAEliminar = '';
    this.mostrarModalEliminar = false;
  }

  eliminarVehiculo(idVehiculo: number | string) {
    this.httpRequestService.eliminarVehiculo(idVehiculo).subscribe(() => {
      this.obtenerVehiculos();
      this.ocultarModalConfirmacion();
    });
  }

}
