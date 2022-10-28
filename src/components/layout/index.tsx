import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate()

  return (
    <div className="layout-container">
      <header className="layout-header">
        <div className="layout-header__container" onClick={() => navigate('/')}>
          <div className="layout-header__animationOut" />
          <div className="layout-header__animationIn" />
          <h1 className="layout-header__title">Proyectos Level Up</h1>
        </div>
        <div className="layout-header__menu">
          <div className="layout-header__label">Proyectos</div>
          <div className="layout-header__itemContainer">
            <button
              className="layout-header__menuItem"
              onClick={() => navigate('/one')}
            >
              1
            </button>
            <button
              className="layout-header__menuItem"
              onClick={() => navigate('/two')}
            >
              2
            </button>
            <button
              className="layout-header__menuItem"
              onClick={() => navigate('/three')}
            >
              3
            </button>
            <button
              className="layout-header__menuItem"
              onClick={() => navigate('/four')}
            >
              4
            </button>
          </div>
        </div>
      </header>
      <div className="layout-divider" />
      <main className="layout-page">{children}</main>
      <footer className="layout-footer">
        <a href="https://github.com/TatoBig">Por Santiago Navas 2022</a>
      </footer>
    </div>
  )
}

export default Layout
