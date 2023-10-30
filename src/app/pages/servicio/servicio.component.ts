import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitaServicio } from 'src/app/models/cita_servicio.model';
import { VehiculoSubido } from 'src/app/models/vehiculo.model';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit{

  citaServicio = new CitaServicio("", "", "", "", "", "", "");
  vehiculos: VehiculoSubido[] = [];

  constructor(private httpRequestService: HttpRequestService, private router: Router) { }

  obtenerVehiculos() {
    this.httpRequestService.obtenerVehiculos().subscribe((vehiculoRecibido: any) => {
      this.vehiculos = vehiculoRecibido;
      console.log(this.vehiculos);
    });
  }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  onSubmit() {
    const validations = [
      this.citaServicio.nombre !== '',
      this.citaServicio.apellidos !== '',
      this.citaServicio.email !== '' && this.citaServicio.email.includes("@"),
      this.citaServicio.telefono.length === 10,
      this.citaServicio.fecha !== '',
      this.citaServicio.vehiculo !== '', 
      this.citaServicio.numero_serie.length === 17,
    ];

    if(validations.every((validation) => validation === true)) {
      const formData = new FormData();
      formData.append('nombre', this.citaServicio.nombre);
      formData.append('apellidos', this.citaServicio.apellidos);
      formData.append('email', this.citaServicio.email);
      formData.append('telefono', this.citaServicio.telefono);
      formData.append('fecha', this.citaServicio.fecha.toString());
      formData.append('vehiculo', this.citaServicio.vehiculo);
      formData.append('numero_serie', this.citaServicio.numero_serie);

      console.log(this.citaServicio);

      this.httpRequestService.agregarCitaServicio(formData).subscribe(() => this.router.navigate(['/'])); 
    } else {
      console.log("Faltan propiedades");
    }
  }

}
