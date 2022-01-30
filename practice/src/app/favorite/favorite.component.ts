import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
//Input is another decorator function that marks class property as input proprty (just like props in VueJs)
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation:ViewEncapsulation.Emulated //default value (means scoped styles) (None value will leak styles)
  // another approach for input proprty (prop)
  //input['isFavorite']
})
export class FavoriteComponent implements OnInit {
  task = {
    title: 'Review Applications',
    assignee: {
      name: 'John Smith'
    }
  }
  // is-favorite is optional alias for isFavorite prop
  @Input('is-favorite') isFavorite: Boolean = false;
  //event emitter
  @Output() eventEmitted = new EventEmitter()
  // alias for OUTPUT proprty (event emitter)
  //@Output(e-emitted) eventEmitted = new EventEmitter()
  constructor() { }
  onClick()
  {
    this.isFavorite = !this.isFavorite;
    //event emitted
    this.eventEmitted.emit("saud is event params or data")
  }
  ngOnInit(): void {
  }

}
