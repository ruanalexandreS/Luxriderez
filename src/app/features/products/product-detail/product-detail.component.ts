import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.interface';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  currentIndex = 0;
  activeTab: 'specs' | 'trust' | 'details' = 'specs';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.selectedProduct$.subscribe(p => {
      this.product = p;
      this.currentIndex = 0;
      this.activeTab = 'specs';
    });
  }

  onClose() {
    this.productService.closeDetail();
  }

  nextMedia() {
    if (this.product) {
      const hasVideo = !!this.product.video;
      const total = this.product.images.length + (hasVideo ? 1 : 0);
      this.currentIndex = (this.currentIndex + 1) % total;
    }
  }

  prevMedia() {
    if (this.product) {
      const hasVideo = !!this.product.video;
      const total = this.product.images.length + (hasVideo ? 1 : 0);
      this.currentIndex = (this.currentIndex - 1 + total) % total;
    }
  }
}