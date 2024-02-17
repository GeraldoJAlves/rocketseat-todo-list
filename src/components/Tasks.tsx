import { Trash } from 'phosphor-react'
import clipboard from '../assets/icons/clipboard.svg'
import styles from './Tasks.module.css'
import { TaskItem } from '../App'

type TasksProps = {
  items: TaskItem[]
  updateTaskProgress: (id: string, done: boolean) => void
  deleteTask: (id: string) => void
}

export function Tasks({ items, updateTaskProgress, deleteTask }: TasksProps) {
  const totalCreated = items.length
  const totalDone = items.reduce(
    (acc, item) => (item.status === 'done' ? ++acc : acc),
    0,
  )

  return (
    <main className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <span>Tarefas criadas</span>
          <strong>{totalCreated}</strong>
        </div>
        <div className={styles.done}>
          <span>Concluídas</span>
          <strong>
            {totalCreated > 0 ? `${totalDone} de ${totalCreated}` : 0}
          </strong>
        </div>
      </div>
      {items.length === 0 ? (
        <div className={styles['empty-list']}>
          <img src={clipboard} alt="" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      ) : (
        <ul className={styles.list}>
          {items.map(({ id, name, status }) => (
            <li key={id}>
              <input
                type="checkbox"
                defaultChecked={status === 'done'}
                title={status === 'done' ? 'Reabrir tarefa' : 'Concluir tarefa'}
                onChange={() => {
                  updateTaskProgress(id, status === 'open')
                }}
              />
              <span>{name}</span>
              <button onClick={() => deleteTask(id)} title="Remover tarefa">
                <Trash size={14} weight="bold" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
