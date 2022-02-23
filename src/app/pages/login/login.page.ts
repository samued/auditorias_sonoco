import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/shared/services/route.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(private servicioRutas: RouteService, ) { }

  ngOnInit() {
  }

  iniciarSesion(){
    this.servicioRutas.navegar('auditoria');
  }

}
