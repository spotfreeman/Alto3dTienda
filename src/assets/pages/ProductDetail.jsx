import { useParams, Link } from "react-router-dom";

export default function ProductDetail({ products }) {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
                    <Link
                        to="/"
                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                    >
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        );
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
                                <span className="text-gray-900 font-medium">{product.name}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* Galería de imágenes */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="aspect-square overflow-hidden rounded-lg">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Detalles del producto */}
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            {product.name}
                        </h1>

                        <div className="mt-6">
                            <h3 className="sr-only">Descripción</h3>
                            <div className="space-y-6 text-base text-gray-700">
                                <p>
                                    Producto impreso en 3D de alta calidad, diseñado para ofrecer durabilidad y estética excepcionales.
                                    Cada pieza es cuidadosamente creada con atención al detalle.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-sm font-medium text-gray-900">Características</h3>
                            <div className="mt-4">
                                <ul className="list-disc pl-4 space-y-2 text-sm text-gray-700">
                                    <li><strong>Categoría:</strong> {product.categoria}</li>
                                    <li><strong>Colores disponibles:</strong> {product.color}</li>
                                    <li><strong>Dimensiones:</strong> {product.size}</li>
                                    <li><strong>Material:</strong> PLA Premium</li>
                                    <li><strong>Acabado:</strong> Liso y pulido</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="flex items-baseline">
                                <p className="text-3xl font-bold tracking-tight text-gray-900">
                                    {product.price}
                                </p>
                                <p className="ml-2 text-sm text-gray-500">CLP</p>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                                Precio incluye impresión 3D personalizada
                            </p>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <button
                                type="button"
                                className="flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                            >
                                Agregar al carrito
                            </button>
                            <button
                                type="button"
                                className="flex-1 bg-white border border-gray-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                            >
                                Contactar
                            </button>
                        </div>

                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <h3 className="text-sm font-medium text-gray-900">Información adicional</h3>
                            <div className="mt-4 text-sm text-gray-500">
                                <p>
                                    Todos nuestros productos son impresos bajo pedido. El tiempo de entrega es de 3-5 días hábiles.
                                    Para pedidos personalizados, contacta con nosotros para discutir los detalles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}