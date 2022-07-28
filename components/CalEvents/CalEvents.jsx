import styles from "./CalEvents.module.scss"

export default function CalEvents() {
  return (
    <div className={styles.cal_events}>
      <div className={styles.time}>Today, 12:30 am </div>
      <div className={styles.body}>
        Project discussion with john doe and then after party with your friends
      </div>
    </div>
  )
}
