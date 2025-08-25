'use client'

import { Fragment, useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'


import imageGeneral from '../images/general.jpg'
import { productos } from '../../data/products'

import videoBambu from '../images/anim/video.mp4'

// importaciones de imagenes temporales
import imgBoton from '../images/EstresAnsiedad/imgBotonCorazon.jpg'
import imgCubos from '../images/Hiperfoco/imgCubos.jpg'
import imgPulpos from '../images/Tacto/imgPulpos.jpg'

const navigation = {
    categories: [
        {
            name: 'Sensorial',
            featured: [
                {
                    name: 'Estimulos Sensoriales',
                    href: '#',
                    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Estimulos al tacto',
                    href: '#',
                    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Foco y Concentración',
                    href: '#',
                    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-03.jpg',
                    imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
                },
            ],
        },
        {
            name: 'Decoración',
            featured: [
                {
                    name: 'Desk and Office',
                    href: '#',
                    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
                    imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
                },
                {
                    name: 'Centros de mesa',
                    href: '#',
                    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
                    imageAlt: 'Model wearing light heather gray t-shirt.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
                    imageAlt:
                        'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
                },
            ],
        },
    ],
    pages: [
        { name: 'Ver Todo', href: '#' },
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}
const categories = [
    {
        name: 'New Arrivals',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-01.jpg',
    },
    {
        name: 'Productivity',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-02.jpg',
    },
    {
        name: 'Workspace',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-04.jpg',
    },
    {
        name: 'Accessories',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-05.jpg',
    },
    {
        name: 'Sale',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-03.jpg',
    },
]
const collections = [
    {
        name: 'Sensorial',
        href: '#',
        imageSrc: imgBoton,
        imageAlt: 'Imagen Boton Corazones',
        description: 'Encuentra artículos diseñados para ayudarte a liberar tensiones y relajar tu mente. Nuestros productos sensoriales impresos en 3D son ideales para momentos de estrés, ya que ofrecen una experiencia táctil que calma, distrae y aporta una sensación de bienestar en cualquier lugar.',
    },
    {
        name: 'Tacto',
        href: '#',
        imageSrc: imgPulpos,
        imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
        description: 'Explora la variedad de texturas, formas y movimientos que invitan a descubrir nuevas sensaciones. Estos artículos son perfectos para quienes disfrutan experimentar con el tacto, mantener las manos ocupadas o simplemente añadir un momento de juego y exploración en su rutina.',
    },
    {
        name: 'Focus',
        href: '#',
        imageSrc: imgCubos,
        imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
        description: 'Mantén tu mente enfocada y activa con objetos pensados para estimular la atención y la productividad. Desde mecanismos repetitivos hasta figuras giratorias, cada diseño está creado para acompañarte en tareas largas, estudios o jornadas de trabajo que requieren concentración.',
    },
]


export default function Storefront() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        {/* Links */}
                        <TabGroup className="mt-2">
                            <div className="border-b border-gray-200">
                                <TabList className="-mb-px flex space-x-8 px-4">
                                    {navigation.categories.map((category) => (
                                        <Tab
                                            key={category.name}
                                            className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                                        >
                                            {category.name}
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                            <TabPanels as={Fragment}>
                                {navigation.categories.map((category) => (
                                    <TabPanel key={category.name} className="space-y-12 px-4 py-6">
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                            {category.featured.map((item) => (
                                                <div key={item.name} className="group relative">
                                                    <img
                                                        alt={item.imageAlt}
                                                        src={item.imageSrc}
                                                        className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                                                    />
                                                    <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                                        <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                        {item.name}
                                                    </a>
                                                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                                        Shop now
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </TabGroup>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                        {page.name}
                                    </a>
                                </div>
                            ))}
                        </div>



                    </DialogPanel>
                </div>
            </Dialog>

            {/* Hero section */}
            <div className="relative bg-gray-900">
                {/* Decorative image and overlay */}
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                    <img
                        alt=""
                        src={imageGeneral}
                        className="size-full object-cover"
                    />
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

                {/* Navigation */}
                <header className="relative z-10">
                    <nav aria-label="Top">
                        {/* Secondary navigation */}
                        <div className="bg-white/10 backdrop-blur-md backdrop-filter">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div>
                                    <div className="flex h-16 items-center justify-between">
                                        {/* Logo (lg+) */}
                                        <div className="hidden lg:flex lg:flex-1 lg:items-center">
                                            <a href="#">
                                                <span className="sr-only">Your Company</span>
                                                <img
                                                    alt=""
                                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white"
                                                    className="h-8 w-auto"
                                                />
                                            </a>
                                        </div>

                                        <div className="hidden h-full lg:flex">
                                            {/* Flyout menus */}
                                            <PopoverGroup className="inset-x-0 bottom-0 px-4">
                                                <div className="flex h-full justify-center space-x-8">
                                                    {navigation.categories.map((category) => (
                                                        <Popover key={category.name} className="flex">
                                                            <div className="relative flex">
                                                                <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out">
                                                                    {category.name}
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-[open]:bg-white"
                                                                    />
                                                                </PopoverButton>
                                                            </div>
                                                            <PopoverPanel
                                                                transition
                                                                className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                                            >
                                                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />
                                                                <div className="relative bg-white">
                                                                    <div className="mx-auto max-w-7xl px-8">
                                                                        <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                                                            {category.featured.map((item) => (
                                                                                <div key={item.name} className="group relative">
                                                                                    <img
                                                                                        alt={item.imageAlt}
                                                                                        src={item.imageSrc}
                                                                                        className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                                                                                    />
                                                                                    <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                                                                        <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                                                        {item.name}
                                                                                    </a>
                                                                                    <p aria-hidden="true" className="mt-1">
                                                                                        Shop now
                                                                                    </p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </PopoverPanel>
                                                        </Popover>
                                                    ))}
                                                    {navigation.pages.map((page) => (
                                                        <a
                                                            key={page.name}
                                                            href={page.href}
                                                            className="flex items-center text-sm font-medium text-white"
                                                        >
                                                            {page.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </PopoverGroup>
                                        </div>

                                        {/* Mobile menu and search (lg-) */}
                                        <div className="flex flex-1 items-center lg:hidden">
                                            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-ml-2 p-2 text-white">
                                                <span className="sr-only">Open menu</span>
                                                <Bars3Icon aria-hidden="true" className="size-6" />
                                            </button>

                                            {/* Search */}
                                            <a href="#" className="ml-2 p-2 text-white">
                                                <span className="sr-only">Search</span>
                                                <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                                            </a>
                                        </div>

                                        {/* Logo (lg-) */}
                                        <a href="#" className="lg:hidden">
                                            <span className="sr-only">Your Company</span>
                                            <img
                                                alt=""
                                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white"
                                                className="h-8 w-auto"
                                            />
                                        </a>

                                        <div className="flex flex-1 items-center justify-end">
                                            <a href="#" className="hidden text-sm font-medium text-white lg:block">
                                                Search
                                            </a>

                                            <div className="flex items-center lg:ml-8">
                                                {/* Help */}
                                                <a href="#" className="p-2 text-white lg:hidden">
                                                    <span className="sr-only">Help</span>
                                                    <QuestionMarkCircleIcon aria-hidden="true" className="size-6" />
                                                </a>
                                                <a href="#" className="hidden text-sm font-medium text-white lg:block">
                                                    Help
                                                </a>

                                                {/* Cart */}
                                                <div className="ml-4 flow-root lg:ml-8">
                                                    <a href="#" className="group -m-2 flex items-center p-2">
                                                        <ShoppingBagIcon aria-hidden="true" className="size-6 shrink-0 text-white" />
                                                        <span className="ml-2 text-sm font-medium text-white">0</span>
                                                        <span className="sr-only">items in cart, view bag</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
                    <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
                    <p className="mt-4 text-xl text-white">
                        The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release
                        while they're still in stock.
                    </p>
                    <a
                        href="#"
                        className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                    >
                        Shop New Arrivals
                    </a>
                </div>
            </div>

            <main>
                {/* Category section */}
                <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                        <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                            Categorias
                        </h2>
                        <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                            Ver todas las categorias
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="mt-4 flow-root">
                        <div className="-my-2">
                            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                                    {categories.map((category) => (
                                        <a
                                            key={category.name}
                                            href={category.href}
                                            className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                                        >
                                            <span aria-hidden="true" className="absolute inset-0">
                                                <img alt="" src={category.imageSrc} className="size-full object-cover" />
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                            />
                                            <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 px-4 sm:hidden">
                        <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                            Browse all categories
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </section>

                {/* Featured section */}
                <section
                    aria-labelledby="social-impact-heading"
                    className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
                >
                    <div className="relative overflow-hidden rounded-lg h-96 sm:h-[400px]">
                        <div className="absolute inset-0">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded"
                            >
                                <source src={videoBambu} type="video/mp4" />
                                Tu navegador no soporta el video.
                            </video>
                        </div>
                        <div className="relative bg-gray-900/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16 h-full flex items-center">
                            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                                <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    <span className="block sm:inline">Bambu - Creality</span>
                                </h2>
                                <p className="mt-3 text-xl text-white">
                                    Equipo de impresión 3D de alta precisión y fiabilidad para tus proyectos creativos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Collection section */}
                <section
                    aria-labelledby="collection-heading"
                    className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
                >
                    <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                        Coleccion Sensorial
                    </h2>
                    <p className="mt-4 text-base text-gray-500">
                        Descubre nuestra colección de artículos sensoriales impresos en 3D, diseñados para ayudarte a reducir el estrés, mejorar la concentración y disfrutar de momentos de calma en tu día a día. Explora nuestras categorías y encuentra desde objetos portátiles para llevar a todas partes, hasta piezas con texturas únicas y puzzles que estimulan la mente. Cada diseño está creado con dedicación para ofrecerte una experiencia diferente y personalizada                    </p>

                    <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                        {collections.map((collection) => (
                            <a key={collection.name} href={collection.href} className="group block">
                                <img
                                    alt={collection.imageAlt}
                                    src={collection.imageSrc}
                                    className="aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6]"
                                />
                                <h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
                            </a>
                        ))}
                    </div>
                </section>



                {/* test de importacion imagenes */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">Productos</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {productos.map(producto => (
                            <div key={producto.id} className="bg-white rounded-lg shadow p-4">
                                <img
                                    src={producto.imageSrc}
                                    alt={producto.imageAlt}
                                    className="w-full h-48 object-cover rounded"
                                />
                                <h2 className="mt-2 text-lg font-semibold">{producto.name}</h2>
                                <p className="text-gray-500">{producto.color}</p>
                                <p className="text-gray-700 font-bold">{producto.price}</p>
                                <p className="text-sm text-gray-400">{producto.size}</p>
                            </div>
                        ))}
                    </div>
                </div>



                {/* Featured section */}
                <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative overflow-hidden rounded-lg">
                        <div className="absolute inset-0">
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                                className="size-full object-cover"
                            />
                        </div>
                        <div className="relative bg-gray-900/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                                <h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    Diseños Personalizados
                                </h2>
                                <p className="mt-3 text-xl text-white">
                                    Puedes consultarnos para crear productos que se adapten a tus necesidades y preferencias.
                                    <li> Diseños exclusivos </li>
                                    <li> Llaveros personalizados </li>
                                    <li> Accesorios a medida </li>
                                    <li> Regalos unicos </li>
                                </p>
                                <a
                                    href="#"
                                    className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                                >
                                    Shop Focus
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}
