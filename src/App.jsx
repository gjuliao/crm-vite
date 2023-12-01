import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'


function App() {

  const [lists, setList] = useState([
    {
      id: 0,
      owner: 'John',
      tasks: ['task 0', 'task 1'],
    },
    {
      id: 1,
      owner: 'Peter',
      tasks: ['task 2', 'task 3'],
    },
    {
      id: 2,
      owner: 'Sara',
      tasks: ['task 4', 'task 5', 'task 6', 'task 7'],
    },
    {
      id: 3,
      owner: 'Lily',
      tasks: ['task 8', 'task 9'],
    },
  ])

  // used in formInput
  const addTask = (cardIndex, newTask) => {
    setList((list) => {
      const updatedList = [...list];

      updatedList[cardIndex] = {
        ...updatedList[cardIndex],
        tasks: [...updatedList[cardIndex].tasks, newTask]
      }
      return updatedList;
    })
  }

  const updateTask = (cardIndex, taskIndex, action) => {
    setList((list) => {
      const updatedList = [...list];

      const currentList = updatedList[cardIndex];

      const targetedListIndex = action === 'next' ? cardIndex + 1 : cardIndex - 1;

      if (targetedListIndex >= 0 && targetedListIndex < updatedList.length && 
        taskIndex >= 0 && taskIndex <= currentList.tasks.length){
          const currentTask = currentList.tasks[taskIndex];

          const currentListTasks = [...currentList.tasks];

          currentListTasks.splice(taskIndex, 1);

          const targetedListTasks = [...updatedList[targetedListIndex].tasks];

          targetedListTasks.splice(taskIndex, 0, currentTask);

          updatedList[cardIndex] = {
            ...updatedList[cardIndex],
            tasks: currentListTasks
          }

          updatedList[targetedListIndex] = {
            ...updatedList[targetedListIndex],
            tasks: targetedListTasks
          }
        }

        return updatedList;
    })

  }


  return (
    <div className='container'>
    {lists.map((list) => (
      <Card key={list.id} cardIndex={list.id} owner={list.owner} tasks={list.tasks} addTask={addTask} updateTask={updateTask}/>
    ))}
    </div>
  )
}

export default App
