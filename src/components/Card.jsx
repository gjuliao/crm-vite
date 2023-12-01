import { FormInput } from "./FormInput"
import { Item } from "./Item"


export const Card = ({cardIndex, owner, tasks, addTask, updateTask}) => {
  return (
    <div className="card-group">
        <div className={`card-title-${cardIndex}`}>
            <h2>{owner}</h2>
        </div>
        <ul className="card-list">
            {tasks.map((el, taskIndex) => (
                <li key={taskIndex}>
                    <Item taskIndex={taskIndex} cardIndex={cardIndex} item={el} updateTask={updateTask} />
                </li>
            ))}
        </ul>
        <FormInput cardIndex={cardIndex} owner={owner} addTask={addTask}/>
    </div>
  )
}
