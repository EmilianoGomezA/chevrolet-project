import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clasificaciones, colores, transmisiones } from 'src/app/constants/constants';
import { Vehiculo, VehiculoSubido } from 'src/app/models/vehiculo.model';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.scss']
})
export class EditarVehiculoComponent implements OnInit{

  vehiculo = new Vehiculo("", "", { nombre: "", codigo: "" }, "", "", "", 0, 0, "");
  colores = colores;
  clasificaciones = clasificaciones;
  transmisiones = transmisiones;
  selectedFile: File | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    let idVehiculo = this.route.snapshot.paramMap.get("id");
    this.httpRequestService.obtenerVehiculo(idVehiculo).subscribe((vehiculoRecibido: any) => { 
      this.vehiculo = vehiculoRecibido;
      this.vehiculo.color = { nombre: vehiculoRecibido.color_nombre, codigo: vehiculoRecibido.color_codigo };
      delete (this.vehiculo as any).color_nombre;
      delete (this.vehiculo as any).color_codigo;
      console.log(vehiculoRecibido);
    });
  }

  onSubmit() {
    const validations = [
      this.vehiculo.nombre !== '',
      this.vehiculo.modelo !== '',
      this.vehiculo.color.nombre !== '',
      this.vehiculo.color.codigo !== '',
      this.vehiculo.clasificacion !== '',
      this.vehiculo.transmision !== '',
      this.vehiculo.motor !== '',
      this.vehiculo.cilindraje > 0,
      this.vehiculo.precio > 0
    ];

    if (validations.every((validation) => validation === true)) {
      this.httpRequestService.editarVehiculo(this.vehiculo).subscribe(() => this.router.navigate(['/vehiculos']));
    } else {
      console.log("Falta una propiedad");
    }
  }

}
