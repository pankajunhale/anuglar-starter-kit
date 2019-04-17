import {Component,AfterViewInit,EventEmitter,Input,Output} from '@angular/core';
import { DatePipe } from '@angular/common';
//import {Moment} from 'moment';
import * as moment from 'moment';
import {MyDateFormat} from './date.format';

@Component({
   selector:'datepicker-widget',
   providers: [DatePipe],
   //template:'<datepicker [(ngModel)]="CalendarDate" [showWeeks]="true"></datepicker>',
   templateUrl:'./datepicker.widget.component.html'

})

export class DatePickerWidget implements AfterViewInit {
    ngAfterViewInit(): void {
        // / this.CalendarDate = new Date(this.value);
    }
    @Output() dateModelChange: EventEmitter<string> = new EventEmitter();

    CalendarDate: Date;
    ShowDatepicker:boolean;
    SelectedDate:string;

    constructor(){
        this.ShowDatepicker = false;        
        this.SetDate(new Date().toString());
    }
    public OpenCalendar() : void{
        if(this.ShowDatepicker == false){
            this.ShowDatepicker = true;
        }
    }

    public OnSelectionDone(event):void{
        this.CalendarDate = event;
        this.SetDate(this.CalendarDate.toString());
        this.CloseCalendar();        
    }

    private SetDate(selectedDate:string): void{
        this.SelectedDate =this.FormatSelectedDate(selectedDate);
        this.dateModelChange.emit(this.SelectedDate); 
    }
    private FormatSelectedDate(selectedDate):string{
        
        let temp = moment(selectedDate).format(MyDateFormat.MMDDYYYY); // format("DD-MM-YYYY");
        let formattedDate = temp;
        return formattedDate;
    }
    private CloseCalendar():void{
        this.ShowDatepicker = false;
    }
}