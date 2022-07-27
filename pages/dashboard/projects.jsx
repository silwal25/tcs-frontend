import styles from "../../styles/pages/Projects.module.scss"

import Topbar from "../../components/TopBar/Topbar"

const Projects = () => {
  return (
    <div className={styles.projects}>
      <Topbar heading="projects" />
    </div>
  )
}

Projects.layout = "dash"

export default Projects
