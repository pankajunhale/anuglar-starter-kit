import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BaseComponent} from '../app.base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  
})
export class HomeComponent extends BaseComponent {
  public WidgetList:any;
  constructor(private router:Router) { 
    super();
    this.WidgetList = [
      {Id:1,Name:"Radio Box",Path:"radio"},
      {Id:1,Name:"Checkbox",Path:"contact"},
      {Id:1,Name:"Dropdown",Path:"about"},
      {Id:1,Name:"Bootstrap Dropdown",Path:"bootstrapDropdown"}
      //{Id:1,Name:"Date Picker",Path:"datepicker"}
    ]
  } 

  public DisplayWidget(item:any):void{    
    this.router.navigate([item.Path],{queryParams:{},replaceUrl:true}); 
  }
}
