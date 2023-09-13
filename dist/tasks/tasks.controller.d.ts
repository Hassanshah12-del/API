import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getALLTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(title: string, description: string): Task;
    deleteTask(id: string): string;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
