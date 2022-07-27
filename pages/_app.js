import "bootstrap/dist/css/bootstrap.css"
import "../public/assets/icomoon/style.css"
import "../styles/globals.scss"

import Login from "../components/Layout/Login"
import DashLayout from "../components/Layout/Dashboard/DashLayout"

const layouts = {
  dash: DashLayout,
  login: Login
}

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
