import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core'

@Directive({
    selector: "[highlightColor]"
})

export class HighlightDirective {

    @Input() highlightColor: string
    previousclass: string;
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter')
    onMouseHover() {
        this.previousclass = this.elementRef.nativeElement.className;
        this.renderer.setStyle(this.elementRef.nativeElement, 'background', this.highlightColor);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.renderer.removeStyle(this.elementRef.nativeElement, 'background')
        this.renderer.addClass(this.elementRef.nativeElement, this.previousclass)
    }
}