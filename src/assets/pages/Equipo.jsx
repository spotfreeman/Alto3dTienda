import { Link } from 'react-router-dom'

export default function Equipo() {
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
                                <span className="text-gray-900 font-medium">Equipo</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Nuestro Equipo
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Conoce a las personas detrás de Alto3D Tienda. Un equipo apasionado por la innovación
                        y la creación de productos únicos impresos en 3D.
                    </p>
                </div>

                {/* Historia de la empresa */}
                <div className="mt-16">
                    <div className="bg-gray-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Alto3D Tienda nació de la pasión por la tecnología de impresión 3D y el deseo de crear
                            productos únicos y funcionales. Comenzamos como un pequeño proyecto personal y hemos
                            crecido hasta convertirnos en una referencia en productos 3D personalizados en Chile.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Nuestro enfoque se centra en la calidad, la innovación y la satisfacción del cliente.
                            Cada producto que creamos pasa por un riguroso proceso de diseño, impresión y acabado
                            para garantizar la máxima calidad.
                        </p>
                    </div>
                </div>

                {/* Equipo */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Conoce a Nuestro Equipo</h2>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Miembro 1 */}
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-4xl text-gray-600">👨‍💻</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Raúl Oyarzún</h3>
                            <p className="text-indigo-600 font-medium">Fundador & Diseñador 3D</p>
                            <p className="text-gray-600 mt-2 text-sm">
                                Especialista en diseño 3D y tecnología de impresión.
                                Con más de 5 años de experiencia en el campo.
                            </p>
                        </div>

                        {/* Miembro 2 */}
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-4xl text-gray-600">🎨</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Diseñadora</h3>
                            <p className="text-indigo-600 font-medium">Especialista en Productos Sensoriales</p>
                            <p className="text-gray-600 mt-2 text-sm">
                                Encargada de desarrollar productos enfocados en bienestar
                                y estimulación sensorial.
                            </p>
                        </div>

                        {/* Miembro 3 */}
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-4xl text-gray-600">🔧</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Técnico</h3>
                            <p className="text-indigo-600 font-medium">Especialista en Impresión</p>
                            <p className="text-gray-600 mt-2 text-sm">
                                Responsable del mantenimiento de equipos y optimización
                                de procesos de impresión.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Valores */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Nuestros Valores</h2>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">⭐</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Calidad</h3>
                            <p className="text-gray-600 text-sm">
                                Cada producto es cuidadosamente revisado para garantizar la máxima calidad.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">💡</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovación</h3>
                            <p className="text-gray-600 text-sm">
                                Siempre buscamos nuevas formas de mejorar nuestros productos y procesos.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Servicio</h3>
                            <p className="text-gray-600 text-sm">
                                La satisfacción de nuestros clientes es nuestra prioridad número uno.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">🌱</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sostenibilidad</h3>
                            <p className="text-gray-600 text-sm">
                                Utilizamos materiales biodegradables y procesos responsables con el medio ambiente.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tecnología */}
                <div className="mt-16">
                    <div className="bg-gray-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Tecnología</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Impresoras 3D</h3>
                                <p className="text-gray-600 text-sm">
                                    Utilizamos impresoras de última generación para garantizar
                                    precisión y calidad en cada impresión.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Software de Diseño</h3>
                                <p className="text-gray-600 text-sm">
                                    Empleamos software profesional de modelado 3D para crear
                                    diseños únicos y personalizados.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Materiales Premium</h3>
                                <p className="text-gray-600 text-sm">
                                    Trabajamos exclusivamente con materiales de alta calidad
                                    y biodegradables.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

