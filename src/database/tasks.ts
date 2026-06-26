import { db } from "./database";
import { Task } from "../types/Task";


type TaskDB = {
    id: string;
    title: string;
    description: string;
    completed: number;
};



export function getTasks(): Task[] {

    const result = db.getAllSync<TaskDB>(
        "SELECT * FROM tasks"
    );

    return result.map(task => ({
        id: task.id,
        title: task.title,
        description: task.description,
        completed: task.completed === 1
    }));

}



export function addTask(task: Task) {

    try {

        console.log("SALVANDO:", task);

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

        console.log("SALVOU");

        return true;

    } catch (error) {

        console.log("ERRO SQLITE:", error);

        return false;
    }

}

export function updateTask(id: string, completed: boolean) {

    db.runSync(
        `
        UPDATE tasks
        SET completed = ?
        WHERE id = ?
        `,
        [
            completed ? 1 : 0,
            id
        ]
    );

}



export function deleteTask(id: string) {

    db.runSync(
        "DELETE FROM tasks WHERE id = ?",
        [id]
    );

}