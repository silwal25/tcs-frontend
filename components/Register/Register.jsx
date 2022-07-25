import styles from "./Register.module.scss"

import { Tab, Tabs } from "react-bootstrap"

export default function Register() {
  return (
    <>
      <div className={styles.register}>
        <div className={styles.login_body}>
          <div className="login-background">
            <Tabs defaultActiveKey="admin" justify>
              <Tab eventKey="admin" title="Admin Login">
                <form>
                  <div className="form__group">
                    <input type="text" name="username" id="username" placeholder="Username" />
                  </div>
                  <div className="form__group">
                    <input type="email" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="form__group row">
                    <div className="col-md-6">
                      <input type="text" name="password" id="password" placeholder="Password" />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="cpassword"
                        id="cpassword"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>
                  <div className="form__group row">
                    <div className="col-md-6">
                      <select name="q1" id="q1">
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="a1" id="a1" placeholder="Answer" />
                    </div>
                  </div>
                  <div className="form__group row">
                    <div className="col-md-6">
                      <select name="q2" id="q2">
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="a2" id="a2" placeholder="Answer" />
                    </div>
                  </div>
                  <div className="form__group row">
                    <div className="col-md-6">
                      <select name="q3" id="q3">
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="a3" id="a3" placeholder="Answer" />
                    </div>
                  </div>
                  <button className="btn btn-success">Submit</button>
                </form>
              </Tab>
              <Tab eventKey="pmo" title="PMO Login">
                <form>
                  <div className="form__group">
                    <input type="text" name="username" id="username" placeholder="Username" />
                  </div>
                  <div className="form__group">
                    <input type="email" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="form__group row">
                    <div className="col-md-6">
                      <input type="text" name="password" id="password" placeholder="Password" />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="cpassword"
                        id="cpassword"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>
                  <div className="form__group row">
                    <div className="col-md-6">
                      <select name="q1" id="q1">
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="a1" id="a1" placeholder="Answer" />
                    </div>
                  </div>
                  <div className="form__group row">
                    <div className="col-md-6">
                      <select name="q2" id="q2">
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="a2" id="a2" placeholder="Answer" />
                    </div>
                  </div>
                  <div className="form__group row">
                    <div className="col-md-6">
                      <select name="q3" id="q3">
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                        <option value="">what is</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="a3" id="a3" placeholder="Answer" />
                    </div>
                  </div>
                  <button className="btn btn-success">Submit</button>
                </form>
              </Tab>
            </Tabs>
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
