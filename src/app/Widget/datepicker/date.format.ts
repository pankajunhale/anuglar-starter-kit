export class MyDateFormat {
    private static _mmddyyyy:string = "MM-DD-YYYY";
    private static _ddmmyyyy:string = "DD-MM-YYYY";
   
    ///MM-DD-YYYY
    public static get MMDDYYYY() : string {
        return this._mmddyyyy;
    }

    ///MM-DD-YYYY
    public static get DDMMYYYY() : string {
        return this._ddmmyyyy;
    }
    
}