import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {routes} from './app.router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import {HeaderComponent} from './Header/header.component';
import {FooterComponent} from './Footer/footer.component';
import {DatePickerWidget} from './Widget/DatePicker/datePicker.widget.component';
import {SidebarComponent} from './Header/Sidebar/sidebar.component';
import {ProfileMenuBarComponent} from './Header/ProfileMenubar/profilemenubar.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { CheckBoxWidgetModule } from "app/Widget/checkbox-widget/checkbox-widget.module";
import { BootstrapDropdownWidgetComponent } from './Widget/bootstrap-dropdown-widget/bootstrap-dropdown-widget.component';
import { RadioWidgetModule } from 'app/Widget/radio-widget/radio-widget.module';
import { RadioComponent } from './radio/radio.component';
import { DropdownWidgetModule} from "app/Widget/dropdown-widget/dropdown-widget.module";
import { BootstrapDropdownComponent } from './bootstrap-dropdown/bootstrap-dropdown.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { VirtualScrollWidgetModule} from "app/Widget/virtual-scroll-widget/virtual-scroll-widget.module";
import { VirtualScrollComponent} from "app/virtual-scroll/virtual-scroll.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DatePickerWidget,
    SidebarComponent,
    ProfileMenuBarComponent,
    AboutComponent,
    ContactusComponent,
    HomeComponent,
    BootstrapDropdownWidgetComponent,
    RadioComponent,
    BootstrapDropdownComponent,
    DatepickerComponent,
    VirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //must use if uses ngModel,
    routes,
    BsDatepickerModule.forRoot(),
    CheckBoxWidgetModule,
    RadioWidgetModule,
    DropdownWidgetModule,
    VirtualScrollWidgetModule,

  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]  
})
export class AppModule { }
