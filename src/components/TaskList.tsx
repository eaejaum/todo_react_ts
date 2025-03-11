import { ITask } from "../interfaces/ITask";
import styles from "./TaskList.module.css";

type Props = {
    taskList: ITask[];
    handleDelete(id: number): void;
    handleEdit(): void;
}

const TaskList = ({ taskList, handleEdit, handleDelete }: Props) => {
  return (
    <>  
        {taskList.length > 0 ? (
            taskList.map((task) => (
                <div key={task.id} className={styles.task}>
                    <div className={styles.details}>
                        <h4>{task.title}</h4>
                        <p>Dificuldade: {task.difficulty}</p>
                    </div>
                    <div className={styles.actions}>
                        <i onClick={() => handleEdit()} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
                    </div>
                </div>
            ))
        ) : (
            <p>Não existem tarefas cadastradas!</p>
        )}
    </>
  )
}

export default TaskList;