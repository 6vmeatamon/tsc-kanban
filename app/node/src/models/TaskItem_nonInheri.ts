import { bound } from "../decorator/bindThis.js";
import { Task } from "../interfaces/Task.js";
import { TASK_STATUS, TaskStatus } from "../types/TaskStatus.js";

export class TaskItem {
    task: Task;
    templateEl: HTMLTemplateElement;
    element: HTMLLIElement;

    constructor(templateId: string, _task: Task){
        this.templateEl = document.querySelector(templateId)!;
        const clone = this.templateEl.content.cloneNode(true) as DocumentFragment;
        this.element = clone.firstElementChild as HTMLLIElement;
        this.task = _task;
        this.setup();
        this.bindEvents();
    }

    setup() {
        this.element.querySelector("h2")!.textContent= `${this.task.title}`; //!は非NULLアサーション
        this.element.querySelector("p")!.textContent = `${this.task.description}`;
    }

    mount(selector: string) {
        const targetEl = document.querySelector(selector)!;
        targetEl.insertAdjacentElement("beforeend", this.element);
    }

    @bound
    clickHandler() {
        if (!this.element.parentElement) return;

        const currentListId = this.element.parentElement.id as TaskStatus;
        const taskStatusIdx = TASK_STATUS.indexOf(currentListId);

        if (taskStatusIdx === -1) {
            throw new Error(`タスクステータスが不正です！`);
        }

        const nextListId = TASK_STATUS[ taskStatusIdx + 1];

        if (nextListId) {
            const nextListEl = document.getElementById(nextListId) as HTMLUListElement;
            nextListEl.appendChild(this.element);
            return;
        }

        this.element.remove();
    }


    bindEvents() {
        this.element.addEventListener("click", this.clickHandler);
    }
}
