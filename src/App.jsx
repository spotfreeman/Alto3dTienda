import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importación perezosa de páginas
const Home = lazy(() => import('./assets/pages/Home.jsx'))
const ProductDetail = lazy(() => import('./assets/pages/ProductDetail.jsx'))
// const Contacto = lazy(() => import('./assets/pages/Contacto.jsx'))

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="p-6 text-center">Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
