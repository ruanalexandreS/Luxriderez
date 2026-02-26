import { Product } from '../models/product.interface';

export const LUX_PRODUCTS: Product[] = [
    {
        id: 'knight',
        name: 'Knight LED',
        subtitle: 'Diseño Armadura Futurista',
        price: 330000,
        image: 'assets/knight.png',
        description: 'El modelo más vendido para protección rígida.',
        features: ['ABS + Policarbonato', 'Espacio Casco Completo', 'App LOY EYES']
    },
    {
        id: 'skull',
        name: 'Skull LED',
        subtitle: 'Edición Street Rebel',
        price: 380000,
        image: 'assets/skull.png',
        isCustom: true,
        description: 'Iluminación dinámica con diseño exclusivo de calavera.',
        features: ['DIY Text/Graphics', 'Impermeable', 'Diseño Agresivo']
    },
    {
        id: 'wolf',
        name: 'Wolf LED',
        subtitle: 'Edición Marrón',
        price: 350000,
        image: 'assets/images/wolf1.jpeg',
        description: 'Mochila LED para Motocicleta con Ojo de Demonio, Bolsa para Casco de Motocicleta, Estilos de Cabeza de Lobo y Tigre, Luces RGB con Patrón de Ojo Programable y Control Bluetooth Móvil DIY, Bolsa para Laptop, Tamaño Grande 48.26 cm.',
        features: ['Ojo de Demonio RGB', 'Control Bluetooth DIY', 'Carcasa ABS Rígida', 'Espacio para Laptop']
    },
    {
        id: 'lion',
        name: 'Lion LED',
        subtitle: 'Edición Marrón',
        price: 350000,
        image: 'assets/lion.png',
        description: 'Diseño exclusivo de león marrón para motociclistas que buscan estilo y protección.',
        features: ['ABS + Policarbonato', 'Espacio Casco Completo', 'App LOY EYES']
    },
];