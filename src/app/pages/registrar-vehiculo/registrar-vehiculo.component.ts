import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { FormMethodsService } from 'src/app/services/form-methods.service';
import { transmisiones, colores, clasificaciones } from 'src/app/constants/constants';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.component.html',
  styleUrls: ['./registrar-vehiculo.component.scss']
})
export class RegistrarVehiculoComponent {

  vehiculoModel = new Vehiculo("", "", { nombre: "", codigo: "" }, "", "", "", 0, 0, "");
  selectedFile: any = null;
  colores = colores;
  clasificaciones = clasificaciones;
  transmisiones = transmisiones;

  constructor(private httpRequestService: HttpRequestService, private router: Router, private formMethods: FormMethodsService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  numberValidation(key: any) {
    return this.formMethods.onlyNumber(key);
  }

  letterValidation(key: any) {
    return this.formMethods.onlyLetter(key);
  }

  onSubmit() {
    const validations = [
      this.vehiculoModel.nombre !== '',
      this.vehiculoModel.modelo !== '',
      this.vehiculoModel.color.nombre !== '',
      this.vehiculoModel.color.codigo !== '',
      this.vehiculoModel.clasificacion !== '',
      this.vehiculoModel.transmision !== '',
      this.vehiculoModel.motor !== '',
      this.vehiculoModel.cilindraje > 0,
      this.vehiculoModel.precio > 0,
      this.selectedFile !== null
    ];

    if (validations.every((validation) => validation === true)) {
      const formData = new FormData();
      formData.append('nombre', this.vehiculoModel.nombre);
      formData.append('modelo', this.vehiculoModel.modelo);
      formData.append('color_nombre', this.vehiculoModel.color.nombre);
      formData.append('color_codigo', this.vehiculoModel.color.codigo);
      formData.append('clasificacion', this.vehiculoModel.clasificacion);
      formData.append('transmision', this.vehiculoModel.transmision);
      formData.append('motor', this.vehiculoModel.motor);
      formData.append('cilindraje', this.vehiculoModel.cilindraje.toString());
      formData.append('precio', this.vehiculoModel.precio.toString());
      formData.append('imagen', this.selectedFile);

      this.httpRequestService.agregarVehiculo(formData).subscribe(() => this.router.navigate(['/vehiculos']));
      
    } else {
      console.log("No se colocó una propiedad");
    }
  }
}