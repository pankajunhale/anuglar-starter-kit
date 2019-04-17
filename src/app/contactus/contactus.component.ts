import { Component, OnInit } from '@angular/core';
import { CountryData } from "app/sample-data";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  options:any;
  private data = CountryData;
  constructor() {
    
    this.options ={
      Source:this.data,
      DisplayKey:'name'
    }
   }

   public OnCheckBoxSelect(item):void {
      console.log(item);
   }

  ngOnInit() {
  }

}
