import { Product } from '../models/product.interface';

export const LUX_PRODUCTS: Product[] = [
{
    id: '00-futurista', 
    name: 'Futurista Pro',
    subtitle: 'Edición Inteligente DIY',
    category: 'mochilas',
    price: 350000,
    originalPrice: 550000,
    images: [
      'assets/images/futurista1.png',
      'assets/images/futurista2.png',
      'assets/images/futurista3.png'
    ],
    video: 'assets/videos/futuristavideo.mp4',
    description: 'Morral o maleta led ojos futuristas semi impermeable de alta gama. La máxima expresión de tecnología en la ruta, permitiendo personalizar tus ojos digitales con GIFs, fotos y textos en tiempo real.',
    features: [
      'Pantalla DIY (Texto/GIF/Imágenes)',
      'Material Semi-Impermeable Pro',
      'Carcasa Rígida de Alta Resistencia',
      'Control Total vía Bluetooth'
    ],
    specifications: [
        { label: 'Material principal', value: 'ABS + Tela Impermeable' },
        { label: 'Marca', value: 'CRELANDER' },
        { label: 'Instrucciones de cuidado', value: 'Limpieza con paño seco' },
        { label: 'Capacidad', value: 'Portátil de hasta 15.6"' },
        { label: 'Alimentación', value: 'Power Bank USB (no incluido)' },
        { label: 'Tipo de pantalla', value: 'Full Color Digital' }
    ],
    isCustom: false
},  
    {
    id: '01-black',
    name: 'Black LED',
    subtitle: 'Edición Futurista Pro',
    category: 'mochilas',
    price: 350000,
    originalPrice: 550000,
    images: [
      'assets/images/black1.jpeg', 'assets/images/black2.jpeg',
      'assets/images/black3.jpeg', 'assets/images/black4.jpeg',
      'assets/images/black5.jpeg', 'assets/images/black6.jpeg'
    ],
    video: 'assets/videos/blackvideo.mp4',
    description: 'Mochila de moto con LED, con carcasa rígida y pantalla digital programable, ideal para ciclismo al aire libre y almacenamiento de casco de ciclismo.',
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
    price: 335000,
    originalPrice: 480000,
    images: [
      'assets/images/knight1.jpeg', 'assets/images/knight2.jpeg',
      'assets/images/knight3.jpeg', 'assets/images/knight4.jpeg',
      'assets/images/knight5.jpeg', 'assets/images/knight6.jpeg',
      'assets/images/knight7.jpeg', 'assets/images/knight8.jpeg'
    ],
    video: 'assets/videos/knightvideo.mp4',
    description: 'Mochila LED para Motocicleta con Almacenamiento para Casco - Carcasa Dura Ideal para Conducir de Noche, Diseño Deslumbrante y Patrón a Rayas.',
    features: ['ABS + Policarbonato', 'Espacio Casco Completo', 'App LOY EYES'],
    specifications: [
      { label: 'Material principal', value: 'EVA' },
      { label: 'Instrucciones de cuidado', value: 'Limpieza con paño' },
      { label: 'Tipo', value: 'Ver detalles del producto' },
      { label: 'Color', value: 'Negro' }
    ],
    isCustom: false
  },
  {
    id: '03-blade-knight',
    name: 'Blade Knight',
    subtitle: 'Edición Blade Expandible',
    category: 'mochilas',
    price: 350000,
    originalPrice: 550000,
    images: [
      'assets/images/blade1.jpeg', 'assets/images/blade2.jpeg',
      'assets/images/blade3.jpeg', 'assets/images/blade4.jpeg',
      'assets/images/blade5.jpeg', 'assets/images/blade6.jpeg',
      'assets/images/blade7.jpeg', 'assets/images/blade8.jpeg',
      'assets/images/blade9.jpeg'
    ],
    video: 'assets/videos/bladevideo.mp4',
    description: 'Mochila para casco de moto para conducción, bolsa de almacenamiento expandible de gran capacidad.',
    features: ['Capacidad Expandible', 'Espacio para Casco Completo', 'Carcasa Rígida de ABS'],
    options: [{ label: 'Color', values: ['Negro', 'Gris'] }],
    specifications: [
      { label: 'Material principal', value: 'ABS (resina ABS)' },
      { label: 'Color', value: 'Negro, Gris' }
    ],
    isCustom: false
  },
  {
    id: '04-skull',
    name: 'Skull LED',
    subtitle: 'Edición Street Rebel',
    category: 'mochilas',
    price: 350000,
    originalPrice: 550000,
    images: [
      'assets/images/skull1.jpeg', 'assets/images/skull2.jpeg',
      'assets/images/skull3.jpeg', 'assets/images/skull4.jpeg',
      'assets/images/skull5.jpeg'
    ],
    video: 'assets/videos/skullvideo.mp4',
    description: 'Mochila LED de Calavera para Motocicleta, Mochila Rígida para Montar, Bolso para Laptop de Motocicleta DIY de Alta Calidad.',
    features: ['DIY Text/Graphics', 'Impermeable', 'Diseño Agresivo'],
    specifications: [
      { label: 'Marca', value: 'GELROVA' },
      { label: 'Modo de alimentación', value: 'USB' },
      { label: 'Tipo de impresión', value: 'Sin estampado' },
      { label: 'Pila recargable', value: 'No' }
    ],
    isCustom: true
  },
  {
    id: '05-wolf',
    name: 'Wolf LED',
    subtitle: 'Edición especial Lobo',
    category: 'mochilas',
    price: 350000,
    originalPrice: 550000,
    images: [
      'assets/images/wolf1.jpeg', 'assets/images/wolf2.jpeg',
      'assets/images/wolf3.jpeg', 'assets/images/wolf4.jpeg',
      'assets/images/wolf5.jpeg'
    ],
    video: 'assets/videos/wolfvideo.mp4',
    description: 'Mochila LED para Motocicleta con Ojo de Demonio, Estilos de Cabeza de Lobo, Luces RGB con Patrón de Ojo Programable.',
    features: ['Ojo de Demonio RGB', 'Control Bluetooth DIY', 'Carcasa ABS Rígida'],
    specifications: [
      { label: 'Material principal', value: 'ABS (resina ABS)' },
      { label: 'Color', value: 'Negro' },
      { label: 'Tipo de cierre', value: 'Cremallera' }
    ],
    isCustom: false
  },
  {
    id: '06-tigre',
    name: 'Tiger LED',
    subtitle: 'Edición Tigre LED',
    category: 'mochilas',
    price: 350000,
    originalPrice: 550000,
    images: [
      'assets/images/tigre1.jpeg', 'assets/images/tigre2.jpeg',
      'assets/images/tigre3.jpeg', 'assets/images/tigre4.jpeg',
      'assets/images/tigre5.jpeg', 'assets/images/tigre6.jpeg',
      'assets/images/tigre7.jpeg', 'assets/images/tigre8.jpeg'
    ],
    video: 'assets/videos/tigrevideo.mp4',
    description: 'Mochila de conducción con capa dura e olhos LED vermelhos e brancos. Design elegante com construção durável em PVC.',
    features: ['Ojos LED Rojos y Blancos', 'Carga USB Integrada', 'Capacidad 19"'],
    specifications: [
      { label: 'Material', value: 'PVC' },
      { label: 'Marca', value: 'GELROVA' },
      { label: 'Modo de alimentación', value: 'USB' }
    ],
    isCustom: false
  },
  {
    id: '07-lion',
    name: 'Lion LED',
    subtitle: 'Edición Lion - Mirada Real',
    category: 'mochilas',
    price: 350000,
    originalPrice: 550000,
    images: [
      'assets/images/lion1.png',
      'assets/images/lion2.png',
      'assets/images/lion3.png',
      'assets/images/lion4.png'
    ],
    video: 'assets/videos/lionvideo.mp4',
    description: 'Morral o maleta led ojos futuristas lion led, semi impermeables y resistentes para gente con estilo único en cada ruta. Diseño agresivo con carcasa rígida y pantalla LED de alta definición.',
    features: [
      'Mirada de León LED RGB',
      'Carcasa Rígida Anti-Impacto',
      'Material Semi-Impermeable',
      'Conexión Bluetooth vía App'
    ],
    specifications: [
        { label: 'Material principal', value: 'ABS + EVA' },
        { label: 'Color', value: 'Marrón / Negro' },
        { label: 'Marca', value: 'GELROVA' },
        { label: 'Instrucciones de cuidado', value: 'Limpieza con paño húmedo' },
        { label: 'Compatibilidad', value: 'App Android / iOS' },
        { label: 'Cierre', value: 'Cremallera Reforzada' },
        { label: 'Uso ideal', value: 'Viajes largos y ciudad' }
    ],
    isCustom: false
},
];