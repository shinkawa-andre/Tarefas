import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("tasks.db");


export function initDatabase() {

    db.execSync(`
        CREATE TABLE IF NOT EXISTS tasks (
            id TEXT PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            description TEXT,
            completed INTEGER NOT NULL
        );
    `);

}