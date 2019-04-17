import { Component, OnInit } from '@angular/core';
import { CountryData } from "app/sample-data";

@Component({
  selector: 'app-bootstrap-dropdown',
  templateUrl: './bootstrap-dropdown.component.html',
  styleUrls: ['./bootstrap-dropdown.component.css']
})
export class BootstrapDropdownComponent implements OnInit {
options:any;
ActiveItemOnInit : any;
  private data = CountryData;
  constructor() {    
    this.options ={
      Source:this.data,
      DisplayKey:'name'
    }
    this.ActiveItemOnInit =  {name: 'India', code: 'IN'};
   }
  ngOnInit() {
  }

  public OnItemSelect(item):void{    
    console.log(item);
  }

}
