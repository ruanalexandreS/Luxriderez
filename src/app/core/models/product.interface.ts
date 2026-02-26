export interface Product {
id: string;
name: string;
subtitle: string;
price: number;
image: string;
description: string;
features: string[];
isCustom?: boolean;
}