import { TaskStatus } from "../types/TaskStatus.js";

export class TaskList {
    templateEl: HTMLTemplateElement;
    element: HTMLDivElement;
    private taskStatus: TaskStatus;

    constructor(templateId: string, _taskStatus: TaskStatus){
        this.templateEl = document.querySelector(templateId)!;
        const clone = this.templateEl.content.cloneNode(true) as DocumentFragment;
        this.element = clone.firstElementChild as HTMLDivElement;
        this.taskStatus = _taskStatus;
        this.setup();
    }

    setup() {
        this.element.querySelector("h2")!.textContent = `${this.taskStatus}`;
        this.element.querySelector("ul")!.id = `${this.taskStatus}`;
    }

    mount(selector: string) {
        const targetEl = document.querySelector(selector)!;
        targetEl.insertAdjacentElement("beforeend", this.element);
    }
}