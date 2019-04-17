import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{VirtualScrollWidgetOptions} from './Model/virtual-scroll-widget-options';
import {VirtualScrollWidgetModel} from './Model/virtual-scroll-widget-model';
import * as _ from 'underscore';
import {VirtualScrollWidgetComponentService} from './Service/virtual-scroll-widget.component.service';
@Component({
  selector: 'virtual-scroll-widget',
  templateUrl: './virtual-scroll-widget.component.html',
  styleUrls: ['./virtual-scroll-widget.component.css'],
  providers:[VirtualScrollWidgetComponentService],
})
export class VirtualScrollWidgetComponent implements OnInit {
  @Input() options:VirtualScrollWidgetOptions;  
  @Input() ActiveItemOnInit:any;
  @Output() onDropdownItemSelect: EventEmitter<any> = new EventEmitter();
  public VirtualScrollList: Array<VirtualScrollWidgetModel>;
  public SelectedDropdownItem: VirtualScrollWidgetModel;
  constructor(private _service:VirtualScrollWidgetComponentService) {

   }

  ngOnInit() {
    this.VirtualScrollList = this._service.GenerateCollection(this.options.Source, this.options.DisplayKey);
    this.SelectedDropdownItem = _.first(this.VirtualScrollList);

    if(this.ActiveItemOnInit == null || this.ActiveItemOnInit == undefined){
      this.SelectedDropdownItem = _.first(this.VirtualScrollList);
    }
    else{      
      this.SelectedDropdownItem = this._service.FindSelectedItemFromCollection(this.VirtualScrollList,this.ActiveItemOnInit,this.options.DisplayKey);
    }
    
  }

  SelectItem(data:VirtualScrollWidgetModel){       
    this.onDropdownItemSelect.emit(data.Item);
  }
}
