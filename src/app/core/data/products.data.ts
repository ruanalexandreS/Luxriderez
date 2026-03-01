import { Product } from '../models/product.interface';

export const LUX_PRODUCTS: Product[] = [
    {
        id: 'knight',
        name: 'Knight LED',
        subtitle: 'Diseño Armadura Futurista',
        category: 'mochilas',
        price: 330000,
        images: ['assets/images/knight.png'],
        description: 'El modelo más vendido para protección rígida.',
        features: ['ABS + Policarbonato', 'Espacio Casco Completo', 'App LOY EYES'],
        isCustom: false
    },
    {
        id: 'skull',
        name: 'Skull LED',
        subtitle: 'Edición Street Rebel',
        category: 'mochilas',
        price: 380000,
        images: ['assets/images/skull.png'],
        isCustom: true,
        description: 'Iluminación dinâmica con diseño exclusivo de calavera.',
        features: ['DIY Text/Graphics', 'Impermeable', 'Diseño Agresivo']
    },
    {
        id: 'wolf',
        name: 'Wolf LED',
        subtitle: 'Ojo de Demonio',
        category: 'mochilas',
        price: 350000,
        images: [
            'assets/images/wolf1.jpeg',
            'assets/images/wolf2.jpeg',
            'assets/images/wolf3.jpeg',
            'assets/images/wolf4.jpeg',
            'assets/images/wolf5.jpeg',
            'assets/images/wolf6.jpeg'
        ],
        video: 'assets/videos/wolfvideo.mp4',
        description: 'Mochila LED para Motocicleta con Ojo de Demonio. Estilos de Cabeza de Lobo y Tigre.',
        features: ['Ojo de Demonio RGB', 'Control Bluetooth DIY', 'Carcasa ABS Rígida'],
        isCustom: false
    },
    {
        id: 'gorra-led',
        name: 'Gorra LED Smart',
        subtitle: 'Edición Bluetooth DIY',
        category: 'gorras',
        price: 150000,
        images: ['assets/images/gorra1.jpeg', 'assets/images/gorra2.jpeg', 'assets/images/gorra3.jpeg'],
        video: 'assets/videos/gorravideo.mp4',
        description: 'Gorra LED con Pantalla, Control por Bluetooth e APP.',
        features: ['Control total vía APP Bluetooth', 'Pantalla LED de alto brilho'],
        isCustom: false
    }
];