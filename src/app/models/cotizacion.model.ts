export class Cotizacion {
  constructor(
    public nombre: string,
    public apellidos: string,
    public codigo_postal: string,
    public telefono: string,
    public email: string,
    public vehiculo: string,
    public idCotizacion?: number
  ) { }
}