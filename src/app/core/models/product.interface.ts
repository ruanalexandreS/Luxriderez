export interface Product {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    price: number;
    originalPrice?: number;
    discountPercentage?: number;
    images: string[];
    category: 'mochilas' | 'gorras';
    features: string[];
    specifications?: { label: string; value: string }[];
    video?: string;
    isCustom: boolean;
}