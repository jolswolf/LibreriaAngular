import { Component, OnInit } from "@angular/core";
import { SeguridadSocialService } from "../Service/SeguridadSoc.service";
import { Medicos } from "./medicos";

@Component({
    selector: "app-medicos",
    templateUrl: "./medicos.component.html",
    providers : [SeguridadSocialService]
})
export class MedicosComponent implements OnInit{
    medicos: Medicos[] = [];
    constructor(public losMedicos: SeguridadSocialService){}

    ngOnInit() {
        this.losMedicos.getMedicos().subscribe((datosMedicos) => {
            this.medicos = datosMedicos});
    }
}