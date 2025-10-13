import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importa tus componentes
import Storefront from './assets/pages/Storefront'
import ProductDetail from './assets/pages/ProductDetail.jsx'
import CategoryPage from './assets/pages/CategoryPage.jsx'
import Contacto from './assets/pages/Contacto.jsx'
import Equipo from './assets/pages/Equipo.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

// Importa los datos de productos
import { productos } from './data/products'

export default function App() {
  return (
    <Router>
      {/* Botón flotante de WhatsApp visible en todas las páginas */}
      <WhatsAppButton />

      <Routes>
        {/* Landing page principal - Storefront como página de inicio */}
        <Route path="/" element={<Storefront />} />

        {/* Página de categorías con filtros */}
        <Route path="/categoria/:category" element={<CategoryPage />} />

        {/* Detalle de producto individual */}
        <Route path="/producto/:id" element={<ProductDetail products={productos} />} />

        {/* Páginas adicionales */}
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/equipo" element={<Equipo />} />
      </Routes>
    </Router>
  )
}
