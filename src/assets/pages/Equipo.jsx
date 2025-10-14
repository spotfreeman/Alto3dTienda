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
                        Conoce al creador detrás de Alto3D Tienda. Un emprendedor multidisciplinario que combina
                        fabricación digital, diseño 3D y desarrollo tecnológico para crear productos únicos.
                    </p>
                </div>

                {/* Historia de la empresa */}
                <div className="mt-16">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Alto3D Tienda es un emprendimiento que combina tecnología, diseño y fabricación digital.
                            Nació de la pasión por crear productos únicos utilizando las últimas tecnologías de
                            manufactura digital: <strong>impresión 3D, corte láser CNC y diseño digital</strong>.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Como desarrollador fullstack y maker, integro conocimientos de programación, diseño 3D
                            y fabricación digital para ofrecer soluciones completas: desde la idea hasta el producto
                            físico en tus manos. Cada pieza es diseñada y fabricada con atención al detalle y
                            compromiso con la calidad.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            <strong>¿Por qué Alto3D?</strong> Porque creemos que la tecnología debe estar al servicio
                            de la creatividad, y que cada persona merece productos únicos que cuenten su historia.
                        </p>
                    </div>
                </div>

                {/* Fundador y Roles */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">El Creador</h2>

                    {/* Perfil principal destacado */}
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-8">
                                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-6xl">🚀</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                                    Fundador & Multi-disciplinario
                                </div>
                                <h3 className="mt-2 text-2xl font-bold text-gray-900">Raúl Oyarzún Becerra</h3>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    Desarrollador fullstack, maker y emprendedor tecnológico. Combino programación,
                                    diseño 3D y fabricación digital para crear productos únicos desde cero.
                                </p>
                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    Del concepto digital al producto físico, manejo todo el proceso: desde el código
                                    de esta web hasta la impresión 3D del producto que llega a tus manos.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mis Roles y Habilidades */}
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Mis Roles en Alto3D</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Rol 1 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-3xl">🖨️</span>
                            </div>
                            <h4 className="text-center font-semibold text-gray-900 mb-2">Fabricación 3D</h4>
                            <p className="text-sm text-gray-600 text-center">
                                Impresión 3D profesional con múltiples materiales y acabados de alta calidad
                            </p>
                        </div>

                        {/* Rol 2 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h4 className="text-center font-semibold text-gray-900 mb-2">Corte Láser CNC</h4>
                            <p className="text-sm text-gray-600 text-center">
                                Grabado y corte de precisión en diversos materiales con tecnología CNC láser
                            </p>
                        </div>

                        {/* Rol 3 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-3xl">🎨</span>
                            </div>
                            <h4 className="text-center font-semibold text-gray-900 mb-2">Diseño 3D</h4>
                            <p className="text-sm text-gray-600 text-center">
                                Modelado 3D personalizado y adaptación de diseños según necesidades del cliente
                            </p>
                        </div>

                        {/* Rol 4 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-3xl">💻</span>
                            </div>
                            <h4 className="text-center font-semibold text-gray-900 mb-2">Desarrollo Web</h4>
                            <p className="text-sm text-gray-600 text-center">
                                Desarrollo fullstack para crear experiencias digitales completas e integradas
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

                {/* Stack Tecnológico */}
                <div className="mt-16">
                    <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Stack Tecnológico</h2>
                        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                            Herramientas y tecnologías que uso para crear productos físicos y digitales de alta calidad
                        </p>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Hardware - Impresión 3D */}
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">🖨️</span>
                                    <h3 className="text-lg font-semibold text-gray-900">Impresión 3D</h3>
                                </div>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Impresoras FDM profesionales</li>
                                    <li>• Múltiples materiales (PLA, PETG, TPU)</li>
                                    <li>• Acabados de alta calidad</li>
                                </ul>
                            </div>

                            {/* Hardware - CNC Láser */}
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">⚡</span>
                                    <h3 className="text-lg font-semibold text-gray-900">CNC Láser</h3>
                                </div>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Corte y grabado de precisión</li>
                                    <li>• Madera, acrílico, cartón</li>
                                    <li>• Diseños personalizados</li>
                                </ul>
                            </div>

                            {/* Software - Diseño 3D */}
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">🎨</span>
                                    <h3 className="text-lg font-semibold text-gray-900">Diseño 3D</h3>
                                </div>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Modelado CAD profesional</li>
                                    <li>• Software de slicing avanzado</li>
                                    <li>• Optimización para impresión</li>
                                </ul>
                            </div>

                            {/* Software - Desarrollo Web */}
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">💻</span>
                                    <h3 className="text-lg font-semibold text-gray-900">Desarrollo Web</h3>
                                </div>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• React, Vite, TailwindCSS</li>
                                    <li>• Node.js, bases de datos</li>
                                    <li>• Desarrollo fullstack completo</li>
                                </ul>
                            </div>

                            {/* Software - Unity */}
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">🎮</span>
                                    <h3 className="text-lg font-semibold text-gray-900">Unity 3D</h3>
                                </div>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Visualización 3D interactiva</li>
                                    <li>• Simulaciones de productos</li>
                                    <li>• Experiencias inmersivas</li>
                                </ul>
                            </div>

                            {/* Materiales */}
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">🌱</span>
                                    <h3 className="text-lg font-semibold text-gray-900">Materiales</h3>
                                </div>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• PLA biodegradable premium</li>
                                    <li>• Maderas y acrílicos</li>
                                    <li>• Filamentos especiales</li>
                                </ul>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-8 text-center bg-indigo-600 rounded-lg p-6">
                            <h3 className="text-white text-xl font-bold mb-2">
                                ¿Tienes un proyecto en mente?
                            </h3>
                            <p className="text-indigo-100 mb-4">
                                Ya sea un producto físico 3D, una experiencia web o una combinación de ambos
                            </p>
                            <Link
                                to="/contacto"
                                className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                            >
                                Conversemos sobre tu proyecto
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

