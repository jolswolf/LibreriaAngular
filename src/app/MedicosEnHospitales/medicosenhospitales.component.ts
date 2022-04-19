import { Component, OnInit } from "@angular/core";
import { SeguridadSocialService } from "../Service/SeguridadSoc.service";
import { Medicos } from "../Medicos/medicos";

@Component({
    selector: "medicos",
    templateUrl: "./medicosenhospitales.component.html",
    providers : [SeguridadSocialService]
})
export class MedicosEnHospitalesComponent implements OnInit{
    medicos: Medicos[] = [];
    constructor(public losMedicos: SeguridadSocialService){}

    ngOnInit() {
        this.losMedicos.getMedicos().subscribe((datosMedicos) => {
            this.medicos = datosMedicos});
    }

    seleccion:number = 1;

    enCambioMedHos(opcionSeleccinada: number){
        this.seleccion = opcionSeleccinada;
    }

    getNumMedicos(){
        return this.medicos.filter(v => v.idHospital == this.seleccion).length;
    }

}