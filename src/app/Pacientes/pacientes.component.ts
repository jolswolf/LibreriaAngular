import { Component, OnInit } from "@angular/core";
import { SeguridadSocialService } from "../Service/SeguridadSoc.service";
import { Pacientes } from "./pacientes";

@Component({
    selector: "app-pacientes",
    templateUrl: "./pacientes.component.html",
    providers : [SeguridadSocialService]
})
export class PacientesComponent implements OnInit{
    pacientes: Pacientes[] = [];
    constructor(public losPacientes: SeguridadSocialService){}

    ngOnInit() {
        this.losPacientes.getPacientes().subscribe((datosPacientes) => {
            this.pacientes = datosPacientes});
    }
}