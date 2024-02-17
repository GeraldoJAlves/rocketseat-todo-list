import clipboard from '../assets/icons/clipboard.svg'
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <main className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <span>Tarefas criadas</span>
          <strong>0</strong>
        </div>
        <div className={styles.done}>
          <span>Concluídas</span>
          <strong>0</strong>
        </div>
      </div>
      <div className={styles['empty-list']}>
        <img src={clipboard} alt="" />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </main>
  )
}
