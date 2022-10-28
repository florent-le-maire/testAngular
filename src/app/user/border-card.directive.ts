import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[userBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 200;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }
  @Input('userBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  setHeight(height: number): void{
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorder(color: string): void{
    this.el.nativeElement.style.border = 'solid 4px '+color;
  }

}
