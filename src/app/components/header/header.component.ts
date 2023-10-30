import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor () { }

  menuMode: boolean = false;
  sections: Array<{ label: string, route: string, icon: string }> = [
    {
      label: "Inicio",
      route: "/",
      icon: "home"
    },
    {
      label: "Vehículos",
      route: "/vehiculos",
      icon: "directions_car"
    },
    {
      label: "Servicio",
      route: "/servicio",
      icon: "build"
    },
    {
      label: "Solicita cotización",
      route: "/cotizaciones",
      icon: "request_quote"
    } 
  ];

  changeMenuState() {
    this.menuMode = !this.menuMode;
    console.log(this.menuMode);
  };

  redirectToHomeWithIcon() {
    this.menuMode = false;
  }

}
