import React from 'react'
import { Item } from './Item'
import { FormInput } from './FormInput'
import PropTypes from 'prop-types'


export const Card = ({ owner, cardIndex, tasks, addTask, taskUpdate }) => {
  return (
    <div className='card-group'>
        <div className={`card-title-${cardIndex}`}>
            <h2>{owner}</h2>
        </div>

        <ul className='list'>
        {tasks.map((item, taskIndex) => (
            <li key={taskIndex}>
                <Item item={item} taskIndex={taskIndex} cardIndex={cardIndex} taskUpdate={taskUpdate}/>
            </li>
        ))}
        </ul>
        <FormInput cardIndex={cardIndex} owner={owner} addTask={addTask}/>
  </div>
 )
}

Card.propTypes = {
    owner: PropTypes.string,
    cardIndex: PropTypes.integer,
    tasks: PropTypes.array,
    addTask: PropTypes.func,
    taskUpdate: PropTypes.func,
};
