import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="padding:10px">
              <ul class="list-group">
                <li class="list-group-item"><a class="link-danger" routerLink="Hospitales">HOSPITALES</a></li>
                <li class="list-group-item"><a class="link-danger" routerLink="Medicos">MEDICOS</a></li>
                <li class="list-group-item"><a class="link-danger" routerLink="Pacientes">PACIENTES</a></li>
                <li class="list-group-item"><a class="link-danger" routerLink="Desplegable">DESPLEGABLE</a></li>
              </ul>
              <router-outlet></router-outlet>
            </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen';
}
