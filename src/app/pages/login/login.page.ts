import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/shared/services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private servicioRutas: RouteService,
  ) { }

  ngOnInit() {
  }

  iniciarSesion(){
    this.servicioRutas.navegar('home');  
  }

}
