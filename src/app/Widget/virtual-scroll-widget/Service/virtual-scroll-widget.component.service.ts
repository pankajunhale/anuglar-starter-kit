import {Injectable} from '@angular/core';
import * as _ from 'underscore';
import {VirtualScrollWidgetModel} from '../Model/virtual-scroll-widget-model';

@Injectable()
export class VirtualScrollWidgetComponentService{

    public GenerateCollection(source:any, displayKey:string):VirtualScrollWidgetModel[]{
        let list: Array<VirtualScrollWidgetModel> = [];
            _.each(source, function(item:any, key){
               
                let title = "";
                if(displayKey != undefined){
                    title = item[displayKey];
                }
                else{
                    title = item;
                }   
                let virtualScrollWidgetModel = new VirtualScrollWidgetModel(title, item);
                list.push(virtualScrollWidgetModel);
            })
        return list;

    }

    public FindSelectedItemFromCollection(list: Array<VirtualScrollWidgetModel>,activeItem:any,displayKey:string):VirtualScrollWidgetModel{
        let model:VirtualScrollWidgetModel = null;
        model = _.find(list,function(item:VirtualScrollWidgetModel){
            return (item.Title == activeItem[displayKey]);
        });
        if(model == null || model == undefined){
            console.log("@Input - ActiveItemOnInit has some invaild data...");
        }
        return model;
    }
}
