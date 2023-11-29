import React from 'react'

export const FormInput = ({cardIndex, owner, addTask}) => {

    const handleClick = (e) => {
        e.preventDefault();
        const userInput = window.prompt(`Add task to ${owner}`);
        if (userInput) {
            addTask(cardIndex, userInput);
        }

    }
  return (
    <form>
        <button onClick={handleClick}>+ Add Task</button>
    </form>
  )
}
