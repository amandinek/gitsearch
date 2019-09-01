import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // highlight: any;

  constructor(private elem:ElementRef) { }
  @HostListener("mousenter") onMouseEnter(){
    this.highlight("highlight");
  }
  @HostListener("mouseleave") onmouseleave(){
    this.highlight(null);
  }
  private highlight(highlight:string){
    this.elem.nativeElement.style.backgroundcolor="blue";
  }


}


