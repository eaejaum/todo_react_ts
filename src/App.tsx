import { useState } from "react";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ITask } from "./interfaces/ITask";
import Modal from "./components/Modal";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<ITask | null>(null);

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if(display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };
  
  const handleEditTask = (task: ITask) => {
    hideOrShowModal(true);
    setTaskToEdit(task);
  };

  const handleUpdateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = {id, title, difficulty}
    const updatedItems = tasks.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    });
    setTasks(updatedItems);
    hideOrShowModal(false);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Modal children={<TaskForm btnText="Editar Tarefa" taskList={tasks} taskToEdit={taskToEdit} handleUpdate={handleUpdateTask} />}/>
      <Header />

      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            taskList={tasks}
            setTaskList={setTasks}
            btnText="Criar Tarefa"
          />
        </div>

        <div>
          <h2>Suas tarefas: </h2>
          <TaskList taskList={tasks} handleEdit={handleEditTask} handleDelete={handleDeleteTask} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
