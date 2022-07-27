import styles from "../../styles/pages/Dashboard.module.scss"
import Link from "next/link"

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className="top_bar">
        <div className="heading">
          <h1 className="heading__primary">Dashboard</h1>
        </div>
        <Link href="/dashboard/new">
          <a>+ New Project</a>
        </Link>
      </div>
      <div className={styles.project_info}>
        <div>
          <p>Active Projects: </p>
          <p>10</p>
        </div>
        <div>
          <p>Active Tasks: </p>
          <p>56</p>
        </div>
        <div>
          <p>Projects Completed: </p>
          <p>20</p>
        </div>
      </div>
    </div>
  )
}

Dashboard.layout = "dash"

export default Dashboard
