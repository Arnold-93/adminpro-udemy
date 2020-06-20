import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
  
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;


  //si yo quiero poner un nombre personalisado a importacion pongo  @Input('nombre') 
  @Input('nombre') leyenda: string = 'leyenda';
  @Input() progreso: number = 52;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChanges( newValue: number ){
    //valida que el cambio no se pase de los parametros indicados
    //ene le campo de texto  
    //let elemHTML: any = document.getElementsByName('progreso')[0]

     if(newValue >= 100){
       this.progreso = 100;
     }else if(newValue <= 0){
       this.progreso = 0;
     }else{
       this.progreso = newValue;
     }

    // elemHTML = newValue
     //otra forma de mantener el elemento para cada uno
     //en este caso tenemos 2 progressos y se mantendra en forma independiente
     this.txtProgress.nativeElement.value = this.progreso
     this.cambioValor.emit(this.progreso)

  }


  cambiarValor(valor){


    if(this.progreso >=100 && valor > 0){
      this.progreso = 100
      return;
    }
    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0
      return;
    }

    this.progreso = this.progreso + valor
    this.cambioValor.emit(this.progreso)

    //para que el el focus se mantenga en la caja de texto
    this.txtProgress.nativeElement.focus();
    console.log(this.progreso)
  // if(this.progreso <= 100 && this.progreso >= 0 ){
  //  
  //  
  //   }
  //   return
    
   }
}
