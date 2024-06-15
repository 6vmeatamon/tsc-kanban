import { TaskForm } from "./models/TaskForm.js";
import { TASK_STATUS } from "./types/TaskStatus.js";
import { TaskList } from "./models/TaskList.js";
new TaskForm();
TASK_STATUS.forEach((status) => {
    const list = new TaskList(status);
    list.mount("#container");
});
console.log("コンパイルと読み込み成功！");
