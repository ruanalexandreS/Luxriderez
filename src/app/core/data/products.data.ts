import { Product } from '../models/product.interface';

export const LUX_PRODUCTS: Product[] = [
    {
        id: '01-black',
        name: 'Black LED',
        subtitle: 'Edición Black led',
        category: 'mochilas',
        price: 330000,
        originalPrice: 460000,
        images: [
            'assets/images/black1.jpeg',
            'assets/images/black2.jpeg',
            'assets/images/black3.jpeg',
            'assets/images/black4.jpeg',
            'assets/images/black5.jpeg',
            'assets/images/black6.jpeg'
        ],
        video: 'assets/videos/blackvideo.mp4',
        description: 'Mochila de moto con LED, con carcasa rígida y pantalla digital programable, ideal para ciclismo al aire libre y almacenamiento de casco de ciclismo',
        features: ['Pantalla LED interactiva', 'Diseño aerodinámico', 'Impacto nocturno'],
        specifications: [
            { label: 'Material principal', value: 'ABS (resina ABS)' },
            { label: 'Marca', value: 'CRELANDER' },
            { label: 'Instrucciones de cuidado', value: 'Limpieza con paño' },
            { label: 'Tipo', value: 'Ver detalles del producto' },
            { label: 'Color', value: 'Negro' }
        ],
        isCustom: false
    },
    {
        id: '02-knight',
        name: 'Knight LED',
        subtitle: 'Edición Fibra de Carbono',
        category: 'mochilas',
        price: 380000,
        originalPrice: 480000,
        images: ['assets/images/knight1.jpeg',
            'assets/images/knight2.jpeg',
            'assets/images/knight3.jpeg',
            'assets/images/knight4.jpeg',
            'assets/images/knight5.jpeg',
            'assets/images/knight6.jpeg',
            'assets/images/knight7.jpeg',
            'assets/images/knight8.jpeg'],
        video: 'assets/videos/knightvideo.mp4',
        description: 'Mochila LED para Motocicleta con Almacenamiento para Casco - Mochila de Carcasa Dura Ideal para Conducir de Noche, Diseño Deslumbrante y Patrón a Rayas, Equipo de Viaje en Motocicleta para Hombres y Mujeres.',
        features: ['ABS + Policarbonato', 'Espacio Casco Completo', 'App LOY EYES'],
        specifications: [
            { label: 'Material principal', value: 'EVA' },
            { label: 'Instrucciones de cuidado', value: 'Limpieza con paño' },
            { label: 'Tipo', value: 'Ver detalles del producto' },
            { label: 'Color', value: 'Negro' }],
        isCustom: false
    },
    {
        id: '03-skull',
        name: 'Skull LED',
        subtitle: 'Edición Street Rebel',
        category: 'mochilas',
        price: 380000,
        originalPrice: 480000,

        images: ['assets/images/skull1.jpeg',
            'assets/images/skull2.jpeg',
            'assets/images/skull3.jpeg',
            'assets/images/skull4.jpeg',
            'assets/images/skull5.jpeg'],
        video: 'assets/videos/skullvideo.mp4',
        isCustom: true,
        description: 'Mochila LED de Calavera para Motocicleta, Mochila Rígida para Montar, Bolso para Laptop de Motocicleta DIY de Alta Calidad',
        features: ['DIY Text/Graphics', 'Impermeable', 'Diseño Agresivo'],
        specifications: [
            { label: 'Marca', value: 'GELROVA' },
            { label: 'Modo de alimentación', value: 'USB' },
            { label: 'Tipo de impresión', value: 'Sin estampado' },
            { label: 'Características de la batería', value: 'Sin batería' },
            { label: 'Pila recargable', value: 'No' }],
    },
    {
        id: '04-wolf',
        name: 'Wolf LED',
        subtitle: 'Edición especial Lobo',
        category: 'mochilas',
        price: 380000,
        originalPrice: 480000,
        images: [
            'assets/images/wolf1.jpeg',
            'assets/images/wolf2.jpeg',
            'assets/images/wolf3.jpeg',
            'assets/images/wolf4.jpeg',
            'assets/images/wolf5.jpeg',],
        video: 'assets/videos/wolfvideo.mp4',
        description: 'Mochila LED para Motocicleta con Ojo de Demonio, Bolsa para Casco de Motocicleta, Estilos de Cabeza de Lobo, Luces RGB con Patrón de Ojo Programable y Control Bluetooth Móvil DIY, Bolsa para Laptop, Accesorios para Motocicleta de Hombres y Mujeres.',
        features: ['Ojo de Demonio RGB', 'Control Bluetooth DIY', 'Carcasa ABS Rígida'],
        specifications: [
            { label: 'Tipo de carcasa', value: 'Concha dura' },
            { label: 'Descripción de bolsillo', value: 'Bolsillo útil' },
            { label: 'Tipo de cierre', value: 'Cremallera' },
            { label: 'Resistente al agua', value: 'No impermeable' },
            { label: 'Material exterior', value: 'Lienzo' },
            { label: 'Material principal', value: 'ABS (resina ABS)' },
            { label: 'Color', value: 'Negro' },
            { label: 'Propiedades inalámbricas', value: 'Inalámbrico' }
        ],
        isCustom: false
    },
    {
        id: '05-gorra-led',
        name: 'Gorra LED Smart',
        subtitle: 'Edición Bluetooth DIY',
        category: 'gorras',
        price: 150000,
        originalPrice: 250000,
        discountPercentage: 40,
        images: ['assets/images/gorra1.jpeg', 'assets/images/gorra2.jpeg', 'assets/images/gorra3.jpeg'],
        video: 'assets/videos/gorravideo.mp4',
        description: 'Gorra LED con Pantalla, Control por Bluetooth y APP, DIY Editable, Mensaje de Luz Inteligente para Fiestas, Clubes, Baile, Votación, Camping, Regalo Estiloso y Genial para Chicos, Chicas, Hombres, Mujeres, Regalo para el Día del Padre.',
        features: ['Control total vía APP Bluetooth', 'Pantalla LED de alto brilho'],
        specifications: [
            { label: 'Instrucciones de cuidado', value: 'No lavable' },
            { label: 'Tela', value: 'Sin elasticidad' },
            { label: 'Método de tejido', value: 'Tela sin tejido' },
            { label: 'Marca', value: 'CRELANDER' },
            { label: 'Tipo', value: 'Otros' },
            { label: 'Día festivo', value: 'Ninguno' },
            { label: 'Modo de alimentación', value: 'Carga USB' },
            { label: 'Voltaje', value: '≤36 V' },
            { label: 'Proceso secundario', value: 'Bordado Plano' },
            { label: 'Cantidad', value: '1 individual' }
        ],
        isCustom: false
    },
    {
        id: '06-tigre',
        name: 'Tiger LED',
        subtitle: 'Edición Tigre LED',
        category: 'mochilas',
        price: 380000,
        originalPrice: 480000,
        images: [
            'assets/images/tigre1.jpeg',
            'assets/images/tigre2.jpeg',
            'assets/images/tigre3.jpeg',
            'assets/images/tigre4.jpeg',
            'assets/images/tigre5.jpeg',
            'assets/images/tigre6.jpeg',
            'assets/images/tigre7.jpeg',
            'assets/images/tigre8.jpeg',
        ],
        video: 'assets/videos/tigrevideo.mp4',
        description: 'Mochila de conducción con capa dura y ojos LED rojos y blancos. Capacidad grande de 19", ideal para equipo de motocicleta, equipaje y portátil. Diseño elegante con construcción duradera en PVC.',
        features: [
            'Ojos LED Rojos y Blancos',
            'Carcasa Rígida Resistente',
            'Carga USB Integrada',
            'Capacidad de 19 Pulgadas'
        ],
        specifications: [
            { label: 'Material', value: 'PVC' },
            { label: 'Estilo', value: 'Urbano' },
            { label: 'Instrucciones de cuidado', value: 'Lavar a mano o limpieza en seco profesional' },
            { label: 'Marca', value: 'GELROVA' },
            { label: 'Modo de alimentación', value: 'USB' },
            { label: 'Tipo de impresión', value: 'Sin estampado' },
            { label: 'Características de la batería', value: 'Sin batería' },
            { label: 'Pila recargable', value: 'No' }
        ],
        isCustom: false
    },
    {
        id: '07-powerbank',
        name: 'Power Bank BYGP',
        subtitle: 'Carga Ultrarrápida PD 18W / QC 3.0',
        category: 'otros',
        price: 30000,
        originalPrice: 65000,
        images: [
            'assets/images/power1.jpeg', 'assets/images/power2.jpeg',
            'assets/images/power3.jpeg', 'assets/images/power4.jpeg',
            'assets/images/power5.jpeg', 'assets/images/power6.jpeg',
            'assets/images/power7.jpeg', 'assets/images/power8.jpeg',
            'assets/images/power9.jpeg'
        ],
        video: 'assets/videos/powervideo.mp4',
        description: 'Batería externa de carga ultrarrápida compatible con iPhone y Android. Pantalla LED de estado y diseño ultra resistente para exteriores.',
        features: ['Carga rápida 22.5W', 'Pantalla LED', 'Puertos USB-A/C/Micro'],
        options: [
            { label: 'Color', values: ['Negro', 'Blanco'] },
            { label: 'Capacidad', values: ['10000mAh', '20000mAh'] }
        ],
        specifications: [
            { label: 'Tipo de conector', value: 'USB tipo C' },
            { label: 'Modo de alimentación', value: 'Batería/USB dual' },
            { label: 'Voltaje', value: '≤36 V' },
            { label: 'Marca', value: 'BYGP' }
        ],
        isCustom: false
    },
    {
        id: '08-blade-knight',
        name: 'Blade Knight',
        subtitle: 'Edición Blade',
        category: 'mochilas',
        price: 380000,
        originalPrice: 480000,
        images: [
            'assets/images/blade1.jpeg', 'assets/images/blade2.jpeg',
            'assets/images/blade3.jpeg', 'assets/images/blade4.jpeg',
            'assets/images/blade5.jpeg', 'assets/images/blade6.jpeg',
            'assets/images/blade7.jpeg', 'assets/images/blade8.jpeg',
            'assets/images/blade9.jpeg'
        ],
        video: 'assets/videos/bladevideo.mp4',
        description: 'Mochila para casco de moto para conducción, bolsa de almacenamiento expandible de gran capacidad para exteriores para cascos completos, adecuada tanto para hombres como para mujeres.',
        features: [
            'Capacidad Expandible',
            'Espacio para Casco Completo',
            'Carcasa Rígida de ABS',
            'Diseño Ergonómico'
        ],
        options: [
            { label: 'Color', values: ['Negro', 'Gris'] }
        ],
        specifications: [
            { label: 'Material principal', value: 'ABS (resina ABS)' },
            { label: 'Instrucciones de cuidado', value: 'Limpieza con paño' },
            { label: 'Tipo', value: 'Ver detalles del producto' },
            { label: 'Color', value: 'Negro, Gris' }
        ],
        isCustom: false
    },
    {
        id: '09-cojines',
        name: 'Cojines para Asiento',
        subtitle: 'Confort Premium EVA',
        category: 'otros',
        price: 35000,
        originalPrice: 70000,
        images: [
            'assets/images/cojines1.jpeg', 'assets/images/cojines2.jpeg',
            'assets/images/cojines3.jpeg', 'assets/images/cojines4.jpeg',
            'assets/images/cojines5.jpeg', 'assets/images/cojines6.jpeg',
            'assets/images/cojines7.jpeg', 'assets/images/cojines8.jpeg',
            'assets/images/cojines9.jpeg', 'assets/images/cojines10.jpeg'
        ],
        video: 'assets/videos/cojinesvideo.mp4',
        description: 'Dos cojines para asiento de motocicleta (uno grande e uno pequeño) hechos de material EVA absorbente de impactos. Perfectos para viajes largos y actividades de verano.',
        features: [
            'Absorción de Impactos',
            'Circulación de Aire',
            'Protección UV',
            'Resistente al Clima'
        ],
        specifications: [
            { label: 'Tipo de vehículo', value: 'Vehículos todo terreno' },
            { label: 'Modelos aplicables', value: 'Ver detalles del producto' },
            { label: 'Material principal', value: 'EVA' }
        ],
        isCustom: false
    },
];