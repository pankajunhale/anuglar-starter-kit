import {Component} from '@angular/core';
import {DatePickerWidget} from '../Widget/DatePicker/datePicker.widget.component';

@Component({
   selector:'header-component',
   templateUrl:'./header.component.html',
   styleUrls:['./header.component.css']   
})

export class HeaderComponent{
    constructor(){

    }

    public ManageDateHandler(event:Date):void{
        console.log(event);
    }
    
}
