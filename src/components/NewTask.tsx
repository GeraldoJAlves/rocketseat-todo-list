import styles from './NewTask.module.css'

import plus from '../assets/icons/plus.svg'

export function NewTask() {
  return (
    <form className={styles['new-task']}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <img src={plus} alt="" />
      </button>
    </form>
  )
}
