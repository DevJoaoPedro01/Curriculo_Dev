import './styles.global.css'
import { Header } from './Components/Header.jsx'
import { Sidebar } from './Components/Sidebar.jsx'
import { Post } from './Components/Post.jsx'
import style from './App.module.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />

        <main>
          <Post />
        </main>

      </div>
    </div>
  )
}