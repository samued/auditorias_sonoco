import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/shared/services/route.service';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.page.html',
  styleUrls: ['./auditoria.page.scss'],
})
export class AuditoriaPage implements OnInit {

  constructor(
    private servicioRutas: RouteService,

  ) { }

  ngOnInit() {
  }

  Molino(){
    this.servicioRutas.navegar('molino')
  }
  ICD(){
    this.servicioRutas.navegar('icd')
  }


}
