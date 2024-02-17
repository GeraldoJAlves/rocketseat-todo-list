import { Trash } from 'phosphor-react'
import clipboard from '../assets/icons/clipboard.svg'
import trash from '../assets/icons/trash.svg'
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <main className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <span>Tarefas criadas</span>
          <strong>5</strong>
        </div>
        <div className={styles.done}>
          <span>Concluídas</span>
          <strong>2 de 5</strong>
        </div>
      </div>
      {false && (
        <div className={styles['empty-list']}>
          <img src={clipboard} alt="" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
      <ul className={styles.list}>
        <li>
          <input type="checkbox" />
          <span>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer. Integer urna interdum massa
            libero auctor neque turpis turpis semper. Duis vel sed fames
            integer. Integer urna interdum massa libero auctor neque turpis
            turpis semper. Duis vel sed fames integer.
          </span>
          <button>
            <Trash size={14} weight="bold" />
          </button>
        </li>
        <li>
          <input type="checkbox" />
          <span>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </span>
          <button>
            <Trash size={14} weight="bold" />
          </button>
        </li>
      </ul>
    </main>
  )
}
