import { TaskStatus } from "../types/TaskStatus.js";
import { UIComponent } from "./UIComponent.js";

export class TaskList extends UIComponent<HTMLDivElement>{
    
    constructor(private taskStatus: TaskStatus){
        super("#task-list-template");
        this.setup();
    }

    setup() {
        this.element.querySelector("h2")!.textContent = `${this.taskStatus}`;
        this.element.querySelector("ul")!.id = `${this.taskStatus}`;
    }
}