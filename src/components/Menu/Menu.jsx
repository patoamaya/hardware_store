import './Menu.css'
const Menu = () => {
  return (
    <div className='menu_container'>
      <ul>
      <li><a href="/newProduct"><button>Nuevo</button></a></li>
        <li><a href="/">Inicio</a></li>
        <li><a href="/products">Productos</a></li>
        <li><a href="/receipts">Recibos</a></li>
        <li><a href="/stats">Estadísticas</a></li>
        <li><a href="/suppliers">Proveedores</a></li>
      </ul>
    </div>
  )
}

export default Menu