import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // porque http a secas esta deprecado
import { Routes, RouterModule } from '@angular/router';

import { HospitalesComponent } from './Hospitales/hospitales.component';

import { SeguridadSocialService } from './Service/SeguridadSoc.service';
import { AppComponent } from './app.component';
import { MedicosComponent } from './Medicos/medicos.component';
import { Pacientes } from './Pacientes/pacientes';
import { PacientesComponent } from './Pacientes/pacientes.component';
import { DesplegableComponent } from './Desplegable/desplegable.component';
import { MedicosEnHospitalesComponent } from './MedicosEnHospitales/medicosenhospitales.component';

const appRutas: Routes = [
  { path: 'Hospitales', component: HospitalesComponent},
  { path: 'Medicos', component: MedicosComponent},
  { path: 'Pacientes', component: PacientesComponent},
  { path: 'Desplegable', component: MedicosEnHospitalesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HospitalesComponent,
    MedicosComponent,
    PacientesComponent,
    DesplegableComponent,
    MedicosEnHospitalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRutas)
  ],
  providers: [SeguridadSocialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
