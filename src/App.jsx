import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AdminContext } from './context/AdminContext.jsx'
import Header from './components/layout/Header.jsx'
import Nav from './components/layout/Nav.jsx'
import Footer from './components/layout/Footer.jsx'
import './css/App.css'

const App = () => {
  const { admin } = useContext(AdminContext);

  return (
    <>
      {admin && (
        <div className="topbar-cyber">
          <Nav />
          <Header />
        </div>
      )}
      <Outlet />
      {admin && <Footer />}
    </>
  )
}

export default App
