import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SeguridadSocialService } from "../Service/SeguridadSoc.service";
import { Hospitales } from "../Hospitales/hospitales";

@Component({
    selector: "desplegable-hospitales",
    templateUrl: "./desplegable.component.html",
    providers : [SeguridadSocialService]
})
export class DesplegableComponent implements OnInit{
    hospitales: Hospitales[] = [];
    constructor(public losHospitales: SeguridadSocialService){}

    ngOnInit() {
        this.losHospitales.getHospitales().subscribe((datosHospitales) => {
            this.hospitales = datosHospitales});
    }

    @Output()
    globalElegido: EventEmitter<number> = new EventEmitter<number>();

    hospitalElegido: number = 1;

    enCambio(){
        this.globalElegido.emit(this.hospitalElegido);
    }

    @Input()
    medicos: number = 0;
}