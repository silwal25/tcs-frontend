import styles from "../styles/Home.module.scss"

import Login from "../components/Login/Login"
import { useState } from "react"
import Register from "../components/Register/Register"

function Home() {
  const [currentView, setView] = useState("login")
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_body + " container"}>
          <div className={styles.logo}>Project Management</div>
          <nav className={styles.navigation}>
            <ul>
              <li onClick={() => setView("login")}>Login</li>
              <li onClick={() => setView("register")}>Register</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={styles.home}>{currentView == "login" ? <Login /> : <Register />}</div>
    </>
  )
}

Home.layout = "login"

export default Home
