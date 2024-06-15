export abstract class UIComponent<T extends HTMLElement>{
    templateEl: HTMLTemplateElement;
    element: T;

    constructor(templateId: string) {
        this.templateEl = document.querySelector(templateId)!;
        const clone = this.templateEl.content.cloneNode(true) as DocumentFragment;

        this.element = clone.firstElementChild as T;
    }

    mount(selector: string) {
        const targetEl = document.querySelector(selector)!;
        targetEl.insertAdjacentElement("beforeend", this.element);
    }

    abstract setup(): void;
}