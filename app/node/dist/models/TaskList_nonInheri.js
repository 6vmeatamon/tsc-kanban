export class TaskList {
    templateEl;
    element;
    taskStatus;
    constructor(templateId, _taskStatus) {
        this.templateEl = document.querySelector(templateId);
        const clone = this.templateEl.content.cloneNode(true);
        this.element = clone.firstElementChild;
        this.taskStatus = _taskStatus;
        this.setup();
    }
    setup() {
        this.element.querySelector("h2").textContent = `${this.taskStatus}`;
        this.element.querySelector("ul").id = `${this.taskStatus}`;
    }
    mount(selector) {
        const targetEl = document.querySelector(selector);
        targetEl.insertAdjacentElement("beforeend", this.element);
    }
}
