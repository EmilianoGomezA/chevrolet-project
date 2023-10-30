import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cotizacion } from 'src/app/models/cotizacion.model';
import { VehiculoSubido } from 'src/app/models/vehiculo.model';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss']
})
export class CotizacionComponent implements OnInit{

  cotizacion = new Cotizacion("", "", "", "", "", "");
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
      this.cotizacion.nombre !== '',
      this.cotizacion.apellidos !== '',
      this.cotizacion.codigo_postal.length === 5,
      this.cotizacion.email !== '' && this.cotizacion.email.includes("@"),
      this.cotizacion.telefono.length === 10,
      this.cotizacion.vehiculo !== '', 
    ];

    if(validations.every((validation) => validation === true)) {
      const formData = new FormData();
      formData.append('nombre', this.cotizacion.nombre);
      formData.append('apellidos', this.cotizacion.apellidos);
      formData.append('codigo_postal', this.cotizacion.codigo_postal);
      formData.append('email', this.cotizacion.email);
      formData.append('telefono', this.cotizacion.telefono);
      formData.append('vehiculo', this.cotizacion.vehiculo);

      this.httpRequestService.agregarCotizacion(formData).subscribe(() => this.router.navigate(['/']));
    } else {
      console.log("Faltan propiedades");
    }
  }

}
