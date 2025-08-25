import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importa tus componentes independientes aquí
// import Header from './components/Header'
// import Footer from './components/Footer'
import Home from './assets/pages/Home.jsx'
import ProductDetail from './assets/pages/ProductDetail.jsx'
// import Contacto from './assets/pages/Contacto.jsx'

import Storefront from './assets/pages/Storefront'

import Products from './assets/pages/Product.jsx'

export default function App() {
  return (
    <Router>

      <Storefront />
      <Products />

      {/* Define tus rutas aquí */}
      {/* <Header /> */}
      {/* <Footer /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}
