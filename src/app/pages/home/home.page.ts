import { Component } from '@angular/core';
import { RouteService } from 'src/app/shared/services/route.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
  constructor(
    private servicioRutas: RouteService,
  ) { }

  ngOnInit() {
  }

  inciarSesion(){
    this.servicioRutas.navegar('login');  
  }

}
