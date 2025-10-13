import { useParams, Link } from 'react-router-dom'
import { productos } from '../../data/products'

export default function CategoryPage() {
    const { category } = useParams()

    // Mapeo de categorías de URL a categorías de productos
    const categoryMap = {
        'figuras-decorativas': 'Figuras Decorativas',
        'productos-sensoriales': 'Sensorial',
        'accesorios': 'Accesorios',
        'focus-concentracion': 'Focus',
        'tacto-texturas': 'Tacto',
        'decoracion': 'Decoración',
        'figuras': 'Figuras'
    }

    const categoryName = categoryMap[category] || category
    const filteredProducts = productos.filter(producto =>
        producto.categoria === categoryName
    )

    // Si no hay productos para esta categoría, mostrar todos
    const displayProducts = filteredProducts.length > 0 ? filteredProducts : productos

    const getCategoryTitle = (category) => {
        const titles = {
            'figuras-decorativas': 'Figuras Decorativas',
            'productos-sensoriales': 'Productos Sensoriales',
            'accesorios': 'Accesorios',
            'focus-concentracion': 'Focus y Concentración',
            'tacto-texturas': 'Tacto y Texturas',
            'decoracion': 'Decoración',
            'figuras': 'Figuras'
        }
        return titles[category] || 'Categoría'
    }

    return (
        <div className="bg-white">
            {/* Breadcrumb */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-4">
                        <li>
                            <Link to="/" className="text-gray-400 hover:text-gray-500">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <span className="text-gray-400 mx-2">/</span>
                                <span className="text-gray-900 font-medium">
                                    {getCategoryTitle(category)}
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                {/* Header de la categoría */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        {getCategoryTitle(category)}
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        {filteredProducts.length > 0
                            ? `Encuentra ${filteredProducts.length} productos únicos en esta categoría`
                            : 'Explora todos nuestros productos impresos en 3D'
                        }
                    </p>
                </div>

                {/* Filtros de categorías */}
                <div className="mb-8">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Filtrar por categoría:</h2>
                    <div className="flex flex-wrap gap-2">
                        <Link
                            to="/categoria/todos"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === 'todos'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Todos los productos
                        </Link>
                        <Link
                            to="/categoria/figuras-decorativas"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === 'figuras-decorativas'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Figuras Decorativas
                        </Link>
                        <Link
                            to="/categoria/productos-sensoriales"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === 'productos-sensoriales'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Productos Sensoriales
                        </Link>
                        <Link
                            to="/categoria/accesorios"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === 'accesorios'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Accesorios
                        </Link>
                        <Link
                            to="/categoria/focus-concentracion"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === 'focus-concentracion'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Focus y Concentración
                        </Link>
                        <Link
                            to="/categoria/tacto-texturas"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === 'tacto-texturas'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Tacto y Texturas
                        </Link>
                        <Link
                            to="/categoria/decoracion"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === 'decoracion'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Decoración
                        </Link>
                        <Link
                            to="/categoria/figuras"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === 'figuras'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Figuras
                        </Link>
                    </div>
                </div>

                {/* Grid de productos */}
                {displayProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {displayProducts.map(producto => (
                            <Link
                                key={producto.id}
                                to={producto.href}
                                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={producto.imageSrc}
                                        alt={producto.imageAlt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                        {producto.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">{producto.categoria}</p>
                                    <p className="text-sm text-gray-600 mt-1">Colores: {producto.color}</p>
                                    <p className="text-lg font-bold text-indigo-600 mt-2">{producto.price}</p>
                                    <p className="text-xs text-gray-400 mt-1">Tamaño: {producto.size}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            No se encontraron productos en esta categoría
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Pronto agregaremos más productos a esta categoría.
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                        >
                            Ver todos los productos
                        </Link>
                    </div>
                )}

                {/* Información adicional */}
                {filteredProducts.length > 0 && (
                    <div className="mt-16 bg-gray-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Sobre {getCategoryTitle(category)}
                        </h2>
                        <div className="prose text-gray-600">
                            {category === 'figuras-decorativas' && (
                                <p>
                                    Nuestras figuras decorativas están diseñadas para añadir un toque único a cualquier espacio.
                                    Cada pieza es cuidadosamente impresa en 3D con materiales de alta calidad, garantizando
                                    durabilidad y belleza estética.
                                </p>
                            )}
                            {category === 'productos-sensoriales' && (
                                <p>
                                    Los productos sensoriales están diseñados para estimular los sentidos y proporcionar
                                    experiencias táctiles relajantes. Perfectos para reducir el estrés y mejorar el bienestar.
                                </p>
                            )}
                            {category === 'accesorios' && (
                                <p>
                                    Accesorios funcionales y estéticos impresos en 3D. Desde posavasos hasta organizadores,
                                    cada accesorio combina utilidad con diseño único.
                                </p>
                            )}
                            {category === 'focus-concentracion' && (
                                <p>
                                    Productos diseñados para mejorar la concentración y el enfoque. Ideales para estudios,
                                    trabajo o momentos que requieren atención sostenida.
                                </p>
                            )}
                            {category === 'tacto-texturas' && (
                                <p>
                                    Explora diferentes texturas y sensaciones táctiles. Estos productos están diseñados
                                    para proporcionar experiencias sensoriales únicas y relajantes.
                                </p>
                            )}
                            {category === 'decoracion' && (
                                <p>
                                    Elementos decorativos que transforman cualquier espacio. Cada pieza está creada
                                    para ser tanto funcional como estéticamente atractiva.
                                </p>
                            )}
                            {category === 'figuras' && (
                                <p>
                                    Colección de figuras temáticas impresas en 3D. Desde personajes hasta objetos
                                    decorativos, cada figura cuenta una historia única.
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

