import { Injectable } from '@angular/core';

//we only need this decorator only if this service component constructor need dependency
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
