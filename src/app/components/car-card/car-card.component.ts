import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Vehiculo, VehiculoSubido } from 'src/app/models/vehiculo.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})

export class CarCardComponent implements OnInit{

  @Input() vehiculo: VehiculoSubido = {
    nombre: '',
    modelo: '',
    color_nombre: '',
    color_codigo: '',
    clasificacion: '',
    transmision: '',
    motor: '',
    cilindraje: 0,
    precio: 0,
    imagen: '',
    idVehiculo: 0
  }

  @Output() setData: EventEmitter<{id: number, nombre: string}> = new EventEmitter<{id: number, nombre: string}>();

  precioFormateado: string = '';
  imagenUrl: string = '';

  ngOnInit(): void {
    this.precioFormateado = this.vehiculo.precio.toLocaleString();
    this.imagenUrl = `${environment.baseUrl}/${this.vehiculo.imagen}`;
  }

  handleClickDelete() {
    this.setData.emit({ id: this.vehiculo.idVehiculo, nombre: `${this.vehiculo.nombre} ${this.vehiculo.modelo}` });
  }

}
