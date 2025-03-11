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

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if(display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };
  
  const handleEditTask = () => {
    hideOrShowModal(true);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Modal children={<TaskForm btnText="Editar Tarefa" taskList={tasks}/>}/>
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
