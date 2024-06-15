export interface ClickableElement {
    element: HTMLElement;
    clickHandler(event: MouseEvent): void;
    bindEvents(): void;
}
