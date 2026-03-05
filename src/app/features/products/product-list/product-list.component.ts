import { Component, OnInit } from '@angular/core';
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
export class ProductListComponent implements OnInit {
  private allProducts: Product[] = LUX_PRODUCTS;

  filteredProducts: Product[] = [];

  ngOnInit(): void {
    this.filteredProducts = this.allProducts
      .filter(p => p.category === 'mochilas')
      .sort((a, b) => {
        return a.id.localeCompare(b.id, undefined, {
          numeric: true,
          sensitivity: 'base'
        });
      });
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}