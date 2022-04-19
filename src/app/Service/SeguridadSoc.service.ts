import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Pacientes } from "../Pacientes/pacientes";
import { Hospitales } from "../Hospitales/hospitales";
import { Medicos } from "../Medicos/medicos";

@Injectable()
export class SeguridadSocialService {

    constructor(private _http: HttpClient){}

    getPacientes(): Observable<Pacientes[]>{
        const path = "http://localhost:58519/api/Pacientes";
        return this._http.get<Pacientes[]>(path);
    }

    getHospitales(): Observable<Hospitales[]>{
        const path = "http://localhost:58519/api/Hospitales";
        return this._http.get<Hospitales[]>(path);
    }

    getMedicos(): Observable<Medicos[]>{
        const path = "http://localhost:58519/api/Medicos";
        return this._http.get<Medicos[]>(path);
    }
}