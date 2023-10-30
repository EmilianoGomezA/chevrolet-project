import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrarVehiculoComponent } from './pages/registrar-vehiculo/registrar-vehiculo.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { EditarVehiculoComponent } from './pages/editar-vehiculo/editar-vehiculo.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { CotizacionComponent } from './pages/cotizacion/cotizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    VehiculosComponent,
    FooterComponent,
    RegistrarVehiculoComponent,
    CarCardComponent,
    CustomInputComponent,
    EditarVehiculoComponent,
    ServicioComponent,
    CotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
