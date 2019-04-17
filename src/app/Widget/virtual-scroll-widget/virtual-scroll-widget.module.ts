import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {VirtualScrollWidgetComponent} from "app/Widget/virtual-scroll-widget/virtual-scroll-widget.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';

import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
    declarations:[
        VirtualScrollWidgetComponent
    ],
    imports: [CommonModule,FormsModule,ScrollingModule], //required for ngFor..and other directives..
    exports:[
        VirtualScrollWidgetComponent
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA] 
})

export class VirtualScrollWidgetModule{

}