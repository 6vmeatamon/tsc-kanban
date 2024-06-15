import { bound } from "../decorator/bindThis.js";
import { Task } from "../interfaces/Task.js";
import { TaskItem } from "./TaskItem.js";

export class TaskForm {
    element: HTMLFormElement;
    titleInputEl: HTMLInputElement;
    descriptionInputEl: HTMLTextAreaElement;

    constructor(){
        this.element = document.querySelector("#task-form")!; // 非nullアサーション
        this.titleInputEl = document.querySelector("#form-title")!;
        this.descriptionInputEl = document.querySelector("#form-description")!;
        this.bindEvents();
    }

    private makeNewTask(): Task {
        return {
            title: this.titleInputEl.value,
            description: this.descriptionInputEl.value,
        };
    }

    private clearInputs(): void {
        this.titleInputEl.value = "";
        this.descriptionInputEl.value = "";
    }

    @bound
    private submitHandler(event: Event) {
        event.preventDefault(); // ブラウザのデフォルトの動作をキャンセル。
        const task = this.makeNewTask();
        console.log(task);
        const item = new TaskItem(task);
        item.mount("#todo");
        
        this.clearInputs();
    }

    private bindEvents() {
        this.element.addEventListener("submit", this.submitHandler);
    }
}