import { Directive,ElementRef, Renderer } from 'angular2/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': '(onFocus)',
        '(blur)': '(onBlur)'
    }
})
export class AutoGrowDirective {

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) {

    }

    onFocus() {
            this._renderer.setElementStyle(this._elementRef.nativeElement,'width','220');
    }

    onBlur() {
           this._renderer.setElementStyle(this._elementRef.nativeElement,'width','120'); 
    }
}