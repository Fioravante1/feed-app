import styles from './Header.module.css'
import feedLogo from '../../assets/feed-logo.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={feedLogo} alt="Logo do app feed" />
      <h1>Feed</h1>
    </header>
  )
}
