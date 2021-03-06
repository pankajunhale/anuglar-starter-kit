import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {RadioWidgetComponent} from "app/Widget/radio-widget/radio-widget.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations:[
        RadioWidgetComponent
    ],
    imports: [CommonModule,FormsModule], //required for ngFor..and other directives..
    exports:[
        RadioWidgetComponent
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA] 
})

export class RadioWidgetModule{

}