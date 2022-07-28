import styles from "./DashLayout.module.scss"

import Link from "next/link"
import { Calendar } from "react-calendar"

import CalEvents from "../../CalEvents/CalEvents"

export default function DashLayout({ children }) {
  return (
    <>
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
          <div className={styles.sidebar}>
            <div className={styles.calendar}>
              <h2 className="heading__secondary">August</h2>
              <div className={styles.calendar_cal}>
                <Calendar />
              </div>
            </div>
            <div className={styles.notifications}>
              <h2 className="heading__secondary">Upcoming Events</h2>
            </div>
            <div className={styles.events}>
              <CalEvents />
              <CalEvents />
              <CalEvents />
            </div>
          </div>
        </main>
      </div>

      <style type="text/css">
        {`
          .react-calendar__navigation{
            display: none;
          }
          .react-calendar__month-view__weekdays{
            font-weight: 700;
            text-decoration: none !important;
            color: rgba(100,100,100);
            opacity: 0.8;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .react-calendar__tile{
            border: none;
            padding: 1rem;
            background-color: transparent;
            border-radius: 50%;
            font-weight: 700;
            color: rgba(100,100,100);
          }
          .react-calendar__month-view__weekdays__weekday{
            
            flex-basis: 1 !important;
          }
        `}
      </style>
    </>
  )
}
