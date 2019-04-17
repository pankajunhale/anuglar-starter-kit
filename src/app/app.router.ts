import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { RadioComponent } from './radio/radio.component';
import { BootstrapDropdownComponent } from "./bootstrap-dropdown/bootstrap-dropdown.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
export const router: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactusComponent },
    { path: "radio", component: RadioComponent },
    { path: "bootstrapDropdown", component: BootstrapDropdownComponent },
    { path: "datepicker", component: DatepickerComponent },
    { path: "virtualscroll", component: VirtualScrollComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

//https://angular-2-training-book.rangle.io/handout/routing/query_params.html