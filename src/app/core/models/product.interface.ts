export interface Product {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    price: number;
    originalPrice?: number;
    discountPercentage?: number;
    images: string[];
    category: 'mochilas' | 'gorras' | 'otros';
    features: string[];
    specifications?: { label: string; value: string }[];
    options?: { label: string; values: string[] }[];
    video?: string;
    isCustom: boolean;
}