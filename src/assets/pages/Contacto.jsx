import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contacto() {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            // Configuración de EmailJS
            // IMPORTANTE: Reemplaza estos valores con los tuyos de EmailJS
            const result = await emailjs.sendForm(
                'YOUR_SERVICE_ID',      // Reemplazar con tu Service ID
                'YOUR_TEMPLATE_ID',     // Reemplazar con tu Template ID
                formRef.current,
                'YOUR_PUBLIC_KEY'       // Reemplazar con tu Public Key
            )

            if (result.text === 'OK') {
                setStatus({
                    type: 'success',
                    message: '¡Mensaje enviado exitosamente! Te responderemos pronto.'
                })
                formRef.current.reset()
            }
        } catch (error) {
            console.error('Error al enviar el mensaje:', error)
            setStatus({
                type: 'error',
                message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente más tarde.'
            })
        } finally {
            setLoading(false)
        }
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
                                <span className="text-gray-900 font-medium">Contacto</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Contacto
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        ¿Tienes alguna pregunta sobre nuestros productos 3D? ¿Necesitas un diseño personalizado?
                        Estamos aquí para ayudarte.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Información de contacto */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">📧</span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                    <p className="text-gray-600">info@alto3dtienda.com</p>
                                    <p className="text-gray-600">ventas@alto3dtienda.com</p>
                                </div>
                            </div>


                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">🕒</span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Horarios de Atención</h3>
                                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                                    <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                                    <p className="text-gray-600">Domingos: Cerrado</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">🚚</span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Envíos</h3>
                                    <p className="text-gray-600">Realizamos envíos a todo Chile</p>
                                    <p className="text-gray-600">Tiempo de entrega: 3-5 días hábiles</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>

                        {/* Mensajes de estado */}
                        {status.message && (
                            <div className={`mb-6 p-4 rounded-lg ${status.type === 'success'
                                ? 'bg-green-50 text-green-800 border border-green-200'
                                : 'bg-red-50 text-red-800 border border-red-200'
                                }`}>
                                {status.message}
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Tu nombre completo"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">
                                    Asunto
                                </label>
                                <select
                                    id="asunto"
                                    name="asunto"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option>Consulta sobre producto</option>
                                    <option>Diseño personalizado</option>
                                    <option>Información de envío</option>
                                    <option>Problema con pedido</option>
                                    <option>Otro</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                                    Mensaje
                                </label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Cuéntanos en qué podemos ayudarte..."
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Enviando...' : 'Enviar Mensaje'}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

                {/* Sección de preguntas frecuentes */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Preguntas Frecuentes</h2>

                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                ¿Cuánto tiempo toma imprimir un producto?
                            </h3>
                            <p className="text-gray-600">
                                El tiempo de impresión varía según el tamaño y complejidad del producto.
                                Generalmente toma entre 2-4 horas por pieza, más el tiempo de post-procesamiento.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                ¿Pueden hacer diseños personalizados?
                            </h3>
                            <p className="text-gray-600">
                                ¡Absolutamente! Nos especializamos en diseños personalizados.
                                Solo necesitamos que nos compartas tus ideas y nosotros nos encargamos del resto.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                ¿Qué materiales utilizan?
                            </h3>
                            <p className="text-gray-600">
                                Utilizamos principalmente PLA Premium, que es un material biodegradable,
                                no tóxico y de alta calidad. También trabajamos con otros materiales según las necesidades específicas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}