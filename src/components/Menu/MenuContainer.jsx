import { Outlet } from 'react-router-dom'
import Menu from './Menu.jsx'
import './Menu.css'
const MenuContainer = () => {
  return (
    <div className='menuContainer_containerAll'>
      <div className="menuContainer_container">
      <Menu/>
      <Outlet/>
      </div>
    </div>
)
}

export default MenuContainer