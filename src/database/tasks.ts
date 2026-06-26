import { db } from "./database";
import { Task } from "../types/Task";


export function getTasks(): Task[] {

    const result = db.getAllSync<Task>(
        "SELECT * FROM tasks"
    );

    return result.map(task => ({
        ...task,
        completed: Boolean(task.completed)
    }));

}



export function addTask(task: Task) {

    db.runSync(
        `
        INSERT INTO tasks
        (id,title,description,completed)
        VALUES (?,?,?,?)
        `,
        [
            task.id,
            task.title,
            task.description,
            task.completed ? 1 : 0
        ]
    );

}



export function deleteTask(id:string){

    db.runSync(
        "DELETE FROM tasks WHERE id = ?",
        [id]
    );

}