import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error: any): void {
        console.log('unexpected error', error);
    }
 }
//  we use this class to optimize our code and execute handleError method everywhere