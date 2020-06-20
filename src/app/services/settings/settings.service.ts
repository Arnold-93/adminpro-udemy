import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document ) { 
   this.cargarAjustes();

  }
   guardarAjustes(){
    // console.log('guardado en el localStorage');
     //convierte a objetos en el string JSON.stringify(this.ajustes) para poder guardarlo en el localStorage
     localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
   }
   cargarAjustes(){
     if(localStorage.getItem('ajustes')){
       //JSON.parse(localStorage.getItem('ajustes')) para DESCONVERTIR los ajustes
       this.ajustes = JSON.parse(localStorage.getItem('ajustes'))
       this.aplicarTema(this.ajustes.tema)
      // console.log('cargando del localStorage')
     }else{
        //console.log('usando Valores por defecto')
     }
   }
   aplicarTema(tema : string){

    let url =`assets/css/colors/${tema}.css`
    this._document.getElementById('tema').setAttribute('href', url)

    //guardando en el localStorage
      this.ajustes.tema = tema
      this.ajustes.temaUrl = url
    
    this.guardarAjustes();
   }

}

interface Ajustes{
  temaUrl :    string;
  tema    :    string;
}