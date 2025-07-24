
import { useState } from "react"

const AddTaskForm = ({addTask}) => {

	const [value, setValue] = useState('')

	const clickChangeValue = (e) => {
		setValue(e.target.value)
	}

	const addTaskClick = () => {
		
		if(value != '') {
			addTask(value)
			setValue('')
			return true
		}
		
		alert('текст заметки не может быть пустым')
	}

  return (
    <div>
			<input 
				type="text" 
				placeholder="Текст задачи"
				value={value}
				onChange={clickChangeValue}
			/>

			<button
				onClick={addTaskClick}
			>
				Добавить задачу
			</button>

		</div>
  )
}

export default AddTaskForm
