import Post from "./Post"
import './global.css'
import Header from "./components/header/Header"
import styles from "./App.module.css"
import Sidebar from "./components/sidebar/Sidebar"

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>

      </div>
    </>
  )
}

export default App
