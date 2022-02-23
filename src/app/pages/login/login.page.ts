import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/shared/services/route.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulario: FormGroup;

  constructor(
    private servicioRutas: RouteService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.construirFormulario();
  }

  construirFormulario() {
    this.formulario = this.formBuilder.group({
      email: [
        null,
        Validators.compose([
          Validators.email,
          Validators.required,
        ]),
      ],
      contraseña: [null, Validators.required],
    });
  }

  iniciarSesion() {
    console.log(this.formulario.value);
    this.servicioRutas.navegar('auditoria');
  }
}
