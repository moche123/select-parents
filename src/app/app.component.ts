import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'emerson';
  texto = 'inicial';



  public optionsPrimerSelect:any[] = [
    {value: 'inicialPrimerSelectOption1', viewValue: 'VistaPrimerSelectOption1', selected:true},
    {value: 'inicialPrimerSelectOption2', viewValue: 'VistaPrimerSelectOption2',selected:false},
    {value: 'inicialPrimerSelectOption3', viewValue: 'VistaPrimerSelectOption3',selected:false},
    
  ];
  public optionsSegundoSelect:any[] = [
    {value: 'inicialSegundoSelectOption1', viewValue: 'VistaSegundoSelectOption1',selected:true},
    {value: 'inicialSegundoSelectOption2', viewValue: 'VistaSegundoSelectOption2',selected:false},
    {value: 'inicialSegundoSelectOption3', viewValue: 'VistaSegundoSelectOption3',selected:false},
  ];
  public optionsTercerSelect:any[] = [
    {value: 'inicialTercerSelectOption1', viewValue: 'VistaTercerSelectOption1',selected:true},
    {value: 'inicialTercerSelectOption2', viewValue: 'VistaTercerSelectOption2',selected:false},
    {value: 'inicialTercerSelectOption3', viewValue: 'VistaTercerSelectOption3',selected:false},
  ];


  ngOnInit(): void {

  }

  cambiarTexto(){
  }

  public onCambiar(select:any,number:number){

    if(number == 1){

      this.optionsSegundoSelect = [
        {value: 'inicialSegundoSelectOption1', viewValue: 'VistaSegundoSelectOption1',selected:true},
        {value: 'inicialSegundoSelectOption2', viewValue: 'VistaSegundoSelectOption2',selected:false},
        {value: 'inicialSegundoSelectOption3', viewValue: 'VistaSegundoSelectOption3',selected:false},
      ];
  
      this.optionsTercerSelect =  [
        {value: 'inicialTercerSelectOption1', viewValue: 'VistaTercerSelectOption1',selected:true},
        {value: 'inicialTercerSelectOption2', viewValue: 'VistaTercerSelectOption2',selected:false},
        {value: 'inicialTercerSelectOption3', viewValue: 'VistaTercerSelectOption3',selected:false},
      ];
    }
     
  }

}
