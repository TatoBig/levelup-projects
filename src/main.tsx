import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@pages/App'
import Layout from '@components/layout'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
)
