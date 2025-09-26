import { useParams } from "react-router-dom";
import { productos } from "../../data/products";

export default function ProductDetail() {
    const { id } = useParams();
    const numericId = Number(id);
    const product = productos.find((p) => p.id === numericId);

    if (!product) return <div className="p-8 text-center">Producto no encontrado</div>;

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                {/* Galería de imágenes */}
                <div className="flex flex-col items-center justify-center">
                    <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="rounded-lg shadow-lg w-80 h-auto object-cover"
                    />
                </div>
                {/* Detalles del producto */}
                <div className="mt-10 lg:mt-0">
                    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                    <p className="mt-4 text-gray-700">{product.color}</p>
                    <p className="mt-2 text-gray-500">Tamaño: {product.size}</p>
                    <p className="mt-6 text-2xl font-semibold text-indigo-600">{product.price}</p>
                    {/* Botón de acción */}
                    <button
                        type="button"
                        className="mt-8 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}