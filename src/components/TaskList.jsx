
import './TaskList.css'

import TaskItem from './TaskItem'

const TaskList = ({tasks, deleteTask, toggleTaskStatus}) => {

	

  return (

	<ul>
		{

			tasks.length > 0 ? 
				(tasks.map(
					({id, text, completed}) =>(
						<TaskItem 
							key={id} 
							id = {id} 
							text = {text} 
							completed = {completed} 
							deleteTask = {deleteTask} 
							statusTask = {toggleTaskStatus}
						/>)
					)
				) : (
					<li>
						Список задач пуст
					</li>
				)
		}	

				
		
	</ul>

  )
}

export default TaskList

