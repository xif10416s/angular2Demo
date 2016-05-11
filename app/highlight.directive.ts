import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
    selector: '[myHighlight]', host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
    private el:HTMLElement;
    private _defaultColor = 'red';
    constructor(el: ElementRef) { this.el = el.nativeElement; }
    @Input('myHighlight') highlightColor: string;
    @Input() set defaultColor(colorName:string){
        this._defaultColor = colorName || this._defaultColor;
    }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }
    onMouseEnter() { this.highlight(this.highlightColor || this._defaultColor); }
    onMouseLeave() { this.highlight(null); }
}