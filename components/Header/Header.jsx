import styles from "./Header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_body + " container"}>
        <div className={styles.logo}>Project Management</div>
        <nav className={styles.navigation}>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
