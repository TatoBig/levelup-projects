import Layout from '@components/layout'
import { Fragment } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Outlet />
      </Layout>
      <ScrollRestoration />
    </Fragment>
  )
}

export default App
