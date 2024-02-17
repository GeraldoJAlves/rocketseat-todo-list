import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'

import styles from './App.module.css'
import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

export type TaskStatus = 'done' | 'open'
export interface TaskItem {
  id: string
  name: string
  createdAt: Date
  status: TaskStatus
}

export function App() {
  const [listOfTasks, setListOfTasks] = useState<TaskItem[]>([])

  useEffect(() => {
    try {
      const items = JSON.parse(
        localStorage.getItem('@geraldev-todo-list-items')!,
      )
      items && items.length && setListOfTasks(items)
    } catch (e) {
      console.error(e)
    }
  }, [setListOfTasks])

  useEffect(() => {
    localStorage.setItem(
      '@geraldev-todo-list-items',
      JSON.stringify(listOfTasks),
    )
  }, [listOfTasks])

  function createNewTask(name: string) {
    setListOfTasks((state) => [
      { id: uuid(), name, createdAt: new Date(), status: 'open' },
      ...state,
    ])
  }

  function updateTaskProgress(taskId: string, done: boolean) {
    setListOfTasks((state) => {
      const taskIndex = state.findIndex(({ id }) => id === taskId)

      if (taskIndex < 0) {
        return state
      }

      state[taskIndex].status = done ? 'done' : 'open'

      return [...state]
    })
  }

  function deleteTask(taskId: string) {
    setListOfTasks((state) => state.filter(({ id }) => id !== taskId))
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <NewTask createNewTask={createNewTask} />
        <Tasks
          items={listOfTasks}
          updateTaskProgress={updateTaskProgress}
          deleteTask={deleteTask}
        />
      </div>
    </>
  )
}
