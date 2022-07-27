import styles from "./DashLayout.module.scss"

import Link from "next/link"

export default function DashLayout({ children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <ul>
          <Link href="/dashboard">
            <li>
              <img src="/assets/avatar.jpg" alt="avatar" />
            </li>
          </Link>
          <li>
            <Link href="/dashboard/projects">
              <span class="icon-files"></span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/users">
              <span class="icon-users"></span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings">
              <span class="icon-cog"></span>
            </Link>
          </li>
          <li>
            <span class="icon-exit"></span>
          </li>
        </ul>
        <div className={styles.logout}></div>
      </nav>
      <main className={styles.main_content}>
        <div className={styles.main}>{children}</div>
        <div className={styles.sidebar}>asdasd</div>
      </main>
    </div>
  )
}
