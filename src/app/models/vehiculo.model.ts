interface Color {
  nombre: string,
  codigo: string
}

export class Vehiculo {
  constructor(
    public nombre: string,
    public modelo: string,
    public color: Color,
    public clasificacion: string,
    public transmision: string,
    public motor: string,
    public cilindraje: number,
    public precio: number,
    public imagen: string,
    public idVehiculo?: number
  ) { }
}

export class VehiculoSubido {
  constructor(
    public nombre: string,
    public modelo: string,
    public color_nombre: string,
    public color_codigo: string,
    public clasificacion: string,
    public transmision: string,
    public motor: string,
    public cilindraje: number,
    public precio: number,
    public imagen: string,
    public idVehiculo?: number
  ) { }
}