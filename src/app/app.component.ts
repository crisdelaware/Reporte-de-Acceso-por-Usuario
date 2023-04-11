import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReporteAccesoUsuario';
  miFormulario: FormGroup;

  constructor() {
    this.miFormulario = new FormGroup({
      clave: new FormControl('', Validators.required),
      start: new FormControl('', Validators.required),
      end: new FormControl('', Validators.required)
    })
  }


  get clave() {
    return this.miFormulario.get('clave');
  }

  get inicio() {
    return this.miFormulario.get('inicio');
  }

  get fin() {
    return this.miFormulario.get('fin');
  }

  filtrar() {
  
  }
}

