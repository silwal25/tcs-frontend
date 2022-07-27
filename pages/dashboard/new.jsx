import styles from "../../styles/pages/New.module.scss"

import Link from "next/link"

function New() {
  return (
    <div className={styles.new}>
      <div className="top_bar">
        <div className="heading">
          <h1 className="heading__primary">Dashboard</h1>
        </div>
        <Link href="/dashboard/new">
          <a>+ New Project</a>
        </Link>
      </div>
      <form className={styles.form + " form"}>
        <div className="form__group">
          <input type="text" name="name" id="name" placeholder="Project Name" />
        </div>
        <div className="form__group">
          <textarea
            name="description"
            id="description"
            placeholder="Project description"
            rows="10"
          ></textarea>
        </div>
        <div className="form__group">
          <textarea
            name="statement"
            id="statement"
            placeholder="Project statement"
            rows="5"
          ></textarea>
        </div>
        <div className="form__group row p-0 m-0">
          <div className="col-md-6 p-0 m-0">
            <input type="date" name="start" id="start" />
          </div>
          <div className="col-md-6">
            <input type="date" name="end" id="end" />
          </div>
        </div>
        <div className="form__group">
          <input type="number" name="budget" id="budget" placeholder="Allocated budget" />
        </div>
        <button className="btn btn-success">Create</button>
      </form>
    </div>
  )
}

New.layout = "dash"

export default New
