import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

// Importa tus componentes usando lazy loading
const Storefront = lazy(() => import('./assets/pages/Storefront'))
const ProductDetail = lazy(() => import('./assets/pages/ProductDetail.jsx'))
const CategoryPage = lazy(() => import('./assets/pages/CategoryPage.jsx'))
const Contacto = lazy(() => import('./assets/pages/Contacto.jsx'))
const Equipo = lazy(() => import('./assets/pages/Equipo.jsx'))

import { productos } from './data/products'

// Componente de carga simple
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
)

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
    </Router>
  )
}
