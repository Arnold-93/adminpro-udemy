import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(
               public _ajustes: SettingsService) {}

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any ){
    console.log(link)
    this.aplicarCheck(link)
     this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any){
  //usando vanilajavaScripp
  let selectores:any = document.getElementsByClassName('selector')
  console.log(selectores)
  //hacemos un for de todos los colores que existen en el html 
  //removemos el working y abajo lo agregamos
    for(let ref of selectores){
         ref.classList.remove('working')
    }
    //el link trae la referencia de esa linea html es decir sus clases y desmas
    //por eso agregamos el working dentro de la clase para que nos aparesca el chek
    link.classList.add('working')
  }

  //PARA EL MOMENTO EN QUE SE RECARGA LA PAGINA NO SE PIERDA (GUARDAMOS EN EL LOCALSTORAGE)
  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector')
    let tema = this._ajustes.ajustes.tema
        //hacemos un for de todos los colores que existen en el html 
      for(let ref of selectores){
         //el atributo que se repite 'data-theme' verificamos si contiene el tema igual al que traemos desde el servicio
         if( ref.getAttribute('data-theme') === tema){
           //si trae el tema igual le agregamos el working
            ref.classList.add('working')
            break; //salimos del ciclo for
         }
      }
  }
}
