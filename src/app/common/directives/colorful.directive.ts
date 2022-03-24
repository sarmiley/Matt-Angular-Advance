import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appColorful]',
  exportAs: 'appColorful',
})
export class ColorfulDirective {
  @Input() appColorful: any;
  @HostBinding('style.color') get color() {
    return this.appColorful || 'red';
  }

  changeColor(color: string) {
    this.appColorful = color;
  }
}
