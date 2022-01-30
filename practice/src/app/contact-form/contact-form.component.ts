import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  logFisrtName(value : any)
  {
    console.log(value)
  }
  submit(f:any){
    console.log('ngForm',f)
  }
}
