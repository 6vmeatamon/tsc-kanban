export class UIComponent {
    templateEl;
    element;
    constructor(templateId) {
        this.templateEl = document.querySelector(templateId);
        const clone = this.templateEl.content.cloneNode(true);
        this.element = clone.firstElementChild;
    }
    mount(selector) {
        const targetEl = document.querySelector(selector);
        targetEl.insertAdjacentElement("beforeend", this.element);
    }
}
