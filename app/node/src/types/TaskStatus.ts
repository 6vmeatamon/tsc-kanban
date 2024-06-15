export const TASK_STATUS = ["todo", "working", "done"] as const;
export type TaskStatus = (typeof TASK_STATUS)[number]; // インデックスアクセス型
