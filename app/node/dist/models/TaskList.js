import { UIComponent } from "./UIComponent.js";
export class TaskList extends UIComponent {
    taskStatus;
    constructor(taskStatus) {
        super("#task-list-template");
        this.taskStatus = taskStatus;
        this.setup();
    }
    setup() {
        this.element.querySelector("h2").textContent = `${this.taskStatus}`;
        this.element.querySelector("ul").id = `${this.taskStatus}`;
    }
}
