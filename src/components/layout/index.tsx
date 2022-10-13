import { ReactNode } from 'react'
import './styles.css'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <div className="layout-header__container">
          <div className="layout-header__animationOut" />
          <div className="layout-header__animationIn" />
          <h1 className="layout-header__title">Proyectos Level Up</h1>
        </div>
        <div className="layout-header__menu">
          <button className="layout-header__menuItem">Test</button>
          <button className="layout-header__menuItem">Test</button>
        </div>
      </header>
      <div className="layout-divider" />
      <main className="layout-page">{children}</main>
    </div>
  )
}

export default Layout
