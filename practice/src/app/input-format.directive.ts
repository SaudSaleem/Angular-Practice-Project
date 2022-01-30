import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  // we need to get host elemnt refernece so get its data or value
  constructor(private el: ElementRef) {}
  @Input('appInputFormat') format : string = 'uppercase';
  @HostListener('focus') onFocus() {
    console.log('on focus');
  }
  @HostListener('blur') onBlur() {
    let value = this.el.nativeElement.value;
    if(this.format == 'lowercase')
    {
    this.el.nativeElement.value = value.toLowerCase()
    }else  this.el.nativeElement.value = value.toUpperCase()
    console.log('on blur');
  }
}
