import styles from './NewTask.module.css'

import plus from '../assets/icons/plus.svg'
import { FormEvent, useState } from 'react'

interface NewTaskProps {
  createNewTask: (name: string) => void
}

export function NewTask({ createNewTask }: NewTaskProps) {
  const [name, setName] = useState('')

  const disableCreateNewTask = !name

  function createNewTaskHandle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    createNewTask(name)
    setName('')
  }

  return (
    <form className={styles['new-task']} onSubmit={createNewTaskHandle}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        maxLength={100}
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button type="submit" disabled={disableCreateNewTask}>
        Criar
        <img src={plus} alt="" />
      </button>
    </form>
  )
}
