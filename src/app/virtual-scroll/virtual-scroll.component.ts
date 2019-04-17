import { Component, OnInit } from '@angular/core';
import {CountryData} from '../sample-data';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css'],
})
export class VirtualScrollComponent implements OnInit {
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
    this.options;
  }

   public OnRadioBoxSelect(item):void {
      console.log(item);
   }

}
