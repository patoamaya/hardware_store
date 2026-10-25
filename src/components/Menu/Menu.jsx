import './Menu.css'
const Menu = () => {
  return (
    <div className='menu_container'>
      <button>Nuevo</button>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Recibos</li>
        <li>Estadísticas</li>
        <li>Proveedores</li>
      </ul>
    </div>
  )
}

export default Menu