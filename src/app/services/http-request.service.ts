import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../models/vehiculo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  agregarVehiculo(formData: FormData) {
    return this.http.post(`${this.baseUrl}/agregarVehiculo.php`, formData);
  }

  obtenerVehiculos() {
    return this.http.get(`${this.baseUrl}/obtenerVehiculos.php`);
  }

  obtenerVehiculo(id: any) {
    return this.http.get(`${this.baseUrl}/obtenerVehiculo.php?idVehiculo=${id}`);
  }

  editarVehiculo(vehiculo: Vehiculo) {
    return this.http.put(`${this.baseUrl}/editarVehiculo.php`, vehiculo);
  }

  eliminarVehiculo(idVehiculo: number | string) {
    return this.http.delete(`${this.baseUrl}/eliminarVehiculo.php?idVehiculo=${idVehiculo}`);
  }

}
