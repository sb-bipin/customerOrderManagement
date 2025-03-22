import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[disableAutofocus]'
})
export class DisableAutofocusDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.removeAttribute(this.el.nativeElement, 'autofocus');
    }
}
