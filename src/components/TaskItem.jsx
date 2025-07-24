
import './TaskItem.css'

const TaskItem = ({text, completed, id, deleteTask, toggleTaskStatus}) => {
	


  return (
    <li>
			<p className={`${completed ? 'completed' : ''}`}>
				{text}
			</p>
			<button
				onClick={() => toggleTaskStatus(id)}
			>
				{completed ? 'Продолжить' : 'Завершить'}
			</button>
			<button
				onClick={() => deleteTask(id)}
			>
				удалить
			</button>
    </li>
  )

}

export default TaskItem