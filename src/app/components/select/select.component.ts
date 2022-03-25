import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit,OnChanges {

  @Input('options') options:any;

  @Output() cambiarSelectEvent = new EventEmitter();
  // selectedOption :any = {value:'',viewValue:''};
  public listOptions:any[] = [];
  public optionSelected:any;
  constructor() {
   
   }

  ngOnInit(): void {
    // console.log(this.options)
    // console.log()
    // this.selectedOption = this.options[0];
    // this.selectedOption = this.optionSelected

  }

  ngOnChanges(changes:any){
      console.log(changes)
      this.listOptions = changes.options.currentValue
      console.log(this.listOptions)

      this.listOptions.forEach((option:any) => {
        console.log(option)
        if(option.selected == true){
          this.optionSelected = option
        }
      })
  }


  public selectOptionFunction(option:any){
   this.cambiarSelectEvent.emit(option)
   
  }

}
