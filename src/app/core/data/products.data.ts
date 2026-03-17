import { Product } from '../models/product.interface';

export const LUX_PRODUCTS: Product[] = [
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
      { label: 'Tipo de carcasa', value: 'Concha dura' },
      { label: 'Material', value: 'ABS (resina ABS)' },
      { label: 'Tipo de cierre', value: 'Cremallera impermeable' },
      { label: 'Instrucciones de cuidado', value: 'Limpieza con paño' },
      { label: 'Compatibilidad', value: 'App Android / iOS' },
      { label: 'Uso ideal', value: 'Viajes largos y ciudad' },
      { label: 'Otros', value: 'no incluye power bank' }
    ],
    isCustom: false
  },
  {
    id: '02-knight',
    name: 'Knight LED',
    subtitle: 'Edición Fibra de Carbono',
    category: 'mochilas',
    price: 350000,
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
      { label: 'Tipo de carcasa', value: 'Concha dura' },
      { label: 'Material', value: 'ABS (resina ABS)' },
      { label: 'Tipo de cierre', value: 'Cremallera impermeable' },
      { label: 'Instrucciones de cuidado', value: 'Limpieza con paño' },
      { label: 'Compatibilidad', value: 'App Android / iOS' },
      { label: 'Uso ideal', value: 'Viajes largos y ciudad' },
      { label: 'Otros', value: 'no incluye power bank' }
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
      { label: 'Tipo de carcasa', value: 'Concha dura' },
      { label: 'Material', value: 'ABS (resina ABS)' },
      { label: 'Tipo de cierre', value: 'Cremallera impermeable' },
      { label: 'Instrucciones de cuidado', value: 'Limpieza con paño' },
      { label: 'Compatibilidad', value: 'App Android / iOS' },
      { label: 'Uso ideal', value: 'Viajes largos y ciudad' },
      { label: 'Otros', value: 'no incluye power bank' }
    ],
    isCustom: false
  },
  {
    id: '04-cyborg',
    name: 'Cyborg Pro',
    subtitle: 'Edición Armadura Expandible',
    category: 'mochilas',
    price: 350000,
    originalPrice: 550000,
    images: [
      'assets/images/cyborg1.png', 'assets/images/cyborg2.png', 'assets/images/cyborg3.png',
      'assets/images/cyborg4.png', 'assets/images/cyborg5.png', 'assets/images/cyborg6.png',
      'assets/images/cyborg7.png', 'assets/images/cyborg8.png', 'assets/images/cyborg9.png'
    ],
    video: 'assets/videos/cyborgvideo.mp4',
    description: 'Mochila blindada con carcasa rígida de alta resistencia y diseño ergonómico. Expandible para casco completo. Pantalla LED DIY personalizable vía Bluetooth.',
    features: ['Diseño Armadura', 'Espacio Capacete Expandible', 'Pantalla DIY Bluetooth'],
    specifications: [
      { label: 'Tipo de carcasa', value: 'Concha dura' },
      { label: 'Material', value: 'ABS (resina ABS)' },
      { label: 'Tipo de cierre', value: 'Cremallera impermeable' },
      { label: 'Instrucciones de cuidado', value: 'Limpieza con paño' },
      { label: 'Compatibilidad', value: 'App Android / iOS' },
      { label: 'Uso ideal', value: 'Viajes largos y ciudad' },
      { label: 'Otros', value: 'no incluye power bank' }
    ],
    isCustom: false
  },
  {
    id: '05-skull',
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
      { label: 'Tipo de carcasa', value: 'Concha dura' },
      { label: 'Material', value: 'ABS (resina ABS)' },
      { label: 'Tipo de cierre', value: 'Cremallera impermeable' },
      { label: 'Instrucciones de cuidado', value: 'Limpieza con paño' },
      { label: 'Compatibilidad', value: 'App Android / iOS' },
      { label: 'Uso ideal', value: 'Viajes largos y ciudad' },
      { label: 'Otros', value: 'no incluye power bank' }
    ],
    isCustom: true
  },
  {
    id: '06-wolf',
    name: 'Wolf LED',
    subtitle: 'Edición especial Lobo',
    category: 'mochilas',
    price: 350000,
    originalPrice: 550000,
    images: [
      'assets/images/wolf1.jpeg', 'assets/images/wolf2.jpeg',
      'assets/images/wolf3.jpeg', 'assets/images/wolf4.jpeg',
      'assets/images/wolf5.jpeg', 'assets/images/wolf6.jpeg'
    ],
    video: 'assets/videos/wolfvideo.mp4',
    description: 'Mochila LED para Motocicleta con Ojo de Demonio, Estilos de Cabeza de Lobo, Luces RGB con Patrón de Ojo Programable.',
    features: ['Ojo de Demonio RGB', 'Control Bluetooth DIY', 'Carcasa ABS Rígida'],
    specifications: [
      { label: 'Tipo de carcasa', value: 'Concha dura' },
      { label: 'Material', value: 'ABS (resina ABS)' },
      { label: 'Tipo de cierre', value: 'Cremallera impermeable' },
      { label: 'Instrucciones de cuidado', value: 'Limpieza con paño' },
      { label: 'Compatibilidad', value: 'App Android / iOS' },
      { label: 'Uso ideal', value: 'Viajes largos y ciudad' },
      { label: 'Otros', value: 'no incluye power bank' }
    ],
    isCustom: false
  },
  {
    id: '07-tigre',
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
      { label: 'Tipo de carcasa', value: 'Concha dura' },
      { label: 'Material', value: 'ABS (resina ABS)' },
      { label: 'Tipo de cierre', value: 'Cremallera impermeable' },
      { label: 'Instrucciones de cuidado', value: 'Limpieza con paño' },
      { label: 'Compatibilidad', value: 'App Android / iOS' },
      { label: 'Uso ideal', value: 'Viajes largos y ciudad' },
      { label: 'Otros', value: 'no incluye power bank' }
    ],
    isCustom: false
  },
  {
    id: '08-lion',
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
      { label: 'Tipo de carcasa', value: 'Concha dura' },
      { label: 'Material', value: 'ABS (resina ABS)' },
      { label: 'Tipo de cierre', value: 'Cremallera impermeable' },
      { label: 'Instrucciones de cuidado', value: 'Limpieza con paño' },
      { label: 'Compatibilidad', value: 'App Android / iOS' },
      { label: 'Uso ideal', value: 'Viajes largos y ciudad' },
      { label: 'Otros', value: 'no incluye power bank' }
    ],
    isCustom: false
  },
  {
    id: '09-powerbank',
    name: 'Power Bank BYGP',
    subtitle: 'Carga Ultrarrápida PD 18W / QC 3.0',
    category: 'otros',
    price: 30000,
    originalPrice: 65000,
    images: [
      'assets/images/power1.png', 'assets/images/power2.jpeg',
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
      { label: 'Capacidad', values: ['10000mAh'] }
    ],
    specifications: [
      { label: 'Tipo de conector', value: 'USB tipo C' },
      { label: 'Características de la batería', value: 'Batería recargable' },
      { label: 'Modo de alimentación', value: 'Alimentado por batería/USB de doble uso' },
      { label: 'Voltaje', value: '≤36 V' },
      { label: 'Capacidad de la batería (mAh)', value: '10000' },
      { label: 'Instrucciones de cuidado', value: 'Evitar humedad y altas temperaturas' },
      { label: 'Uso ideal', value: 'Alimentación de maletas LED y móviles' }
    ],
    isCustom: false
  },
];