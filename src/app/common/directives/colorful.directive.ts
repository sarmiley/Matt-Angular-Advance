import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appColorful]',
  exportAs: 'appColorful',
})
export class ColorfulDirective {
  @Input() appColorful: any;
  @HostBinding('style.color') get color() {
    console.log(this.appColorful);
    return this.appColorful || 'red';
  }

  changeColor(color: string) {
    console.log(color);
    this.appColorful = color;
  }
}
