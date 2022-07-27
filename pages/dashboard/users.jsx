import styles from "../../styles/pages/Users.module.scss"

import Topbar from "../../components/TopBar/Topbar"

const Users = () => {
  return (
    <div className={styles.topbar}>
      <Topbar heading="Users" />
    </div>
  )
}

Users.layout = "dash"

export default Users
