import styles from "./Login.module.scss"

import { Tab, Tabs } from "react-bootstrap"

export default function Login() {
  return (
    <>
      <div className={styles.login}>
        <div className="container">
          <div className={styles.login_body}>
            <div className="login-background">
              <Tabs defaultActiveKey="admin" justify>
                <Tab eventKey="admin" title="Admin Login">
                  <form>
                    <div className="form__group">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Username"
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className={styles.forgot + " form__group row"}>
                      <div className="col-md-6">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                      </div>
                      <div className="col-md-6 d-flex justify-content-end">
                        <a href="#">Forgot password</a>
                      </div>
                    </div>
                    <button className="btn btn-success">Submit</button>
                  </form>
                </Tab>
                <Tab eventKey="pmo" title="PMO Login">
                  <form>
                    <div className="form__group">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Username"
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className={styles.forgot + " form__group row"}>
                      <div className="col-md-6">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                      </div>
                      <div className="col-md-6 d-flex justify-content-end">
                        <a href="#">Forgot password</a>
                      </div>
                    </div>
                    <button className="btn btn-success">Submit</button>
                  </form>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <style type="text/css">
        {`
           .nav-tabs{
            padding-bottom: 0;
            margin-bottom: 0;
            border: none;
           }

           .nav-link{
            color: #fff;
            position: relative;
           }

           .nav-link:hover{
            border: none;
            color: #fff;
           }
           
           .nav-tabs .active{
            background-color: rgba(255,255,255, 0.25) !important;
            backdrop-filter: blur(10rem);
            border-radius: 1rem;
            border: none;
            color: #fff !important;
           }
        `}
      </style>
    </>
  )
}
