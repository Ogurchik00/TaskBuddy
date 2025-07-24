
const FilterButtons = ({onShowAll, onShowCompleted, onShowActive}) => {
  return(
    <>
      <button
				onClick={onShowAll}
			>
				Показать все задачи
			</button>
			<button
				onClick={onShowCompleted}
			>
				Показать завершенные задачи
			</button>
			<button
				onClick={onShowActive}
			>
				Показать активные задачи
			</button>
    </>
    )
}

export default FilterButtons