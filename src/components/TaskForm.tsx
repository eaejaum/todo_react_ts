import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./TaskForm.module.css";
import { ITask } from "../interfaces/ITask";

type Props = {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ taskList, setTaskList, btnText }: Props) => {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title") {
            setTitle(e.target.value);
        } else {
            setDifficulty(Number(e.target.value));
        }
    };

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000);
        const newTask: ITask = {
            id,
            title,
            difficulty
        }
        setTaskList!([...taskList, newTask]);
        setTitle("");
        setDifficulty(0);
    };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input value={title} onChange={handleChange} type="text" name="title" placeholder="Título da tarefa..." />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input value={difficulty} onChange={handleChange} type="text" name="difficulty" placeholder="Dificuldade da tarefa..." />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm;