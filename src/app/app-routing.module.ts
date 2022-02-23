import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  
  {
    path: 'auditoria',
    loadChildren: () => import('./pages/auditoria/auditoria.module').then( m => m.AuditoriaPageModule)
  },

  
  {
    path: 'molino',
    loadChildren: () => import('./pages/molino/molino.module').then( m => m.MolinoPageModule)
  },

  {
    path: 'icd',
    loadChildren: () => import('./pages/icd/icd.module').then( m => m.IcdPageModule)
  },
  {
    path: 'terminado',
    loadChildren: () => import('./pages/terminado/terminado.module').then( m => m.TerminadoPageModule)
  },
  {
    path: 'delaminacion',
    loadChildren: () => import('./pages/delaminacion/delaminacion.module').then( m => m.DelaminacionPageModule)
  },
  {
    path: 'despachos',
    loadChildren: () => import('./pages/despachos/despachos.module').then( m => m.DespachosPageModule)
  },
  {
    path: 'embalaje',
    loadChildren: () => import('./pages/embalaje/embalaje.module').then( m => m.EmbalajePageModule)
  },
  {
    path: 'batidores',
    loadChildren: () => import('./pages/batidores/batidores.module').then( m => m.BatidoresPageModule)
  },
  {
    path: 'formacion-humedad',
    loadChildren: () => import('./pages/formacion-humedad/formacion-humedad.module').then( m => m.FormacionHumedadPageModule)
  },
  {
    path: 'formacion-pesobasico',
    loadChildren: () => import('./pages/formacion-pesobasico/formacion-pesobasico.module').then( m => m.FormacionPesobasicoPageModule)
  },
  {
    path: 'adhesivos',
    loadChildren: () => import('./pages/adhesivos/adhesivos.module').then( m => m.AdhesivosPageModule)
  },
  {
    path: 'e-siete',
    loadChildren: () => import('./pages/e-siete/e-siete.module').then( m => m.ESietePageModule)
  },
  {
    path: 'e-ocho',
    loadChildren: () => import('./pages/e-ocho/e-ocho.module').then( m => m.EOchoPageModule)
  },
  {
    path: 'auditoria-general-groover',
    loadChildren: () => import('./pages/auditoria-general-groover/auditoria-general-groover.module').then( m => m.AuditoriaGeneralGrooverPageModule)
  },
  {
    path: 'groover-dos',
    loadChildren: () => import('./pages/groover-dos/groover-dos.module').then( m => m.GrooverDosPageModule)
  },
  {
    path: 'groover-tres',
    loadChildren: () => import('./pages/groover-tres/groover-tres.module').then( m => m.GrooverTresPageModule)
  },
  {
    path: 'esquineros',
    loadChildren: () => import('./pages/esquineros/esquineros.module').then( m => m.EsquinerosPageModule)
  },
  {
    path: 'despacho',
    loadChildren: () => import('./pages/despacho/despacho.module').then( m => m.DespachoPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
