import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeContainer from './components/Home/HomeContainer'
import MenuContainer from './components/Menu/MenuContainer'
import NewProductContainer from './components/NewProduct/NewProductContainer'
import ProductsContainer from './components/Products/ProductsContainer'
import ReceiptsContainer from './components/Receipts/ReceiptsContainer'
import StatsContainer from './components/Stats/StatsContainer'
import SuppliersContainer from './components/Suppliers/SuppliersContainer'

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MenuContainer/>}>
            <Route path='/' element={<HomeContainer/>} />
            <Route path='/newProduct' element={<NewProductContainer/>} />
            <Route path='/products' element={<ProductsContainer/>} />
            <Route path='/receipts' element={<ReceiptsContainer/>} />
            <Route path='/stats' element={<StatsContainer/>} />
            <Route path='/suppliers' element={<SuppliersContainer/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// https://dribbble.com/shots/14389773-Task-Management-Dashboard?utm_source=Pinterest&utm_medium=organic