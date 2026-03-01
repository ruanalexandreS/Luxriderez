export interface Product {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    price: number;
    images: string[];
    category: 'mochilas' | 'gorras';
    features: string[];
    video?: string;
    isCustom: boolean;
}