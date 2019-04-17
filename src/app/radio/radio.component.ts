import { Component, OnInit } from '@angular/core';
import {CountryData} from '../sample-data';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
})
export class RadioComponent implements OnInit {
  options:any;
  ActiveItemOnInit:any;
  private data = CountryData;
  constructor() {
    
    this.options ={
      Source:this.data,
      DisplayKey:'name'      
    }

    this.ActiveItemOnInit = {name: 'Åland Islands', code: 'AX'}

   }

  ngOnInit() {
  }

   public OnRadioBoxSelect(item):void {
      console.log(item);
   }

}
