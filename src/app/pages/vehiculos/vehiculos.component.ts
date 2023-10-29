import { Component, OnInit } from '@angular/core';
import { VehiculoSubido } from 'src/app/models/vehiculo.model';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit{

  vehiculos: VehiculoSubido[] = [];
  serverUrl = `${environment.baseUrl}/`;

  constructor (private httpRequestService: HttpRequestService) { }

  obtenerVehiculos() {
    this.httpRequestService.obtenerVehiculos().subscribe((vehiculos: any) => this.vehiculos = vehiculos);
  }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }
}
