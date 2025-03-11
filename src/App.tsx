import { useState } from 'react';
import styles from './App.module.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/ITask';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <div>
      <Header/>

      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm taskList={tasks} setTaskList={setTasks} btnText="Criar Tarefa" />
        </div>

        <div>
          <h2>Suas tarefas: </h2>
          <TaskList taskList={tasks} />
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
