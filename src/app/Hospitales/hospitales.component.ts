import { Component, OnInit } from "@angular/core";
import { SeguridadSocialService } from "../Service/SeguridadSoc.service";
import { Hospitales } from "./hospitales";

@Component({
    selector: "app-hospitales",
    templateUrl: "./hospitales.component.html",
    providers : [SeguridadSocialService]
})
export class HospitalesComponent implements OnInit{
    hospitales: Hospitales[] = [];
    constructor(public losHospitales: SeguridadSocialService){}

    ngOnInit() {
        this.losHospitales.getHospitales().subscribe((datosHospitales) => {
            this.hospitales = datosHospitales});
    }
}