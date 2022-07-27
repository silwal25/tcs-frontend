import styles from "./Topbar.module.scss"
import Link from "next/link"

export default function Topbar({ heading }) {
  return (
    <div className={styles.top_bar}>
      <div className={styles.heading}>
        <h1 className="heading__primary">{heading}</h1>
      </div>
      <Link href="/dashboard/new">
        <a>+ New Project</a>
      </Link>
    </div>
  )
}
