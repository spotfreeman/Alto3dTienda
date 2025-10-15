import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// Configuración de EmailJS por variables de entorno (Vite expone las que inician con VITE_)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contacto() {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            // Validación de configuración
            if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
                setStatus({
                    type: 'error',
                    message: 'Configuración de EmailJS faltante. Define VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID y VITE_EMAILJS_PUBLIC_KEY.',
                })
                return
            }

            const result = await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
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
                message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos por WhatsApp.'
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
                                        <span className="text-white text-sm">📱</span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                                    <p className="text-gray-600">+56 9 XXXX XXXX</p>
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
                                required
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
                                required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                                    Teléfono (opcional)
                                </label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="+56 9 XXXX XXXX"
                                />
                            </div>

                            <div>
                                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">
                                    Asunto
                                </label>
                            <select
                                    id="asunto"
                                    name="asunto"
                                required
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
                                    required
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

                            {/* Botón de WhatsApp alternativo */}
                            <div className="text-center">
                                <p className="text-sm text-gray-500 mb-2">O contáctanos directamente:</p>
                                <a
                                    href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20productos%203D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 border border-green-500 rounded-md text-green-600 hover:bg-green-50 transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Chatear por WhatsApp
                                </a>
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