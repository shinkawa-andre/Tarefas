import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import InputTitle from './components/input/InputTitle';
import { useState } from 'react';
import InputText from './components/input/InputText';
import Btn from './components/button/Btn';
import TaskCard from './components/card/TaskCard';
import { Task } from './types/Task';
import TaskModal from './components/card/TaskModal';
import { useEffect } from "react";
import { initDatabase } from "./database/database";
import { addTask, deleteTask, getTasks } from './database/tasks';





export default function App() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [save, setSave] = useState();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    initDatabase();
  }, []);

  useEffect(() => {

    const data = getTasks();

    setTasks(data);

  }, []);

  function toggleTask(id:string){

    setTasks(prev =>
        prev.map(task =>
            task.id === id
            ? {
                ...task,
                completed: !task.completed
              }
            : task
        )
    );

}


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.inputs}>
        <InputTitle
          value={title}
          setValue={setTitle}
        />
        <InputText
          value={desc}
          setValue={setDesc}
        />
        <Btn
          onPress={() => {

            const newTask: Task = {
              id: Date.now().toString(),
              title,
              description: desc,
              completed: false
            }

            addTask(newTask);

            setTasks(prev => [
              ...prev,
              newTask
            ]);

            setTitle("");
            setDesc("");

          }}
        />
      </View>
      <View style={styles.divider} />
      <FlatList
        style={styles.flat}
        contentContainerStyle={{
          alignItems: "center",

        }}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggle={toggleTask}
            onClick={() => {

              deleteTask(item.id);

              setTasks(prev =>
                prev.filter(t => t.id !== item.id)
              );

            }}
            onPress={() => {
              setSelectedTask(item);
              setModalVisible(true);
            }}
          />
        )}
      />
      <TaskModal
        visible={modalVisible}
        task={selectedTask}
        close={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: "#fff",
    alignItems: 'center',
    paddingTop: 50,
    gap: 15

  },
  inputs: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#EF4444",
  },
  divider: {
    width: "90%",
    height: 2,
    backgroundColor: "#EF4444",
    marginVertical: 16,
  },
  flat: {
    flex: 1,
    width: '100%',

  }
});
