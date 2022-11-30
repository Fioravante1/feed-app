import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=40" alt=""
      />


      <div className={styles.profile}>

        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/65950591?v=4"
          alt="Foto de perfil do usuario"
        />

        <strong>Fioravante Chiozzi</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}
