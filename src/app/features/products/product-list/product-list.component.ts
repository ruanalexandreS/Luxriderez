import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { Product } from '../../../core/models/product.interface';
import { LUX_PRODUCTS } from '../../../core/data/products.data';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = LUX_PRODUCTS;
  
  selectedCategory: string = 'todos';

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'todos') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}