import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'

function App() {

  const [lists, setList] = useState(
    [
      {
        id: 0,
        owner: 'Lily',
        tasks: 
        ['Task 0', 'Task 1']
      },
      {
        id: 1,
        owner: 'Mike',
        tasks: 
        ['Task 2', 'Task 3']
      },
      {
        id: 2,
        owner: 'Sofia',
        tasks: 
        ['Task 4', 'Task 5', 'Task 6', 'Task 7']
      },
      {
        id: 3,
        owner: 'Joe',
        tasks: 
        ['Task 8', 'Task 9']
      },
    ]
  )

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

  const taskUpdate = (taskIndex, cardIndex, action) => {
    setList((list) => {
      const updatedList = [...list];

      const currentList = updatedList[cardIndex];

      const targetedList = action === 'next' ? cardIndex + 1 : cardIndex - 1;

      if (targetedList >= 0 && targetedList <= updatedList.length &&
        taskIndex >= 0 && taskIndex <= currentList.tasks.length){

          const currentTask = currentList.tasks[taskIndex];

          const currentListTasks = [...currentList.tasks];

          currentListTasks.splice(taskIndex, 1);

          const targetedListTasks = [...updatedList[targetedList].tasks];

          targetedListTasks.splice(taskIndex, 0, currentTask);

          updatedList[cardIndex] = {
            ...updatedList[cardIndex],
            tasks: currentListTasks
          }

          updatedList[targetedList] = {
            ...updatedList[targetedList],
            tasks: targetedListTasks
          }
        }

        return updatedList;
    })

  }



  return (
    <div className='container'>
      {lists.map((list) => (
        <Card key={list.id} cardIndex={list.id} owner={list.owner} tasks={list.tasks} addTask={addTask} taskUpdate={taskUpdate} />
      ))}
    </div>
  )
}

export default App
