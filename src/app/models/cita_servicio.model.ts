export class CitaServicio {
  constructor(
    public nombre: string,
    public apellidos: string,
    public email: string,
    public telefono: string,
    public fecha: Date | string,
    public vehiculo: string,
    public numero_serie: string,
    public idCita?: number
  ) { }
}